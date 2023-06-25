import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Button from "../../components/common/Button";
import { getEvents, registerEvent } from "../../redux/actions";
import { EventCard } from "./DashboardEvent";

const BuyTicket = () => {
  const [formData, setFormData] = useState<any>(null);

  const dispatch = useDispatch() as unknown as any

  const {id} = useParams()

  const handleChange = async (e: any) => {
    if(e.target.name === 'numberOfTickets') {
        const num = parseInt(e.target.value)
        setFormData({
            ...formData,
            [e.target.name]: num
        })
    }else{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })

    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    dispatch(registerEvent({formData, id}));
    setFormData({
        fullname: '',
        email: '',
        numberOfTickets: 0,
        phone: ''
    })

  }

  const events = useSelector((state:any) => state.data.events)

  const ticket = events.find((event:any) => event.id === id)

  console.log(ticket)

  useEffect(() => {
    dispatch(getEvents())
  }, [])


  return (
    <div>
      <div className="w-[50%] mt-[7%]">
        <h3 className="text-[#FF6E31] text-left ml-[15%] font-[500] text-[1.5rem]">
          Buy Tickets
        </h3>
        <EventCard name={ticket?.eventName} date={ticket?.eventDate} />
      </div>

      <div className="grid grid-cols-2 justify-center pl-[3%] py-[2%] ">
        <div className="w-[100%] flex flex-col items-start my-[1%]">
          <label className="my-[2%]">Full Name</label>
          <br />
          <input
            type={"text"}
            name={"fullname"}
            placeholder={"Enter Your Full Name"}
            className={
              "border border-[#FF6E31] rounded-xl w-[90%] py-[2%] pl-[2%] mt-[-8%] xl:mt-[-3%]"
            }
            value={formData?.fullname}
            onChange={handleChange}
          />
        </div>
        <div className="w-[100%] flex flex-col items-start my-[1%]">
          <label className="my-[2%]">Email Address</label>
          <br />
          <input
            type={"email"}
            name={"email"}
            placeholder={"Enter Your Email Address"}
            className={
              "border border-[#FF6E31] rounded-xl w-[90%] py-[2%] pl-[2%] mt-[-8%] xl:mt-[-3%]"
            }
            value={formData?.email}
            onChange={handleChange}
          />
        </div>

        <div className="w-[100%] flex flex-col items-start my-[1%]">
          <label className="my-[2%]">Phone Number</label>
          <br />
          <input
            type={"tel"}
            name={"phone"}
            placeholder={"Enter Your Phone Number"}
            className={
              "border border-[#FF6E31] rounded-xl w-[90%] py-[2%] pl-[2%] mt-[-8%] xl:mt-[-3%]"
            }
            value={formData?.phone}
            onChange={handleChange}
          />
        </div>
        <div className="w-[100%] flex flex-col items-start my-[1%]">
          <label className="my-[2%]">Number of Tickets</label>
          <br />
          <input
            type={"number"}
            name={"numberOfTickets"}
            placeholder={"Enter the Number"}
            className={
              "border border-[#FF6E31] rounded-xl w-[90%] py-[2%] pl-[2%] mt-[-8%] xl:mt-[-3%]"
            }
            value={formData?.numberOfTickets}
            onChange={handleChange}
          />
        </div>
      </div>
      <Button
        title={"Buy Ticket"}
        classes={
          " flex-row-reverse text-[#fff] py-[1%] bg-[#FF6E31] w-[30%] mx-auto"
        }
        onClick={handleSubmit}
      />
    </div>
  );
};

export default BuyTicket;
