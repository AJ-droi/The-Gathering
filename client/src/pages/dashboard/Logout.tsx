import logoutIcon from "../../assets/logout-icon.png"
import Button from "../../components/common/Button"
import { Logout } from "../../redux/actions"


const Logoutt = () => {
  return (
    <div >
        <div className="flex justify-center">
            <img src={logoutIcon} alt="" className=" mr-[1%]" />

        </div>
        <div >
            <h3>Are you sure you want to log out?</h3>
            <div className="flex flex-col lg:flex-row justify-center my-[5%] px-[5%] lg:px-[0%]">
                <Button title={"Yes, Log me out"}  classes={"bg-[#FF6E31] flex-row-reverse lg:w-[25%]  py-[1%] px-[5%] text-[#fff]"} onClick={Logout}/>
                <Button title={"No, Don’t Log me out"}  classes={"bg-[#FF6E31] flex-row-reverse lg:w-[25%]  py-[1%] px-[5%] text-[#fff] my-[5%] lg:my-[0%] lg:ml-[1%]"} onClick={() => window.location.href = "/dashboard"} />
            </div>
        </div>

    </div>
  )
}

export default Logoutt