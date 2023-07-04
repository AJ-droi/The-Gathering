import { Link, useLocation } from 'react-router-dom'
import search from '../../assets/search.png'
import addPhoto from '../../assets/addPhoto.png'
import Button from '../../components/common/Button'
import calendar from '../../assets/calendar.png'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getEvents } from '../../redux/actions'
import { PaginationBar } from './DashboardNotifications'

const DashboardEvent = () => {
  const role = localStorage.getItem('role')
  return (
    <>
    {role === "superadmin" || role === "admin" ? <AdminEvent /> : <UserEvent />}
    </>

  )

}
export default DashboardEvent

const AdminEvent = () => {
  const events = useSelector((state:any) => state.data.events)

  console.log(events)
  const dispatch = useDispatch() as unknown as any

  useEffect(() => {
    dispatch(getEvents())
  }, [])


  const [page, setPage] = useState(1)

  const prev = () => {
    setPage(page - 1)
  }

  const next = () => {
    setPage(page + 1)
  }

  const NoOfItems = 7
  const lastIndex = page * NoOfItems
  const firstIndex = lastIndex - NoOfItems

  const users = events?.slice(firstIndex, lastIndex)

  

  return (
    <div className='my-[17%] lg:my-[0%]' >
      <div className='flex flex-col lg:flex-row justify-between items-center px-[5%] my-[7%]'>
        <h3 className='text-[1.2rem] text-[#4C4C4C] font-[500]'>All Events</h3>
        <div className="flex items-center bg-[#fff] py-[1%] px-[1%] rounded-md lg:mr-[5%] w-[70%] lg:w-[30%]">
          <img src={search} alt="" className="h-[2vh]" />
          <input type="text" placeholder="Search Events" className="pl-[4%]" />
        </div>
      </div>
  
      <div className='px-[3%] overflow-scroll'>
      <table className='w-[400%] lg:w-[100%] '>
          <thead>
            <tr className='text-[#4C4C4C] '>
              <th className='font-[500]'>Name of event</th>
              <th className='font-[500]'>Date of event</th>
              <th className='font-[500]'>Number of people that registered for the event</th>
              <th className='font-[500]'>Ticket price</th>
            </tr>
          </thead>  
          <tbody>
            {users?.map((event:any, id:number) => (
            <tr className='h-[7vh] border border-b-[#fff] border-b-[2px] text-[#4C4C4C]' key={id}> 
              <td>{event.eventName}</td>
              <td className='text-[#FF6E31]'>{(`${new Date(event.eventDate)}`).slice(0,16)}</td>
              <td>{event.attendees.length}</td>
              <td>{event.ticketPrice || 0}</td>
            </tr>))}
            
          </tbody>

        </table>

        <div className="flex justify-between items-center my-[5%] w-[100%] ">
          <p>Showing {firstIndex}-{lastIndex > users?.length ? users?.length : lastIndex } from {users?.length} data</p>
          <div className="flex w-[30%] justify-end">
            <p className="bg-[##C2C2C2] border border-[black] w-[5%] px-[4%] py-[2%] flex justify-center rounded-md" onClick={firstIndex > 1 ?prev : () => null} > {"<"} </p>
            <p className="bg-[#FF6E31]  w-[5%] flex justify-center rounded-md px-[4%] py-[2%] text-[#fff] flex justify-center items-center mx-[2%]"> {page} </p>
            <p className="bg-[##C2C2C2] border border-[black] w-[5%] px-[4%] py-[2%] flex items-center justify-center rounded-md" onClick={lastIndex === events?.length  ? next : () => null}> {">"} </p>
          </div>
        </div>

        <div className="flex justify-end items-center my-[5%]">
          <Link to="/dashboard/add-event" className="w-[50%] lg:w-[20%] bg-[#FF6E31] flex items-center justify-center rounded-md"><Button title={"Add Event"} source={addPhoto} classes={" flex-row-reverse text-[#fff] py-[5%]"} /></Link>
        </div>
      </div>


      
        
      </div>


  )
}

const UserEvent = () => {
  const events = useSelector((state:any) => state.data.events)

  const dispatch = useDispatch() as unknown as any

  useEffect(() => {
    dispatch(getEvents())
  }, [])


  const [page, setPage] = useState(1)

 
  const NoOfItems = 6
  const lastIndex = page * NoOfItems
  const firstIndex = lastIndex - NoOfItems

  const currentItems = events?.slice(firstIndex, lastIndex)

  const prev = () => {
    page > 1 ? setPage(page - 1) : setPage(1);
  };

  const next = () => {
    if (currentItems.length / NoOfItems >= 1) {
      setPage(page + 1);
    }
  };



  return (
    <div>
    <div className='flex flex-col lg:grid grid-cols-2 px-[5%] lg:my-[7%] my-[10%] '>
      {currentItems?.map((event:any, id:number) => (
      <EventCard name={event.eventName} date={event.eventDate} id={event.id} />
      ))}
    </div>
    <PaginationBar prev={prev} next={next} page={page} />
    </div>
  )
}

export const EventCard = ({name, date, id}:any) => { 
  const location = useLocation()
  
  return(
    <div className="flex h-[20vh] items-center  my-[3%] border rounded-[15px] shadow w-[100%] lg:w-[70%] bg-[#fff] mx-[auto] ">
      <div className="w-[5%] bg-[#3F2776] h-[inherit] rounded-l-[15px]">

      </div>
      <div className="pl-[5%] flex flex-col justify-evenly h-[inherit]">
        <h3 className="text-[0.8rem] text-left">{name}</h3>
        <div className="flex items-center">
          <img src={calendar} alt="" />
          <p>{`${new Date(date)}`.slice(0,16)}</p>
        </div>
        {location.pathname === "/dashboard/event"?<> <Link to={`/dashboard/buy-ticket/${id}`}><p className="text-[0.8rem]">Will you be attending this event?</p><Button title={"Yes"}  classes={" flex-row-reverse text-[#fff] mt-[3%] lg:mt-[0%] lg:py-[5%] bg-[#FF6E31] w-[40%] lg:w-[30%]"} /></Link></>  : null}
      </div>
      

    </div>

  )}

