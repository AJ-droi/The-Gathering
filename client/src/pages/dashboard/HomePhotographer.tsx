import { Link } from 'react-router-dom'
import bonfire from '../../assets/bonfire.png'
import Button from '../../components/common/Button'

const HomePhotographer = () => {
  return (
    <div className='my-[7%] grid grid-cols-3 gap-5 px-[8%]'>
      <UploadCard />
      <UploadCard />
      <UploadCard />
      <UploadCard />
      <UploadCard />
      <UploadCard />

    </div>
  )
}

export default HomePhotographer

const UploadCard = () => {
  return(
    <div className='bg-[#fff] w-[100%] flex flex-col justify-center px-[3%] py-[3%] rounded-md mx-[auto]'>
      <img src={bonfire} alt=""  className='h-[20vh] '/>
      <h3 className='uppercase font-[500] text-[1.3rem]'>Bonfire Night</h3>
      <Link to="/dashboard/event/1"><Button title={"Open"} classes={"bg-[#FF6E31] flex-row-reverse w-[55%]  py-[1%] px-[5%] text-[#fff] mx-[auto]"} /></Link>

    </div>
  )
}
  