import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import bonfire from '../../assets/bonfire.png'
import Button from '../../components/common/Button'
import { getEvents } from '../../redux/actions'
import lens from '../../assets/lens.jpeg'

const HomePhotographer = () => {


  const dispatch = useDispatch() as unknown as any

  const events = useSelector((state:any) => state.data.events)

  useEffect(() => {
    dispatch(getEvents())
  }, [])
  return (
    <div className='my-[15%] lg:my-[7%] flex flex-col lg:grid grid-cols-3 gap-5 px-[8%] '>
      {events?.map((event:any, id:number) => (
        <UploadCard name={event.eventName} id={event.id} />
      ))}
    </div>
  )
}

export default HomePhotographer

const UploadCard = ({name, id}:any) => {
  return(
    <div className='bg-[#fff] w-[100%] flex flex-col justify-center px-[3%] py-[3%] rounded-md mx-[auto]'>
      <img src={lens} alt=""  className='h-[20vh] '/>
      <h3 className='uppercase font-[500] text-[1.3rem]'>{name}</h3>
      <Link to={`/dashboard/event/${id}`}><Button title={"Open"} classes={"bg-[#FF6E31] flex-row-reverse w-[55%]  py-[1%] px-[5%] text-[#fff] mx-[auto]"} /></Link>

    </div>
  )
}
  