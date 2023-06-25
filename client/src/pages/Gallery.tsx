import GalleryHero from '../components/GalleryComponents/GalleryHero'
import galOne from '../assets/gal-one.png'
import galTwo from '../assets/gal-two.png'
import galThree from '../assets/gal-three.png'
import galFour from '../assets/gal-four.png'
import galFive from '../assets/gal-five.png'
import Categories from '../components/GalleryComponents/Categories'
import SimpleImageSlider from "react-simple-image-slider";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getEvents, saveImages, singleUser } from '../redux/actions'
import { useParams } from 'react-router-dom'
import download from '../assets/download.png'
import { Button } from 'react-bootstrap'
import { SignInput } from '../components/common/Input'
import { BsDownload } from 'react-icons/bs'

const Gallery = () => {

  // eslint-disable-next-line
  const [imageNum, setImageNum] = useState(1);

  const events = useSelector((state:any) => state.data.events)

  const dispatch = useDispatch() as unknown as any

  useEffect(() => {
    dispatch(getEvents())
  }, [])
  

  const sliderImages = [
    {
       url: galOne,
    },
    {
       url: galTwo,
    },
    {
       url: galThree,
    },
    {
       url: galFour,
    },
    {
       url: galFive,
    },
 ];

  return (
    <div className='bg-[#000]'>
        {/* <img src={galOne} alt="" className='h-[50vh] w-[100%] opacity-[0.35]'/> */}
        <div className='bg-[#000] opacity-[0.5]'>
        <SimpleImageSlider
            width={window.innerWidth}
            height={370}
            images={sliderImages}
            showBullets={true}
            showNavs={true}
            autoPlay={true} 
            onStartSlide = {(index, length) => {
               setImageNum(index);
            }}
              autoPlayDelay = {3}
         />

        </div>

        
        <GalleryHero />
        <Categories event={events} />

    </div>
  )
}


export const UserGallery = () => {
   const role = localStorage.getItem('role')
   const [show, setShow] = useState(false)
   const [check, setCheck] = useState(false)

   const [formData,setFormData] = useState<any>({
      images: []
   })

   const toggleShow = () => {
       setShow(!show)
   }

   const {id} = useParams()

   const dispatch = useDispatch() as unknown as any

   const events = useSelector((state:any) => state.data.events)

 const ticket = events?.find((event:any) => event.id === id)


 useEffect(() => {
   dispatch(getEvents())
 }, [])

 const handleChange = (e:any, img:any) => {
   e.preventDefault()
   if(e.target.checked === true) {
         setFormData({
            ...formData,
            images: [...formData.images, img]
         })
   }else{
      setFormData({
         ...formData,
         images: formData.images.filter((image:any) => image !== img)
      })
   }
}
console.log(formData)

const handleSubmit = async(e:any) => {
   e.preventDefault()
   dispatch(saveImages(formData))
}

 return (
   <div className='px-[9%] pb-[5%]'>
       {role === "photographer" ?<Button className='bg-[#FF6E31] flex-row-reverse w-[25%]  py-[1%] px-[5%] text-[#fff] mx-[auto] rounded-md mt-[3%]' onClick={toggleShow}>Add Photo</Button> : null}
       <Button className='bg-[#FF6E31] flex-row-reverse w-[25%]  py-[1%] px-[5%] text-[#fff] mx-[auto] rounded-md mt-[3%]' onClick={() => setCheck(!check)}>Select More</Button>
       <Button className='bg-[#FF6E31] flex-row-reverse w-[25%]  py-[1%] px-[5%] text-[#fff] mx-[auto] rounded-md mt-[3%]' onClick={handleSubmit}>Save </Button>
        <div className="bg-[#E0E0E0] grid  lg:grid-cols-4  pt-[5%] pr-[1%]">
           {ticket?.eventImages?.map((image:any, idx:number) => (
           <div key={idx}>
               {check ?<SignInput type={`checkbox`} placeholder={''} onchange={(e:any) => handleChange(e, image)} /> : null}
             
               <img src={image} alt="" className='w-[300px] h-[200px]' />
               <BsDownload onClick={() => dispatch(saveImages({images:[image]}))} className='text-[#fff] mt-[-15%] text-[1.8rem]'/>
           </div>))}
           
       </div>
       

   </div>
  
 )
}



export default Gallery