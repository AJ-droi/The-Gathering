import React from 'react'
import Button from '../../components/common/Button'
import { SignInput } from '../../components/common/Input'
import addPhoto from '../../assets/addPhoto.png'

const DashboardRegister = () => {
  return (
    <div> 
    <div className="w-[50%] h-[70vh] py-[3%] flex flex-col justify-start mx-auto md:justify-evenly">
        <div>
        <h3 className="text-[1.4rem]">Register!</h3>
        <p className="mt-[2%] lg:text-[1.2rem]">
            Please Enter Your Details Below
        </p>
        </div>

        <SignInput
        caption={"First Name"}
        type={"text"}
        placeholder={"Enter Your First Name"}
        signStyle={`rounded-xl border border-[#FF6E31] border-[2px] outline-none px-[20px] text-[#000] w-[100%] h-[5vh]`}
        name={"firstName"}
        value={''}
        />

        <SignInput
        caption={"Last Name"}
        type={"text"}
        placeholder={"Enter Your Last Name"}
        signStyle={`rounded-xl border border-[#FF6E31] border-[2px] outline-none px-[20px] text-[#000] w-[100%] h-[5vh]`}
        name={"lastName"}
        value={''}
        />

        <SignInput
        caption={"Email"}
        type={"text"}
        placeholder={"Enter Your Email Address"}
        signStyle={`rounded-xl border border-[#FF6E31] border-[2px] outline-none px-[20px] text-[#000] w-[100%] h-[5vh]`}
        name={"email"}
        value={''}
        />

        <SignInput
            caption={`Phone Number`}
            type={"number"}
            placeholder={"Enter Your Phone Number"}
            signStyle={`rounded-xl border border-[#FF6E31] border-[2px] outline-none px-[20px] text-[#000] w-[100%] h-[5vh]`}
            name={"phone"}
            value={''}

        />
        <Button title={"Add Photographer"} source={addPhoto} classes={"bg-[#FF6E31] flex-row-reverse w-[50%] mx-auto py-[2%] px-[5%] text-[#fff]"} />
        </div>
    </div>
    )
}

export default DashboardRegister
