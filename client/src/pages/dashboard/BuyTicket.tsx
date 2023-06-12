import Button from "../../components/common/Button"
import { EventCard } from "./DashboardEvent"


const BuyTicket = () => {
  return (
    <div>
        
        <div className="w-[50%] mt-[7%]">
            <h3 className="text-[#FF6E31] text-left ml-[15%] font-[500] text-[1.5rem]">Buy Tickets</h3>
            <EventCard />
        </div>

        <div className='grid grid-cols-2 justify-center pl-[3%] py-[2%] '>
            <div className='w-[100%] flex flex-col items-start my-[1%]'>
                <label className='my-[2%]'>Full Name</label><br />
                <input type={'text'} placeholder={'Enter Your Full Name'} value={''} className={'border border-[#FF6E31] rounded-xl w-[90%] py-[2%] pl-[2%] mt-[-8%] xl:mt-[-3%]'} />
            </div>
            <div className='w-[100%] flex flex-col items-start my-[1%]'>
                <label className='my-[2%]'>Email Address</label><br />
                <input type={'email'} placeholder={'Enter Your Email Address'} value={''} className={'border border-[#FF6E31] rounded-xl w-[90%] py-[2%] pl-[2%] mt-[-8%] xl:mt-[-3%]' }  />
            </div>
        
            <div className='w-[100%] flex flex-col items-start my-[1%]'>
                <label className='my-[2%]'>Phone Number</label><br />
                <input type={'tel'} placeholder={'Enter Your Phone Number'} value={''} className={'border border-[#FF6E31] rounded-xl w-[90%] py-[2%] pl-[2%] mt-[-8%] xl:mt-[-3%]'} />
            </div>
            <div className='w-[100%] flex flex-col items-start my-[1%]'>
                <label className='my-[2%]'>Number of Tickets</label><br />
                <input type={'number'} placeholder={'Enter the Number'} value={''} className={'border border-[#FF6E31] rounded-xl w-[90%] py-[2%] pl-[2%] mt-[-8%] xl:mt-[-3%]'} />
            </div>
        </div>
        <Button title={"Buy Ticket"}  classes={" flex-row-reverse text-[#fff] py-[1%] bg-[#FF6E31] w-[30%] mx-auto"} />
        


    </div>
  )
}

export default BuyTicket