import { SignInput } from "../../components/common/Input"
import addPhoto from "../../assets/addPhoto.png"
import Button from "../../components/common/Button"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { createEvent } from "../../redux/actions"


const AddEvent = () => {

  const [formData, setFormData] = useState({
    eventName: '',
    eventDate: '',
    eventLocation: '',
    eventDescription: '',
    ticketPrice: '',
  })

  const dispatch = useDispatch() as unknown as any

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async(e: any) => {
    e.preventDefault()
    dispatch(createEvent(formData))
  }
  return (
    <div className="my-[17%] lg:my-[0%]"> 
    <div className="lg:w-[70%] h-[80vh] py-[7%] flex flex-col justify-start  md:justify-evenly">
        <div className="lg:text-left lg:ml-[15%]">
        <h3 className="text-[1.4rem]">Add event</h3>
        <p className="mt-[2%] lg:text-[1.2rem]">
        Please Enter the Details for a new event Below
        </p>
        </div>

        <SignInput
        caption={"Name of Event"}
        type={"text"}
        placeholder={"Enter Your Name of Event"}
        signStyle={`rounded-xl border border-[#FF6E31] border-[2px] outline-none px-[20px] text-[#000] w-[100%] h-[5vh] my-[3%] lg:my-[0%]`}
        name={"eventName"}
        value={formData?.eventName}
        onchange={handleChange}
        />

        <SignInput
        caption={"Date of Event"}
        type={"date"}
        placeholder={"Enter Your Last Name"}
        signStyle={`rounded-xl border border-[#FF6E31] border-[2px] outline-none px-[20px] text-[#000] w-[100%] h-[5vh] my-[3%] lg:my-[0%]`}
        name={"eventDate"}
        value={formData?.eventDate}
        onchange={handleChange}
        />

      <SignInput
            caption={`Venue of Event`}
            type={"text"}
            placeholder={"Enter the venue of the event"}
            signStyle={`rounded-xl border border-[#FF6E31] border-[2px] outline-none px-[20px] text-[#000] w-[100%] h-[5vh] my-[3%] lg:my-[0%]`}
            name={"eventLocation"}
            value={formData?.eventLocation}
            onchange={handleChange}
        />      

      <SignInput
            caption={`Description of Event`}
            type={"text"}
            placeholder={"Enter the details of the event"}
            signStyle={`rounded-xl border border-[#FF6E31] border-[2px] outline-none px-[20px] text-[#000] w-[100%] h-[5vh] my-[3%] lg:my-[0%]`}
            name={"eventDescription"}
            value={formData?.eventDescription}
            onchange={handleChange}
        />   

        <SignInput
            caption={`Ticket Price`}
            type={"number"}
            placeholder={"Enter Your Price"}
            signStyle={`rounded-xl border border-[#FF6E31] border-[2px] outline-none px-[20px] text-[#000] w-[100%] h-[5vh] my-[3%] lg:my-[0%]`}
            name={"ticketPrice"}
            value={formData?.ticketPrice}
            onchange={handleChange}
        />
        <Button title={"Add New Event"} source={addPhoto} classes={"bg-[#FF6E31] flex-row-reverse lg:w-[30%] mx-auto py-[2%] px-[5%] text-[#fff]"} onClick={handleSubmit} />
        </div>
    </div>
  )
}

export default AddEvent