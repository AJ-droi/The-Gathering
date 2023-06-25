import React, { useState, useEffect} from 'react'
import { Button } from 'react-bootstrap'
import { GrAdd } from 'react-icons/gr'
import download from '../../assets/download.png'
import {HiXMark} from 'react-icons/hi2'
import { useParams } from 'react-router-dom'
import { deletePhotos, getEvents, singleUser, uploadPhotos } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import {BsTrashFill, BsDownload} from 'react-icons/bs'
import { PaginationBar } from './DashboardNotifications'

const DashboardGallery = () => {
    const role = localStorage.getItem('role')
    const [show, setShow] = useState(false)

    const toggleShow = () => {
        setShow(!show)
    }

    const {id} = useParams()

    const dispatch = useDispatch() as unknown as any

    const events = useSelector((state:any) => state.data?.events)

    const ticket = events?.find((event:any) => event.id === id)


    const gallery = useSelector((state:any) => state.user?.User?.gallery)

 
  useEffect(() => {
    if(role === "user") {
    dispatch(singleUser())
    }
  }, [])

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

  const currentItems = gallery?.slice(firstIndex, lastIndex)



  return (
    <div className='px-[5%] pb-[5%]'>
        {role === "photographer" ?<Button className='bg-[#FF6E31] flex-row-reverse w-[25%]  py-[1%] px-[5%] text-[#fff] mx-[auto] rounded-md mt-[3%]' onClick={toggleShow}>Add Photo</Button> : null}
        {show ?<AddPhotos click={toggleShow}/> : null}
        <Button className='bg-[#FF6E31] flex-row-reverse w-[25%]  py-[1%] px-[5%] text-[#fff] mx-[auto] rounded-md mt-[3%]' onClick={() => window.location.href = "/gallery"}>View gallery</Button>
         <div className="bg-[#E0E0E0] grid grid-cols-3 lg:grid-cols-4  pt-[5%] pr-[1%] ">
            {role === 'photographer' ? ticket?.eventImages.map((image:any, idx:number) => (
            <div key={idx}>
                <img src={image} alt="" className='w-[300px] h-[200px]' />
                <div className='flex justify-end '>
                    <img src={download} alt="" className='mt-[-29%] xl:mt-[-15%] h-[4vh] ' />
                    <button onClick={() => dispatch(deletePhotos({eventId:id, url:`${image.split('/').reverse()[0]}`}))}><BsTrashFill /></button>
                </div> 
            </div>)) : currentItems?.map((image:any, idx:number) => (
            <div key={idx}>
                <img src={image} alt="" className='w-[300px] h-[200px]' />
                <div className='flex justify-end '>
                <button className="text-[#fff] mt-[-15%] text-[1.5rem] "><BsDownload /></button>
                    <button onClick={() => dispatch(deletePhotos({eventId:id, url:`${image.split('/').reverse()[0]}`}))} className="text-[#fff] mt-[-15%] text-[1.5rem] ml-[5%]"><BsTrashFill /></button>
                </div>
            </div>))}
            
        </div>
        <PaginationBar prev={prev} next={next} page={page} />
        

    </div>
   
  )
}

export default DashboardGallery

const AddPhotos = ({click}:any) => {

  const { id } = useParams() as any;
  const dispatch = useDispatch() as unknown as any;

  const [formData, setFormData] = useState<any>({
    eventId: id,
  });

  const [images, setImages] = useState<any>([]);

  const handleChange = (e: any) => {
    setImages(Array.from(e.target.files));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    images.forEach((image: any, index: number) => {
      setFormData({ ...formData, images: image });
      dispatch(uploadPhotos(formData));
    });

   
  };

  return(
    <div className='fixed bg-[#000000A5] w-[100%] h-[100vh] top-[0%] left-[0%] flex flex-col items-center justify-center'>
      <div className="bg-[#fff] flex flex-col justify-center items-center w-[50%] rounded-md py-[3%] border border-dashed border-[4px] ">
        <GrAdd className="text-[#FF6E31] text-[3rem]"/>
        <input type="file" name="images" multiple  onChange={handleChange} ></input><p className="text-[1.3rem] my-[2%]">Drag and Drop or <span className="text-[#FF6E31] underline">Browse</span></p>
        <HiXMark className='absolute text-[2.2rem] right-[27%] top-[39%]' onClick={click} />
        <Button className='bg-[#FF6E31] flex-row-reverse w-[25%]  py-[1%] px-[5%] text-[#fff] mx-[auto] rounded-md mt-[3%]' onClick={handleSubmit}>Upload</Button>
      </div>

    </div>

  )}