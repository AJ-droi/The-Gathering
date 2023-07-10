import React from 'react'
import quote from '../../assets/quote.png'
import quotes from '../../assets/quotes.png'
import firstReviewer from '../../assets/firstReviewer.png'
import reviewBackground from '../../assets/reviewBackground.png'
import { ReviewProps } from '../../interface'
import { ReviewData } from '../../data/review'


const Review = () => {
  return (
    <div>
         <div >
            <img src={reviewBackground} alt="reviewBackground" className='h-[100vh] lg:h-[70vh] xl:h-[100vh] absolute w-[100%] ' />
            <div className='relative z-[2] text-[#fff] pt-[3%]'>
                <h3 className='text-[1.2rem] lg:text-[1.8rem] font-[600]'>Community Members Stories</h3>
                <p className='text-[0.8rem] md:text-[1rem]'>Here is what some of our Community members have to say.</p>
            </div>
            <div className='flex flex-col lg:grid lg:grid-cols-3 my-[5%] relative gap-0 place-items-center px-[15%] lg:px-[8%] xl:px-[15%]'>
                {ReviewData.map((elem:any, id:any) => (
                <ReviewCard text={elem.title} source={ elem.source || firstReviewer } name={elem.name}/>
                ))}
             
            </div>
        </div>
        <div className='relative z-[2] pt-[3%] pb-[3%] lg:pt-[8%] lg:pb-[3%] '>
                <h3 className='text-[1.4rem] lg:text-[1.8rem] text-[#FF6E31] underline'>You Can Partner With Us</h3>
                <p className='lg:w-[60%] lg:mx-[auto] text-[0.8rem] lg:text-[1.2rem] px-[3%]'>At The Gathering, we carry out various projects and outreaches. We are open to partnership with various organizations and bodies to carry out various projects and you could contact us for partnerships.</p>
        </div>

    </div>
   
  )
}

export default Review

const ReviewCard: React.FC<ReviewProps> = ({text, source, name }) => {
    return(
        <div className={`rounded-lg border w-[80%] h-[50vh] lg:h-[40vh] xl:h-[50vh] bg-[#fff] my-[5%] lg:my-[0%] `}>
            <img src={source} alt={source} className="w-[50px] h-[50px] rounded-[50%] mt-[-5%]" />
            <div className='flex flex-col h-[40vh]  justify-between' >
                <div className='pt-[8%] px-[5%] ' >
                    <div className='flex justify-start '>
                        <img src={quote} alt="quote" className='h-[2vh]' />
                    </div>
                    <div className=' text-left px-[5%] text-[0.8rem] w-[100%] mx-[auto] h-[25vh] overflow-scroll my-[5%] flex justify-center'><p>{text}</p></div>
        
                    <div className='flex justify-end pr-[5%]'>
                        <img src={quotes} alt="quote" className='h-[2vh]' />
                    </div>
                </div>
                <div className="flex justify-end text-[0.8rem] px-[7%] text-[#FF6E31] font-[600] ">- {name}</div>
            </div>

        </div>


    )
}