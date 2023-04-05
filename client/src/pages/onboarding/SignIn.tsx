import React from "react";
import sign from "../../assets/sign.png";
import Button from "../../components/common/Button";
import Input, { SignInput } from "../../components/common/Input";
import google from "../../assets/google.png";
import facebook from "../../assets/Facebook.png";
import OnboardingBg from "./OnboardingBg";
import { Link, useLocation } from "react-router-dom";

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
            style={`rounded-xl border border-[#FF6E31] border-[2px] outline-none px-[20px] text-[#000] w-[100%] h-[5vh]`}
          />

          <div>
            <SignInput
              caption={`Password`}
              type={"password"}
              placeholder={"........."}
              style={`rounded-xl border border-[#FF6E31] border-[2px] outline-none px-[20px] text-[#000] w-[100%] h-[5vh]`}
            />
            <p className="text-right underline  text-[#FF6E31] pr-[15%]">
              Forgot Password
            </p>
          </div>

          <Button
            title={"Sign In"}
            classes={
              "bg-[#FCFCFC] w-[60%] text-[#FF6E31] text-[1.2rem] border border-[#FF6E31] h-[4vh] mx-[auto] hover:bg-[#FF6E31] "
            }
            textStyle={` hover:text-[#fff]`}
          />

          <div>
            <h4 className="text-[1.4rem] ">Or</h4>
            <Button
              title={"Sign In With Google"}
              source={google}
              classes={
                "bg-[#FCFCFC] w-[60%] text-[#FF6E31] border border-[#FF6E31] flex-row-reverse mx-[auto] px-[5%] md:px-[7%] lg:px-[11%] xl:px-[15%] py-[1%] hover:bg-[#FF6E31]  "
              }
              textStyle={`text-[0.8rem] md:text-[1rem] text-[#212121] hover:text-[#fff]`}
              imgHeight={`lg:h-[3vh]`}
            />
            <Button
              title={"Sign In With Facebook"}
              source={facebook}
              classes={
                "bg-[#FCFCFC] w-[60%] text-[#FF6E31] border border-[#FF6E31] flex-row-reverse mx-[auto] px-[2%] md:px-[4%] lg:px-[9%] xl:px-[15%] py-[1%] my-[5%] hover:bg-[#FF6E31]"
              }
              textStyle={`text-[0.8rem] md:text-[1rem text-[#212121] hover:text-[#fff]`}
              imgHeight={`lg:h-[3vh]`}
            />
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
            style={`rounded-xl border border-[#FF6E31] border-[2px] outline-none px-[20px] text-[#000] w-[100%] h-[5vh]`}
          />

          <SignInput
            caption={"Last Name"}
            type={"text"}
            placeholder={"Enter Your Last Name"}
            style={`rounded-xl border border-[#FF6E31] border-[2px] outline-none px-[20px] text-[#000] w-[100%] h-[5vh]`}
          />

          <SignInput
            caption={"Email"}
            type={"text"}
            placeholder={"Enter Your Email Address"}
            style={`rounded-xl border border-[#FF6E31] border-[2px] outline-none px-[20px] text-[#000] w-[100%] h-[5vh]`}
          />

            <SignInput
                caption={`Password`}
                type={"password"}
                placeholder={"........."}
                style={`rounded-xl border border-[#FF6E31] border-[2px] outline-none px-[20px] text-[#000] w-[100%] h-[5vh]`}
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
            style={``}
          />            

          <Button
            title={"Sign Up"}
            classes={
              "bg-[#FCFCFC] w-[60%] text-[#FF6E31] text-[1.2rem] border border-[#FF6E31] h-[4vh] mx-[auto] hover:bg-[#FF6E31] "
            }
            textStyle={` hover:text-[#fff]`}
          />

          <div>
            <h4 className="text-[1.4rem] ">Or</h4>
            <Button
              title={"Sign Up With Google"}
              source={google}
              classes={
                "bg-[#FCFCFC] w-[60%] text-[#FF6E31] border border-[#FF6E31] flex-row-reverse mx-[auto] px-[2%] md:px-[4%] lg:px-[9%] xl:px-[15%] py-[1%] my-[5%] hover:bg-[#FF6E31]"
              }
              textStyle={`text-[0.8rem] md:text-[1rem] text-[#212121] hover:text-[#fff]`}
              imgHeight={`lg:h-[3vh]`}
            />
            <Button
              title={"Sign Up With Facebook"}
              source={facebook}
              classes={
                "bg-[#FCFCFC] w-[60%] text-[#FF6E31] border border-[#FF6E31] flex-row-reverse mx-[auto] px-[2%] md:px-[4%] lg:px-[9%] xl:px-[15%] py-[1%] my-[5%] hover:bg-[#FF6E31]"
              }
              textStyle={`text-[0.8rem] md:text-[1rem text-[#212121] hover:text-[#fff]`}
              imgHeight={`lg:h-[3vh]`}
            />
            <p className="text-[#8F8F8F] font-bold">Already have an Account? <span className="text-[#FF6E31]"><Link to="/signin">Sign In</Link></span></p>
          </div>
        </div>
      )}
    </>
  );
};
