import cards from "../../assets/cards.png"
import Button from "../../components/common/Button"
const MyCard = () => {
  return (
    <div>
        <h3 className="text-[#FF6E31] underline">My Cards</h3>
        <div className="flex justify-center">
            <img src={cards} alt="" className=' mt-[5%] ml-[5%]' />
            <img src={cards} alt="" className=' mt-[5%] ml-[5%]' />

        </div>
        <div className="bg-[#fff] py-[1%] w-[80%] mx-auto ">
            <h3 className="text-[1.2rem]"> Why Should I get a card?</h3>

            <ul className="list-decimal text-left px-[5%] flex flex-col justify-evenly h-[20vh]">
                <li> Carries your virtual and physical identify as a community member</li>
                <li>Gives you discount/access/ticket to community events</li>
                <li>Gives you discount to other events, products and services that the gathering is in partnership with.</li>
            </ul>
        </div>

        <div className="flex justify-start my-[2%] ml-[10%]">
            <Button title={"Request For Virtual Card"}  classes={"bg-[#FFF] border border-[#FF6E31] flex-row-reverse w-[30%]  py-[1%] px-[5%] text-[#000]"} />
            <Button title={"Request for Physical Card"}  classes={"bg-[#FFF] border border-[#FF6E31] flex-row-reverse w-[30%]  py-[1%] px-[5%] text-[000] ml-[2%]"} />
                
        </div>

        
    </div>
  )
}

export default MyCard