import { useEffect, useRef, useState } from "react";
import avatar from "../../assets/avatar.png";
import calendar from "../../assets/calendar.png";
import info from "../../assets/info.png";
import Button from "../../components/common/Button";
import addPhoto from "../../assets/addPhoto.png";
import search from "../../assets/search.png";
import { IoCall } from "react-icons/io5";
import {GrAdd, GrMail} from "react-icons/gr"
import { Link, useLocation } from "react-router-dom";
import HomePhotographer from "./HomePhotographer";
import { getBooks, getEvents, getMovies, getPhotographers, getUsers, uploadBooks, uploadMovies } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'
import { HiXMark } from "react-icons/hi2";
import profile1 from "../../assets/profile1.png"



const DashboardHome = () => {
  const role = localStorage.getItem('role')

  const events = useSelector((state:any) => state.data.events) || []
  const dispatch = useDispatch() as unknown as any


  useEffect(() => {
    dispatch(getEvents())
  }, [])

  return (
    <>
    {role === "user" ? <HomeUsers events={events} /> : role === "admin" || role === "superadmin" ?<HomeAdmin /> : role === "photographer" ? <HomePhotographer /> : null}
    </>
  );
};

export default DashboardHome;

const HomeUsers = ({events}:any) => {
  const [quotes, setQuotes] = useState<any>([])

const getQuotes = async() => {
  try{
    const response = await axios.get('https://api.api-ninjas.com/v1/quotes', {
    params: {
      category: "inspirational"
    },
    headers: {
      'X-Api-Key': 'uAERFAGTRqKiVzjOphETnA==YYZmcQPd9Xq2MRJb'
    }
  })

  const data = await response.data
  setQuotes(data)
  console.log(quotes)
}catch(err){
  console.log(err);
  
}

}

useEffect(() => {
  getQuotes()
}, [])
 
    return (
      <div className="bg-[#E0E0E0]">
        <div className="flex justify-end">
          <div className="petit text-[#FF6E31] bg-[#fff] w-[70%] text-[0.8rem] md:text-[1.2rem] font-bold px-[2%] py-[2%] mr-[4%] md:mr-[2%] my-[2%] rounded-lg">
            <p>
              " {quotes[0]?.quote} "
            </p>
            <p>-{quotes[0]?.author}</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between px-[5%] pb-[2%]">
          <RecommendedBooks />
          <div className=" w-[100%] md:w-[35%] flex flex-col justify-between my-[2%] md:my-[0%]">
            <h3>Upcoming Events</h3>
            <p>{events.length === 0 ? "No Event" : null}</p>
            {events?.slice(events.length-3, events.length)?.map((elem:any, id:number) => (
            <UpcomingEvents key={id} name={elem?.eventName} date={`${new Date(elem?.eventDate)}`.slice(0,16)} id={''} />
            ))}
            <Rings />
          </div>
        </div>
      </div>
    );

}

