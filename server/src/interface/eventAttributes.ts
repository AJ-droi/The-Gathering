export interface Image{
    id:string
    url: string;
}

export interface Attendees{
    fullname:string;
    email:string;
    phone:string;
    numberOfTickets:number;
}

export interface EventAttributes{
    id: string;
    eventName: string;
    eventDate: Date;
    eventLocation: string;
    eventDescription: string;
    eventImages: string[];
    creatorId: string;
    attendees: Attendees[];
    ticketPrice: number;
}