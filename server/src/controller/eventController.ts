import { Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { EventAttributes } from "../interface/eventAttributes";
import { UserAttributes } from "../interface/userAttributes";
import { EventInstance } from "../model/eventModel";
import { UserInstance } from "../model/userModel";
import { eventSchema, option } from "../utils/validate";
import { v4 as uuidV4 } from "uuid";
import { PhotographerInstance } from "../model/photographerModel";
import { PhotographerAttributes } from "../interface/photographerAttributes";

export const createEvent = async (req: JwtPayload, res: Response) => {
  try {
    const id = req.user.id;
    const { eventName, eventDescription, eventLocation, eventDate, ticketPrice } = req.body;
    const uuidEvent = uuidV4();

    const validateResult = eventSchema.validate(req.body, option);

    if (validateResult.error) {
      return res.status(400).json({
        Error: validateResult.error.details[0].message,
      });
    }

    const Admin = (await UserInstance.findOne({
      where: { id: id },
    })) as unknown as UserAttributes;

    if (Admin.role === "admin" || Admin.role === "superadmin") {
      const event = (await EventInstance.create({
        id: uuidEvent,
        eventName,
        eventDescription,
        eventLocation,
        eventDate,
        eventImages: [],
        creatorId: Admin.id,
        attendees: [],
        ticketPrice: ticketPrice,
      })) as unknown as EventAttributes;

      return res.status(201).json({
        message: "Event created successfully",
        event,
      });
    }
  } catch (err) {
    res.status(500).json({
      Error: "Internal server Error",
      route: "/admins/create-event",
    });
  }
};



export const uploadEventPhotos = async (req: JwtPayload, res: Response) => {
  try {
    const id = req.user.id;
    
    const { eventId } = req.body;

    const photographer = await PhotographerInstance.findOne({
      where: { id:id },
    }) as unknown as PhotographerAttributes;


    if (!photographer) {
      return res.status(400).json({
        message: "Photographer Not Found",
      });
    }

    console.log("id", eventId)
    const event = await EventInstance.findOne({
      where: { id: eventId },
    }) as unknown as EventAttributes;

 

    if (!event) {
      return res.status(400).json({
        message: "Event Not Found",
      });
    }

    console.log(req.files)

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        message: "No images found in request",
      });
    }

    const eventImages = event.eventImages || [];

    const newImages = req.files.map((file: any) => {
      return{
        id: uuidV4(),
        url: file.path,
      }
    });

    const newImageUrls = newImages.map((image:any) => image.url);

    await EventInstance.update(
      { eventImages: [...eventImages, ...newImageUrls] },
      { where: { id: eventId } }
    );
    

    const updatedEvent = await EventInstance.findOne({
      where: { id: eventId },
    });

    return res.status(200).json({
      message: "Event Photos Uploaded Successfully",
      event: updatedEvent,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      Error: "Internal server Error",
      route: "/photographer/upload-photos",
    });
  }
};

export const getEvents = async (req: JwtPayload, res: Response) => {
  try {
   
    const events = await EventInstance.findAll();

    return res.status(200).json({
      events,
    });
  } catch (err) {
    return res.status(500).json({
      Error: "Internal server Error",
      route: "/events",
    });
  }
}

export const deleteEvent = async (req: JwtPayload, res: Response) => {
  try {
    const { id } = req.params;

    const adminId = req.user.id;

    const event = await EventInstance.findOne({
      where: { id:id },
    });

    if (!event) {
      return res.status(400).json({
        message: "Event Not Found",
      });
    }

    const admin = await UserInstance.findOne({
      where: { id: adminId },
    });

    if (!admin) {
      return res.status(400).json({
        message: "Admin Not Found",
      });
    }

    await EventInstance.destroy({
      where: { id: id},
    });

    return res.status(200).json({
      message: "Event Deleted Successfully",
    });
  } catch (err) {
    return res.status(500).json({
      Error: "Internal server Error",
      route: "/events",
    });
  }
}

export const deletePhotos = async (req: JwtPayload, res: Response) => {
  try{
    const {eventId, url} = req.query;

    const {id} = req.user

    const photographer = await PhotographerInstance.findOne({
      where: {id},
    }) as unknown as PhotographerAttributes;

    if(!photographer){
      return res.status(400).json({
        message: "Photographer Not Found",
      });
    }

    const event = await EventInstance.findOne({
      where: {id: eventId},
    }) as unknown as EventAttributes;

    if(!event){
      return res.status(400).json({
        message: "Event Not Found",
      });
    }

    const eventImages = event.eventImages || [];

    const newEventImages = eventImages.filter((image) => image.split("/").reverse()[0] !== `${url}`);

    console.log(newEventImages)

    await EventInstance.update(
      {eventImages: newEventImages},
      {where: {id: eventId}}
    );

    const updatedEvent = await EventInstance.findOne({
      where: {id: eventId},
    });

    console.log(updatedEvent)

    return res.status(200).json({
      message: "Event Photos Deleted Successfully",
      event: updatedEvent,
    });


  }catch(err){
    return res.status(500).json({
      Error: "Internal server Error",
      route: "/events",
    });
  }
}