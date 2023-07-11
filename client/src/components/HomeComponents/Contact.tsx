import React from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import map from "../../assets/map.svg";
import call from "../../assets/call.png";
import maill from "../../assets/emmail.png";

const Contact = () => {
  const [formData, setFormData] = React.useState<any>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [mail, setMail] = React.useState<any>({
    subject: "",
    body: "",
  });

  const [error, setError] = React.useState<any>({
    firstName: "",
    lastName: "",
    email: "",
    message:""
  })

  const handleChange = (e: any) => {
    const {name,value} = e.target
    setFormData({
      ...formData,
      [name]: value,
    });

    if(value === '' && name === "firstName"){
      setError({
        ...error,
        firstName: `${name} is required`
      })
    }else if(value === '' && name === "lastName"){
      setError({
        ...error,
        lastName: `${name} is required`
      })
    } else if(value === '' && name === "email"){
      setError({
        ...error,
        email: `${name} is required`
      })
    } else if(value === '' && name === "message"){
      setError({
        ...error,
        message: `${name} is required`
      })
    } else{
      setError({
        ...error
      })
    }




    const subject = `New message from ${formData.firstName} ${formData.lastName}`;

    const body = <p>{`${formData.message}`}</p>;

    setMail({
      subject,
      body: body.props.children,
    });


  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (mail.body == "" && mail.subject == "") {
      return null;
    } else {
      window.location.href = `mailto:thegathering@gmail.com?subject=${encodeURIComponent(
        mail.subject
      )}&body=${encodeURIComponent(mail.body)}`;
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
      setMail({
        subject: "",
        body: "",
      });
    }
  };

  return (
    <div className="flex flex-col lg:flex-row bg-[#212121] text-[#fff] justify-between items-start px-[10%] py-[5%]">
      <div className="text-left flex flex-col justify-between h-[45vh] lg:h-[37vh]">
        <h4>
          Feel free to contact us for any kind of enquiry or Partnerships.
        </h4>
        <h4>Thank you for your interest in hiring a service from us.</h4>
        <div>
          <div className="flex items-center">
            <img src={map} alt="" className="h-[2vh] mr-[2%]" />
            <p>Office Address</p>
          </div>
          <p className="text-[0.8rem]">No.2a Ibiye drive off woji road , woji , PHC , Rivers state</p>
        </div>
        <div>
          <div className="flex items-center ">
            <img src={maill} alt="" className="h-[2vh] mr-[2%]" />
            <p>Mail address</p>
          </div>
          <p className="text-[0.8rem]">thegatheringpictures@gmail.com</p>
        </div>
        <div>
          <div className="flex items-center">
            <img src={call} alt="" className="h-[2vh] mr-[2%]" />
            <p>Phone number</p>
          </div>
          <p className="text-[0.8rem]">08168237955, 09150813746</p>
        </div>
      </div>
      <div className="w-[100%] lg:w-[50%]">
        <div className="flex flex-col lg:flex-row justify-between ">
          <Input
            type={"text"}
            name={"firstName"}
            placeholder={"First Name"}
            value={formData.firstName}
            signStyle={`h-[50px] w-[100%] lg:w-[auto] mt-[5%] lg:mt-[0%]`}
            onchange={handleChange}
            error={error.firstName}
          />
          
          <Input
            type={"text"}
            name={"lastName"}
            placeholder={"Last Name"}
            value={formData.lastName}
            signStyle={`h-[50px] w-[100%] lg:w-[auto] mt-[2%] lg:mt-[0%]`}
            onchange={handleChange}
            error={error.lastName}
          />

        </div>

        <Input
          type={"email"}
          name={"email"}
          placeholder={"Email Address"}
          value={formData.email}
          signStyle={`w-[100%] lg:w-[70%] my-[3%] h-[50px]`}
          onchange={handleChange}
          error={error.email}
        />
     
        <Input
          type={"text"}
          name={"message"}
          placeholder={"message"}
          value={formData.message}
          signStyle={`w-[100%] h-[100px]`}
          onchange={handleChange}
          error={error.message}
        />
 

        <Button
          title={"Send"}
          classes={"bg-[#FF6E31] w-[100%] my-[2%] h-[40px] my-[6%]"}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Contact;