export const HomeAdmin= () => {
  const location = useLocation()

  const dispatch = useDispatch() as unknown as any 
  
  const photographer = useSelector((state:any) => state.photographer.photographer)
  // const users = useSelector((state:any) => state.data.Users)

  // console.log(photographers)

  const [isBook, setIsBook] = useState(false)
  const  [isMovie, setIsMovie] = useState(false)

  const toggleBook = () =>{
    setIsBook(!isBook)
  }

  const toggleMovie = () => {
    setIsMovie(!isMovie)
  }

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

  const photographers = photographer?.slice(firstIndex, lastIndex)

  useEffect(() =>{
    dispatch(getPhotographers())
  }, [])
 
  return (
    <div className="bg-[#E0E0E0] px-[5%] h-[50vh] my-[20%] md:my-[10%]">
       <div className="flex flex-row lg:justify-end my-[4%] md:my-[2%]">
        <Button title={"Upload Movie"} source={addPhoto} classes={" flex-row-reverse text-[#fff] bg-[#FF6E31] h-[5vh] mr-[2%]"} onClick={toggleMovie} />
        <Button title={"Upload Books"} source={addPhoto} classes={" flex-row-reverse text-[#fff] bg-[#FF6E31] h-[5vh]"} onClick={toggleBook} />
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-end my-[2%]">
        <div className="flex items-center bg-[#fff] py-[1%] px-[1%] rounded-md mr-[5%]">
          <img src={search} alt="" className="h-[2vh]" />
          <input type="text" placeholder="Search here" className="pl-[4%] bg-[transparent]" />
        </div>
        
        {location.pathname === "/dashboard/users" ? null :<Link to="/dashboard/register" className="w-[94%] lg:w-[20%] bg-[#FF6E31] flex items-center justify-center rounded-md my-[4%] lg:my-[0%]"><Button title={"Add Photographer"} source={addPhoto} classes={" flex-row-reverse text-[#fff]"} /></Link>}
       
      </div>
      <div className="w-[100%]">
        <h3>{location.pathname === "/dashboard/users" ? "Users" : "Photographers"}</h3>
        <div className="overflow-scroll">
          <div className="grid grid-cols-4 w-[300%] md:w-[200%] lg:w-[100%] ">
          {photographers?.map((elem:any, id:number) => (
            <PhotographerCard key={id}  name={elem.name} phone={elem.phone} email={elem.email} />
          ))}
          </div>

        </div>
       
        <div className="flex justify-between items-center my-[5%] ">
          <p>Showing {firstIndex+1}-{lastIndex > photographers?.length ? photographers?.length : lastIndex + 1 } from {photographers?.length} data</p>
          <div className="flex w-[50%] justify-end">
            <p className="bg-[##C2C2C2] border border-[black] lg:w-[5%] px-[4%] py-[2%] flex justify-center rounded-md" onClick={firstIndex > 1 ?prev : () => null} > {"<"} </p>
            <p className="bg-[#FF6E31]  lg:w-[5%] flex justify-center rounded-md px-[4%] py-[2%] text-[#fff] flex justify-center items-center mx-[2%]"> {page} </p>
            <p className="bg-[##C2C2C2] border border-[black] lg:w-[5%] px-[4%] py-[2%] flex items-center justify-center rounded-md" onClick={lastIndex === photographer?.length  ? next : () => null}> {">"} </p>
          </div>
        </div>
        {isMovie ?<UploadMovies click={toggleMovie} /> : null}
        {isBook ? <UploadBooks click={toggleBook} /> : null}
      
      </div>
      
    </div>
  );

}

export const AdminUsers = () => {
  const location = useLocation()

  const dispatch = useDispatch() as unknown as any 
  
  const user = useSelector((state:any) => state.data.user)

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

  const users = user?.slice(firstIndex, lastIndex)



  useEffect(() =>{
    dispatch(getUsers())
  }, [])
 
  return (
    <div className="bg-[#E0E0E0] px-[5%] my-[17%] lg:my-[0%]">
      <div className="flex justify-end my-[2%]">
        <div className="flex items-center bg-[#fff] py-[1%] px-[1%] rounded-md mr-[5%] w-[80%] lg:w-[auto]">
          <img src={search} alt="" className="h-[2vh]" />
          <input type="text" placeholder="Search here" className="pl-[4%]" />
        </div>
        
        {location.pathname === "/dashboard/users" ? null :<Link to="/dashboard/register" className="w-[20%] bg-[#FF6E31] flex items-center justify-center rounded-md"><Button title={"Add user"} source={addPhoto} classes={" flex-row-reverse text-[#fff]"} /></Link>}
       
      </div>
      <div className="w-[100%]">
        <h3>{location.pathname === "/dashboard/users" ? "Users" : "Photographers"}</h3>
        <div className="overflow-scroll">
          <div className="grid grid-cols-4 w-[300%] md:w-[200%] lg:w-[100%]">
          {users?.map((elem:any, id:number) => (
            <PhotographerCard key={id}  name={elem.firstName + ' ' + elem.lastName } phone={elem.phone} email={elem.email} />
          ))}
          </div>
        </div>
        <div className="flex justify-between items-center my-[5%] ">
          <p>Showing {firstIndex}-{lastIndex > users?.length ? users?.length : lastIndex } from {users?.length} data</p>
          <div className="flex w-[70%] lg:w-[50%] justify-end">
            <p className="bg-[##C2C2C2] border border-[black] w-[5%] px-[4%] py-[2%] flex justify-center rounded-md" onClick={firstIndex > 1 ?prev : () => null} > {"<"} </p>
            <p className="bg-[#FF6E31]  w-[5%] flex justify-center rounded-md px-[4%] py-[2%] text-[#fff] flex justify-center items-center mx-[2%]"> {page} </p>
            <p className="bg-[##C2C2C2] border border-[black] w-[5%] px-[4%] py-[2%] flex items-center justify-center rounded-md" onClick={lastIndex === user?.length  ? next : () => null}> {">"} </p>
          </div>
        </div>
      
      </div>
      
    </div>
  );

}

