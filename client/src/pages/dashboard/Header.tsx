import  { useEffect } from 'react'
import headerBg from '../../assets/headerBg.png'
import { getSinglePhotographer, singleUser } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import profile1 from '../../assets/profile1.png'

const Header = () => {


  const dispatch = useDispatch() as unknown as any;
  const user = useSelector((state:any) => state.user.User)
  const photo = useSelector((state:any) => state.photographer.photographer)
  const role = localStorage.getItem('role')


  useEffect(() => {
    if(role === 'user' || role === 'admin' || role === 'superadmin'){
      dispatch(singleUser())
  }
  }, [])

  useEffect(() => {
    if(role === 'photographer'){
      dispatch(getSinglePhotographer())
  }
  }, [])



  return (
    <div className='bg-[#F5F5F5] flex justify-between h-[15vh] md:h-[auto] border border-l-[#FF6E31] border-[2px]'>
        <div className='flex items-center md:items-end pl-[5%]'>
        <img src={(role === "photographer" ? photo?.coverImage : user?.photo) || profile1} alt="" className='h-[150px] w-[150px] rounded-[50%] border border-[#fff] border-[6px] mb-[-25%]'  />
            <div className='hidden lg:block'>
                <h4>Welcome, {role === "photographer" ? photo?.name : user?.firstName}</h4>
                <h4>ID number: {role === "photographer" ? photo?.id.slice(0,4): user?.id.slice(0,4)}</h4>
            </div>
        </div>
        <div className='w-[30%]'>
          <img src={headerBg} alt="" />
        </div>

        
    </div>
  )
}

export default Header