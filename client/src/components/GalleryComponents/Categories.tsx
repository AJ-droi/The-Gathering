import React from 'react'
import { Link } from 'react-router-dom';
import { catData } from '../../data/category';
import { CategoryLayout } from '../../interface';
import lens from "../../assets/lens.jpeg"


const Categories = ({event}:any) => {


  return (
    <div className='py-[5%] bg-[#fff]'>
        <h3 className='w-[100%] text-[2rem] shadow shadow-[#FF6E31]'>Categories</h3>
        <div className='w-[100%] flex flex-col lg:grid lg:grid-cols-4 px-[3%] py-[5%]'>
        {event?.map((elem:any,id:number) => (
           <Link to={`/gallery/${elem.id}`}><CatCard key={id} img={elem?.eventImages[0]?.url || lens} text={elem.eventName} /></Link> 
             
        ))}
        </div>
       

    </div>
  )
}

export default Categories

const CatCard: React.FC<CategoryLayout> = ({img, text}) => {
    return(
        <div className='rounded-md shadow shadow-[#0000007D] w-[94%] mx-[auto] flex flex-col px-[4%] pt-[3%] my-[2%]'>
            <img src={img} alt="" />
            <p className='text-[#FF6E31] font-bold py-[3%]'> {text}</p>
        </div>
    )
}