const PhotographerCard = ({name, phone, email}:any) => {
  return(
    <div className="bg-[#fff] rounded-md px-[4%] text-left py-[7%] text-[#212121] mx-[3%] my-[3%] ">
      <div className="text-center flex flex-col items-center">
        <img src={profile1} alt="" className="w-[100%] rounded-md h-[12vh] w-[12vh]" />
        <h3 className="font-semibold">{name}</h3>
      </div>
      <div className="mt-[15%]">
        <div className="flex items-center my-[5%]">
          <div className="bg-[#FFE2D6] w-[10%] flex justify-center py-[2%] rounded-md">
            <IoCall className="text-[#FF6E31]  " />
          </div>
          <p className="pl-[5%] text-[0.8rem]">{phone}</p>
        </div>

        <div className="flex items-center">
          <div className="bg-[#FFE2D6] w-[10%] flex justify-center py-[2%] rounded-md">
            <GrMail className="text-[#FF6E31]  " />
          </div>
          <p className="pl-[5%] text-[0.8rem]">{email}</p>
        </div>
       
      </div>

    </div>

  )}

const RecommendedBooks = () => {
  const books = useSelector((state:any) => state.books.books)
  const movies = useSelector((state:any) => state.movies.movies)

  const dispatch = useDispatch() as unknown as any

  useEffect(() => {
    dispatch(getBooks())
  }, [])

  useEffect(() =>{
    dispatch(getMovies())
  }, [])

  console.log('books', books)

  return (
    <div className="bg-[#fff] md:w-[63%] rounded-md px-[2%] text-left py-[2%] text-[#212121] ">
      <div>
        <h3 className="text-[0.9rem] text-[#212121] py-[2%]">Recommended Movies Of The Month</h3>
        {movies?.map((elem:any, id:number) =>(
        <div className="flex my-[2%] items-center" key={id}>
          <img src={elem?.coverImage} alt="" className="w-[50px] h-[50px] rounded-[8px]"/>
          <p className="text-left px-[2%]">
            {elem?.title}
          </p>
        </div>))}
      </div>
      <div className=" border-t-[3px] border-[#B4B4B4] ">
        <h3 className="text-[0.9rem] text-[#212121] py-[2%]">Recommended Books Of The Month</h3>
        {books?.map((elem:any, id:number) =>(
        <div className="flex my-[2%] items-center" key={id}>
          <img src={elem?.coverImage} alt="" className="w-[50px] h-[50px] rounded-[8px]"/>
          <p className="text-left px-[2%]">
            {elem?.title}
          </p>
        </div>))}
      </div>
    </div>
  );
};

const UpcomingEvents = ({name, date, id}:any) => { 
  
  return(
    <div className="flex h-[16vh] items-center  my-[3%] border rounded-[15px] shadow w-[100%] bg-[#fff] mx-[auto] ">
      <div className="w-[5%] bg-[#3F2776] h-[inherit] rounded-l-[15px]">

      </div>
      <div className="pl-[5%] flex flex-col justify-evenly h-[inherit]">
        <h3 className="text-[0.8rem] text-left">{name}</h3>
        <div className="flex items-center">
          <img src={calendar} alt="" />
          <p>{date}</p>
        </div>
        {/* {location.pathname === "/dashboard/event"?<> <Link to={`/dashboard/buy-ticket/${id}`}><p className="text-[0.8rem]">Will you be attending this event?</p><Button title={"Yes"}  classes={" flex-row-reverse text-[#fff] py-[5%] bg-[#FF6E31] w-[30%]"} /></Link></>  : null} */}
      </div>
      

    </div>

  )}




