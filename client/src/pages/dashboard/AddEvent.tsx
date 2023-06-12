import { SignInput } from "../../components/common/Input"
import addPhoto from "../../assets/addPhoto.png"
import Button from "../../components/common/Button"


const AddEvent = () => {
  return (
    <div> 
    <div className="w-[70%] h-[80vh] py-[7%] flex flex-col justify-start  md:justify-evenly">
        <div className="text-left ml-[15%]">
        <h3 className="text-[1.4rem]">Add event</h3>
        <p className="mt-[2%] lg:text-[1.2rem]">
        Please Enter the Details for a new event Below
        </p>
        </div>

        <SignInput
        caption={"Name of Event"}
        type={"text"}
        placeholder={"Enter Your Name of Event"}
        signStyle={`rounded-xl border border-[#FF6E31] border-[2px] outline-none px-[20px] text-[#000] w-[100%] h-[5vh]`}
        name={"firstName"}
        value={''}
        />

        <SignInput
        caption={"Date of Event"}
        type={"date"}
        placeholder={"Enter Your Last Name"}
        signStyle={`rounded-xl border border-[#FF6E31] border-[2px] outline-none px-[20px] text-[#000] w-[100%] h-[5vh]`}
        name={"lastName"}
        value={''}
        />

        <SignInput
            caption={`Ticket Price`}
            type={"number"}
            placeholder={"Enter Your Price"}
            signStyle={`rounded-xl border border-[#FF6E31] border-[2px] outline-none px-[20px] text-[#000] w-[100%] h-[5vh]`}
            name={"phone"}
            value={''}

        />
        <Button title={"Add New Event"} source={addPhoto} classes={"bg-[#FF6E31] flex-row-reverse w-[30%] mx-auto py-[2%] px-[5%] text-[#fff]"} />
        </div>
    </div>
  )
}

export default AddEvent