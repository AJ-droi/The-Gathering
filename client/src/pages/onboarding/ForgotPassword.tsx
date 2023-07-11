import { useLocation } from 'react-router-dom'
import Button from '../../components/common/Button'
import { SignInput } from '../../components/common/Input'
import OnboardingBg from './OnboardingBg'
import {useState} from 'react'
import { userForgotPassword } from '../../redux/actions'
import { useDispatch } from 'react-redux'

export const ForgotPassword = () => {  
    return(
        <div>
      <OnboardingBg children={<Forgot />} />
    </div>
    )
}
const Forgot = () => {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get('token') as unknown as string;
    const dispatch = useDispatch() as unknown as any


    const [formData, setformData] = useState<any>({
        email:'',
        password:''
    })

    const handleChange= (e:any) => {
        const {name, value} = e.target

        setformData({
            ...formData, [name]:value
        })

    }

    const handleSubmit = async(e:any) => {
        e.preventDefault()

        await dispatch(userForgotPassword({formData, token}))

        
    }
  return (
    <div className="w-[100%] h-[100vh] py-[3%] flex flex-col justify-center ">
    <div className='my-[5%]'>
      <h3 className="text-[1.4rem]">Forgot Password?</h3>
      <p className="mt-[2%] md:text-[1.0rem] lg:text-[1.2rem]">
        Please Enter Your Details Below
      </p>
    </div>

    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-evenly h-[20vh] my-[5%]"
    >
      <SignInput
        caption={"Email"}
        type={"text"}
        placeholder={"Enter Your Email Address"}
        signStyle={`rounded-xl border border-[#FF6E31] border-[2px] outline-none px-[20px] text-[#000] w-[100%] h-[5vh]`}
        name={"email"}
        value={formData.email}
        onchange={handleChange}
      />

      <div>
        <SignInput
          caption={`New Password`}
          type={"password"}
          placeholder={"........."}
          signStyle={`rounded-xl border border-[#FF6E31] border-[2px] outline-none px-[20px] text-[#000] w-[100%] h-[5vh]`}
          name={"password"}
          value={formData.password}
          onchange={handleChange}
        />
        <p className="text-right underline  text-[#FF6E31] pr-[15%]">
          Forgot Password
        </p>
      </div>

      <Button
        title={"Proceed"}
        classes={
          "bg-[#FCFCFC] w-[60%] text-[#FF6E31] text-[1.2rem] border border-[#FF6E31] h-[4vh] mx-[auto] hover:bg-[#FF6E31] hover:text-[#fff] my-[3%] "
        }
        textStyle={` hover:text-[#fff]`}
        onClick={handleSubmit}
      />
    </form>

  </div>
  )
}