const Rings = () => {
    const [ringInfo, setRingInfo] = useState(false)
  return (
    <div className="bg-[#fff] px-[4%] py-[2%] rounded-md my-[2%]">
      <h3 className="text-left underline text-[1.5rem]">Rings</h3>
      <p className="text-[7rem] text-[#FF6E31]">0</p>
      <div className="flex justify-end ">
        <img src={info} alt="" onClick={() => setRingInfo(!ringInfo)}/>
      </div>
      {ringInfo ? <div className="border border-[#FF6E31] rounded-md absolute bottom-[-88%] md:bottom-[-12%] right-[12%] md:right-[6%] bg-[#fff] w-[50%] md:w-[20%] py-[2%] px-[1%] text-left">
        <p className="text-[0.8rem]">
          Rings are a reward for participating in community activity and
          supporting community members.<br /> <br /> You can get rings by engaging with tasks
          that have points attached to it (community activities and helping
          other community members).
        </p>
      </div>: null}
    </div>
  );
};



const UploadMovies = ({click}:any) => {


  const dispatch = useDispatch() as unknown as any;

  const [formData, setFormData] = useState<any>({
    title: "",
  });

  const [images, setImages] = useState('');

  const handleChange = (e: any) => {
    if(e.target.name === "coverImage"){
      setImages(e.target.files[0].name)
      setFormData({
        ...formData,
        [e.target.name] : e.target.files[0]
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

    await dispatch(uploadMovies(formData))

  };

  const fileInputRef = useRef<any>(null);


  const handleButtonClick = () => {
      fileInputRef.current.click();
  };

  return(
    <div className='fixed bg-[#000000A5] w-[100%] h-[100vh] top-[0%] left-[0%] flex flex-col items-center justify-center'>
      <div className="bg-[#fff] flex flex-col justify-center items-center w-[90%] lg:w-[50%] rounded-md py-[3%] border border-dashed border-[4px] ">
        <input placeholder="Enter Title Of Movie" name="title" value={formData?.title} className="w-[50%] my-[2%] py-[1%] border border-[#FF6E31] border-[2px] pl-[2%] rounded-md" onChange={handleChange} />
        <input type="file" name="coverImage"  onChange={handleChange} className="hidden" ref={fileInputRef}/><p className="text-[1.1rem] my-[2%] "><span className="text-[#FF6E31] underline" onClick={handleButtonClick}>Click to upload movie coverImage</span></p>

          <span>{images}</span>

        <HiXMark className='absolute text-[2.2rem] right-[7%] lg:right-[27%] top-[39%] md:top-[36%] lg:top-[34%]' onClick={click} />
        <Button classes={'bg-[#FF6E31] flex-row-reverse w-[25%]  py-[1%] px-[5%] text-[#fff] mx-[auto] rounded-md mt-[3%]'} onClick={handleSubmit} title={`upload`} />
      </div>

    </div>

  )}


const UploadBooks = ({click}:any) => {

  const dispatch = useDispatch() as unknown as any;

  const [formData, setFormData] = useState<any>({
    title:''
  });

  const [images, setImages] = useState('');

  const handleChange = (e: any) => {
    if(e.target.name === "coverImage"){
      setImages(e.target.files[0].name)
      setFormData({
        ...formData,
        [e.target.name] : e.target.files[0]
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
    await dispatch(uploadBooks(formData))
  };

  const fileInputRef = useRef<any>(null);


  const handleButtonClick = () => {
      fileInputRef.current.click();
  };

  return(
    <div className='fixed bg-[#000000A5] w-[100%] h-[100vh] top-[0%] left-[0%] flex flex-col items-center justify-center'>
      <div className="bg-[#fff] flex flex-col justify-center items-center w-[90%] lg:w-[50%] rounded-md py-[3%] border border-dashed border-[4px] ">
        <input placeholder="Enter Title Of Book" name="title" value={formData?.title} className="w-[50%] my-[2%] py-[1%] border border-[#FF6E31] border-[2px] pl-[2%] rounded-md" onChange={handleChange} />
        <input type="file" name="coverImage" onChange={handleChange} className="hidden" ref={fileInputRef}/><p className="text-[1.1rem] my-[2%] "><span className="text-[#FF6E31] underline" onClick={handleButtonClick}>Click to upload book coverImage</span></p>
          <span>{images}</span>

        <HiXMark className='absolute text-[2.2rem] right-[7%] lg:right-[27%] top-[39%] md:top-[36%] lg:top-[34%]' onClick={click} />
        <Button classes={'bg-[#FF6E31] flex-row-reverse w-[25%]  py-[1%] px-[5%] text-[#fff] mx-[auto] rounded-md mt-[3%]'} onClick={handleSubmit} title={`upload`} />
      </div>

    </div>

  )}



