import React, { useState } from 'react'
import Button from '../../components/common/Button'
import { SignInput } from '../../components/common/Input'
import addPhoto from '../../assets/addPhoto.png'
import { createPhotographer } from '../../redux/actions'
import { useDispatch } from 'react-redux'

const DashboardRegister = () => {
    const [formData, setFormData] = useState({
        name: '',
        brandName: '',
        email: '',
        phone: '',
        address: '',
    })

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const dispatch = useDispatch() as unknown as any

    const handleSubmit = async(e: any) => {
        e.preventDefault()
        dispatch(createPhotographer(formData))

    }
  return (
    <div className='my-[17%] lg:my-[0%]'> 
    <div className="lg:w-[50%] h-[70vh] py-[3%] flex flex-col justify-start mx-auto md:justify-evenly">
        <div>
        <h3 className="text-[1.4rem]">Register!</h3>
        <p className="mt-[2%] lg:text-[1.2rem]">
            Please Enter Your Details Below
        </p>
        </div>

        <SignInput
        caption={"Name"}
        type={"text"}
        placeholder={"Enter Your Full Name"}
        signStyle={`rounded-xl border border-[#FF6E31] border-[2px] outline-none px-[20px] text-[#000] w-[100%] h-[5vh] my-[2%]`}
        name={"name"}
        value={formData?.name}
        onchange={handleChange}
        />

        <SignInput
        caption={"Brand Name"}
        type={"text"}
        placeholder={"Enter Your Brand Name"}
        signStyle={`rounded-xl border border-[#FF6E31] border-[2px] outline-none px-[20px] text-[#000] w-[100%] h-[5vh] my-[2%]`}
        name={"brandName"}
        value={formData?.brandName}
        onchange={handleChange}
        />

        <SignInput
        caption={"Email"}
        type={"text"}
        placeholder={"Enter Your Email Address"}
        signStyle={`rounded-xl border border-[#FF6E31] border-[2px] outline-none px-[20px] text-[#000] w-[100%] h-[5vh] my-[2%]`}
        name={"email"}
        value={formData?.email}
        onchange={handleChange}
        />

        <SignInput
            caption={`Phone Number`}
            type={"number"}
            placeholder={"Enter Your Phone Number"}
            signStyle={`rounded-xl border border-[#FF6E31] border-[2px] outline-none px-[20px] text-[#000] w-[100%] h-[5vh] my-[2%]`}
            name={"phone"}
            value={formData?.phone}
            onchange={handleChange}

        />

        <SignInput
            caption={`Address`}
            type={"text"}
            placeholder={"Enter Your Address"}
            signStyle={`rounded-xl border border-[#FF6E31] border-[2px] outline-none px-[20px] text-[#000] w-[100%] h-[5vh] my-[2%]`}
            name={"address"}
            value={formData?.address}
            onchange={handleChange}

        />
        <Button title={"Add Photographer"} source={addPhoto} classes={"bg-[#FF6E31] flex-row-reverse lg:w-[50%] mx-auto py-[2%] px-[5%] text-[#fff] my-[2%] lg:my-[0%]"} onClick={handleSubmit}/>
        </div>
    </div>
    )
}

export default DashboardRegister
