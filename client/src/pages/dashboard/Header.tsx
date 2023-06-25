import  { useEffect } from 'react'
import headerBg from '../../assets/headerBg.png'
import { singleUser } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

const Header = () => {


  const dispatch = useDispatch() as unknown as any;
  const user = useSelector((state:any) => state.user.User)


  useEffect(() => {
      dispatch(singleUser())
  }, [])



  return (
    <div className='bg-[#F5F5F5] flex justify-between h-[15vh] md:h-[auto] border border-l-[#FF6E31] border-[2px]'>
        <div className='flex items-center md:items-end pl-[5%]'>
        <img src={user?.photo} alt="" className='h-[150px] w-[150px] rounded-[50%] border border-[#fff] border-[6px] mb-[-25%]'  />
            <div>
                <h4>Welcome, {user?.firstName}</h4>
                <h4>ID number: {user?.id.slice(0,4)}</h4>
            </div>
        </div>
        <div className='w-[30%]'>
          <img src={headerBg} alt="" />
        </div>

        
    </div>
  )
}

export default Header