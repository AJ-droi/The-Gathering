import faq from '../../assets/faq.png'
// import faqbg from '../../assets/faqbg.png'
import {IoAddOutline} from 'react-icons/io5'
// import {AiOutlineMinus} from 'react-icons/ai'
import { faqData } from '../../data/faq'
import { FAQProps } from '../../interface'



const FAQ = () => {
  return (
    <div >
        <div className="img-clip2">
            <img src={faq} alt="" className="opacity-[0.5]" />
        </div>
        <div>
            <h3 className='text-[1.5rem] lg:text-[2rem]'><span className='underline'>Frequently Asked</span> <span className='text-[#FF6E31] underline'>Questions</span></h3>
            <p className='px-[5%] lg:px-[0%] lg:w-[40%] mx-auto text-[0.8rem] lg:text-[1rem]'>If you are not sure whether The Gathering is suitable for you or not, do not worry, We are here to explain everything you might want to know.</p>
        </div>
        <FAQBox data={faqData} />


    </div>
  )
}

export default FAQ

const FAQBox: React.FC<FAQProps> = ({data}) => {
    return(
        <div className='py-[7%]'>
        {data.map((item,index) => (
            <div className='flex flex-col '>
                <div className='flex items-center justify-between shadow-lg text-left w-[80%] lg:w-[50%] mx-[auto] h-[8vh] px-[3%] rounded-lg my-[4%] lg:my-[1%] faq' key={index}>
                    <h3>{item.text}</h3>
                    <IoAddOutline className='text-[2rem] text-[#292D32]' />
                </div>
            </div>

        ))}
       
        </div>
    )
}