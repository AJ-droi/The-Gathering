import { useDispatch } from 'react-redux'
import Button from '../../components/common/Button'
import { SignInput } from '../../components/common/Input'
import OnboardingBg from './OnboardingBg'
import {useState} from 'react'
import { verifyEmail } from '../../redux/actions'

export const VerifyEmail = () => {  
    return(
        <div>
      <OnboardingBg children={<Verify />} />
    </div>
    )
}
const Verify = () => {
    const [loginData, setLoginData] = useState<any>({
        email:'',
    })

    const handleChange=(e:any) => {
        const {name, value} = e.target

        setLoginData({
            ...loginData, [name]:value
        })

    }

    const dispatch = useDispatch() as unknown as any

    const handleSubmit = async(e:any) => {
        e.preventDefault()
        
        await dispatch(verifyEmail(loginData))
        
    }
  return (
    <div className="w-[100%] h-[100vh] py-[3%] flex flex-col justify-center ">
    <div className='my-[5%]'>
      <h3 className="text-[1.4rem]">Verify Email</h3>
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
        value={loginData.email}
        onchange={handleChange}
      />

      

      <Button
        title={"Verify Email"}
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

