import camera from "../../assets/Camera.png"
import profileCard from "../../assets/profileCard.png"
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { singleUser, updateProfile } from '../../redux/actions'
import { Button } from 'react-bootstrap'

const DashboardProfile = () => {
    const data = useSelector((state:any) => state.user)

    console.log(data)

    const [formData, setFormData] = useState({
        firstName: '', 
        lastName: '',
        phone: '',
    })

    const user = data.User

    const dispatch = useDispatch() as unknown as any;

    useEffect(() => {
        dispatch(singleUser())
    }, [])

    const fileInputRef = useRef<any>(null);

    const handleButtonClick = () => {
      fileInputRef.current.click();
    };
  
    const handleChange = (event:any) => {
        if(event.target.name === 'photo') {
            setFormData({
                ...formData,
                [event.target.name]: event.target.files[0]
            })
            console.log(event.target.files[0])
        }else{
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })}
    }

    const handleSubmit = async(event:any) => {
        event.preventDefault()

        console.log(formData)
        dispatch(updateProfile(formData))
    }

  return (
    <div className='bg-[#E0E0E0] h-[100vh]'>
        <div className='flex flex-col items-center py-[3%]'>
            <img src={user?.photo} alt="" className='h-[150px] w-[150px] rounded-[50%] border border-[#fff] border-[6px]'  />
            <img src={camera} alt="" className='h-[8vh] mt-[-4%] ml-[8%]'  onClick={handleButtonClick}/>
            <input type={'file'} name={'photo'} className={'border border-[#FF6E31] rounded-xl w-[90%] py-[2%] pl-[2%] mt-[-8%] xl:mt-[-3%] hidden'} ref={fileInputRef} onChange={handleChange} />
        </div>
        <div className='grid grid-cols-2 justify-center pl-[3%] py-[2%] '>
            <div className='w-[100%] flex flex-col items-start my-[1%]'>
                <label className='my-[2%]'>First Name</label><br />
                <input type={'text'} name={'firstName'} placeholder={user?.firstName} value={formData?.firstName } className={'border border-[#FF6E31] rounded-xl w-[90%] py-[2%] pl-[2%] mt-[-8%] xl:mt-[-3%]'} onChange={handleChange} />
            </div>
            <div className='w-[100%] flex flex-col items-start my-[1%]'>
                <label className='my-[2%]'>Last Name</label><br />
                <input type={'text'} name={'lastName'} placeholder={user?.lastName} value={formData?.lastName } className={'border border-[#FF6E31] rounded-xl w-[90%] py-[2%] pl-[2%] mt-[-8%] xl:mt-[-3%]' } onChange={handleChange} />
            </div>
            <div className='w-[100%] flex flex-col items-start my-[1%]'>
                <label className='my-[2%]'>Email</label><br />
                <input type={'email'} name={'email'} placeholder={user?.email}  className={'border border-[#FF6E31] rounded-xl w-[90%] py-[2%] pl-[2%] mt-[-8%] xl:mt-[-3%]'} readOnly />
            </div>
            <div className='w-[100%] flex flex-col items-start my-[1%]'>
                <label className='my-[2%]'>Phone Number</label><br />
                <input type={'tel'} name={'phone'} placeholder={user?.phone} value={formData?.phone } className={'border border-[#FF6E31] rounded-xl w-[90%] py-[2%] pl-[2%] mt-[-8%] xl:mt-[-3%]'} onChange={handleChange} />
            </div>

            <Link to="/dashboard/card"><img src={profileCard} alt="" className='h-[20vh] mt-[5%] ml-[5%]' /></Link>
            <Button className='bg-[#FF6E31] flex-row-reverse w-[55%] h-[5vh]  py-[1%] px-[5%] text-[#fff] mx-[auto] rounded-md mt-[13%]' onClick={handleSubmit}>Update Profile</Button>
        </div>
    </div>
  )
}

export default DashboardProfile