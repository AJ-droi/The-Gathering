import React from 'react'
import quote from '../../assets/quote.png'
import quotes from '../../assets/quotes.png'
import firstReviewer from '../../assets/firstReviewer.png'
import secondReviewer from '../../assets/secondReviewer.png'
import thirdReviewer from '../../assets/thirdReviewer.png'
import reviewBackground from '../../assets/reviewBackground.png'
import { ReviewProps } from '../../interface'


const Review = () => {
  return (
    <div>
         <div >
            <img src={reviewBackground} alt="reviewBackground" className='h-[80vh] absolute w-[100%] ' />
            <div className='relative z-[2] text-[#fff] pt-[3%]'>
                <h3 className='text-[1.8rem]'>Community Members Stories</h3>
                <p>Here is what some of our Community members have to say.</p>
            </div>
            <div className='lg:grid lg:grid-cols-3 my-[5%] relative gap-0 place-items-center px-[15%]'>
                <ReviewCard text={"gdxtseswyug hjhdrdfftuitgy tfrdgf testfehuuygy"} source={firstReviewer}/>
                <ReviewCard text={"gdxtseswyug hjhdrdfftuitgy tfrdgf testfehuuygy"} source={secondReviewer} />
                <ReviewCard text={"gdxtseswyug hjhdrdfftuitgy tfrdgf testfehuuygy"} source={thirdReviewer}/>
            </div>
        </div>
        <div className='relative z-[2] py-[5%]'>
                <h3 className='text-[1.8rem] text-[#FF6E31] underline'>You Can Partner With Us</h3>
                <p className='lg:w-[60%] lg:mx-[auto]'>At The Gathering, we carry out various projects and outreaches. We are open to partnership with various organizations and bodies to carry out various projects and you could contact us for partnerships.</p>
        </div>

    </div>
   
  )
}

export default Review

const ReviewCard: React.FC<ReviewProps> = ({text, source }) => {
    return(
        <div className={`rounded-lg border w-[80%] h-[40vh] bg-[#fff] `}>
            <img src={source} alt={source} className="h-[8vh] mt-[-5%]" />
            <div className='pt-[8%] px-[5%] ' >
                <div className='flex justify-start '>
                    <img src={quote} alt="quote" className='h-[3vh]' />
                </div>
          
                 <p className=' text-left pl-[13%] text-[1.3rem] w-[80%] mx-[auto]'>{text}</p>
     
                <div className='flex justify-end pr-[5%]'>
                    <img src={quotes} alt="quote" className='h-[3vh]' />
                </div>
            </div>

        </div>


    )
}