import React from "react";
import Button from "../../components/common/Button";
import  { SignInput } from "../../components/common/Input";
import google from "../../assets/google.png";
import facebook from "../../assets/Facebook.png";
import OnboardingBg from "./OnboardingBg";
import { Link, useLocation } from "react-router-dom";
import { loginUser, registerUser } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { LoginData } from "../../interface";
import { State } from "../../redux/reducer";
import { getGoogleUrl } from "../../utils/getGoogleUrl";
import { facebookLoginUrl } from "../../utils/facebook";



const SignIn = () => {

  return (
    <div>
      <OnboardingBg children={<Login />} />
    </div>
  );
};

export default SignIn;

const Login = () => {
  const path = useLocation().pathname;
  const dispatch = useDispatch() as unknown as any;
  const location = useLocation();
  const from = location.pathname

  
  const [loginData, setLoginData] = React.useState<LoginData>({
    email: "",
    password: "",
  })

  const [registerData, setRegisterData] = React.useState<LoginData>({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if(path === '/signup') {
      setRegisterData({ ...registerData, [name]: value });
      console.log(registerData)
    }else{
      setLoginData({ ...loginData, [name]: value });
      console.log(loginData)
    }
  
  };

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(path === '/signup') {
      dispatch(registerUser(registerData))
    }else{
    console.log(loginData)
    dispatch(loginUser(loginData))
    }
  }

 

  const { loading } = useSelector((state: State) => state);
  
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {path === "/signin" ? (
        <div className="w-[100%] h-[100vh] py-[3%] flex flex-col justify-evenly ">
          <div>
            <h3 className="text-[1.4rem]">Welcome!</h3>
            <p className="mt-[2%] md:text-[1.0rem] lg:text-[1.2rem]">
              Please Enter Your Details Below
            </p>
          </div>

          <SignInput
            caption={"Email"}
            type={"text"}
            placeholder={"Enter Your Email Address"}
            signStyle={`rounded-xl border border-[#FF6E31] border-[2px] outline-none px-[20px] text-[#000] w-[100%] h-[5vh]`}
            name={"email"}
            value={loginData.email}
            onchange={handleChange}
          />

          <div>
            <SignInput
              caption={`Password`}
              type={"password"}
              placeholder={"........."}
              signStyle={`rounded-xl border border-[#FF6E31] border-[2px] outline-none px-[20px] text-[#000] w-[100%] h-[5vh]`}
              name={"password"}
              value={loginData.password}
              onchange={handleChange}
            />
            <p className="text-right underline  text-[#FF6E31] pr-[15%]">
              Forgot Password
            </p>
          </div>

          <Button
            title={"Sign In"}
            classes={
              "bg-[#FCFCFC] w-[60%] text-[#FF6E31] text-[1.2rem] border border-[#FF6E31] h-[4vh] mx-[auto] hover:bg-[#FF6E31] hover:text-[#fff] "
            }
            textStyle={` hover:text-[#fff]`}
            onClick={handleSubmit}
          />


          <div>
            <h4 className="text-[1.4rem] ">Or</h4>
            <Link to={getGoogleUrl(from)}><Button
              title={"Sign In With Google"}
              source={google}
              classes={
                "bg-[#FCFCFC] w-[60%] text-[#FF6E31] border border-[#FF6E31] flex-row-reverse mx-[auto] px-[5%] md:px-[7%] lg:px-[11%] xl:px-[15%] py-[1%] hover:bg-[#FF6E31]  "
              }
              textStyle={`text-[0.8rem] md:text-[1rem] text-[#212121] hover:text-[#fff]`}
              imgHeight={`lg:h-[3vh]`}
            /></Link>
            <Link to={facebookLoginUrl}><Button
              title={"Sign In With Facebook"}
              source={facebook}
              classes={
                "bg-[#FCFCFC] w-[60%] text-[#FF6E31] border border-[#FF6E31] flex-row-reverse mx-[auto] px-[2%] md:px-[4%] lg:px-[9%] xl:px-[15%] py-[1%] my-[5%] hover:bg-[#FF6E31]"
              }
              textStyle={`text-[0.8rem] md:text-[1rem text-[#212121] hover:text-[#fff]`}
              imgHeight={`lg:h-[3vh]`}
            /></Link>
            <p className="text-[#8F8F8F] font-bold">Don't have an Account? <span className="text-[#FF6E31]"><Link to="/signup">Sign Up</Link></span></p>
          </div>
        </div>
      ) : (
        <div className="w-[100%] h-[100vh] py-[3%] flex flex-col justify-start md:justify-evenly">
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
            value={registerData.firstName}
            onchange={handleChange}
          />

          <SignInput
            caption={"Last Name"}
            type={"text"}
            placeholder={"Enter Your Last Name"}
            signStyle={`rounded-xl border border-[#FF6E31] border-[2px] outline-none px-[20px] text-[#000] w-[100%] h-[5vh]`}
            name={"lastName"}
            value={registerData.lastName}
            onchange={handleChange}
          />

          <SignInput
            caption={"Email"}
            type={"text"}
            placeholder={"Enter Your Email Address"}
            signStyle={`rounded-xl border border-[#FF6E31] border-[2px] outline-none px-[20px] text-[#000] w-[100%] h-[5vh]`}
            name={"email"}
            value={registerData.email}
            onchange={handleChange}
          />

            <SignInput
                caption={`Password`}
                type={"password"}
                placeholder={"........."}
                signStyle={`rounded-xl border border-[#FF6E31] border-[2px] outline-none px-[20px] text-[#000] w-[100%] h-[5vh]`}
                name={"password"}
                value={registerData.password}
                onchange={handleChange}
            />

        <SignInput
            caption={"Yes, I want to receive emails about The Gathering’s latest products."}
            type={"checkbox"}
            placeholder={"Enter Your Email Address"}
          />  

        <SignInput
            caption={"I agree to the Terms of Service and private policy"}
            type={"checkbox"}
            placeholder={"Enter Your Email Address"}
            signStyle={``}
          />            

          <Button
            title={"Sign Up"}
            classes={
              "bg-[#FCFCFC] w-[60%] text-[#FF6E31] text-[1.2rem] border border-[#FF6E31] h-[4vh] mx-[auto] hover:bg-[#FF6E31] "
            }
            textStyle={` hover:text-[#fff]`}
            onClick={handleSubmit}
          />

          <div>
            <h4 className="text-[1.4rem] ">Or</h4>
            <Link to={getGoogleUrl(from)}><Button
              title={"Sign Up With Google"}
              source={google}
              classes={
                "bg-[#FCFCFC] w-[60%] text-[#FF6E31] border border-[#FF6E31] flex-row-reverse mx-[auto] px-[2%] md:px-[4%] lg:px-[9%] xl:px-[15%] py-[1%] my-[5%] hover:bg-[#FF6E31]"
              }
              textStyle={`text-[0.8rem] md:text-[1rem] text-[#212121] hover:text-[#fff]`}
              imgHeight={`lg:h-[3vh]`}
            /></Link>

          <Link to={facebookLoginUrl}><Button
              title={"Sign Up With Facebook"}
              source={facebook}
              classes={
                "bg-[#FCFCFC] w-[60%] text-[#FF6E31] border border-[#FF6E31] flex-row-reverse mx-[auto] px-[2%] md:px-[4%] lg:px-[9%] xl:px-[15%] py-[1%] my-[5%] hover:bg-[#FF6E31]"
              }
              textStyle={`text-[0.8rem] md:text-[1rem text-[#212121] hover:text-[#fff]`}
              imgHeight={`lg:h-[3vh]`}
            /></Link>
            <p className="text-[#8F8F8F] font-bold">Already have an Account? <span className="text-[#FF6E31]"><Link to="/signin">Sign In</Link></span></p>
          </div>
        </div>
      )}
    </>
  );
};

