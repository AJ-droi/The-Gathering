import camera from "../../assets/Camera.png";
import profileCard from "../../assets/profileCard.png";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSinglePhotographer,
  singleUser,
  updatePhotoProfile,
  updateProfile,
} from "../../redux/actions";
import profile1 from "../../assets/profile1.png";
import { Button } from "react-bootstrap";

const DashboardProfile = () => {
  const data = useSelector((state: any) => state.user);
  const photo = useSelector((state: any) => state.photographer.photographer);
  const role = localStorage.getItem("role");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });

  const [photoData, setPhotoData] = useState<any>({
    brandName: "",
    name: "",
    phone: "",
  });

  const [file, setFile] = useState("");

  const user = data.User;

  const dispatch = useDispatch() as unknown as any;

  useEffect(() => {
    if (role === "user" || role === "admin" || role === "superadmin") {
      dispatch(singleUser());
    }
  }, []);

  useEffect(() => {
    if (role === "photographer") {
      dispatch(getSinglePhotographer());
    }
  }, []);

  console.log(photo);

  const fileInputRef = useRef<any>(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleChange = (event: any) => {
    if (event.target.name === "photo") {
      setFormData({
        ...formData,
        [event.target.name]: event.target.files[0],
      });
      console.log(event.target.files[0]);
      setFile(URL.createObjectURL(event.target.files[0]));
    } else {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    }
  };

  const photoChange = (event: any) => {
    if (event.target.name === "photo") {
      setPhotoData({
        ...photoData,
        [event.target.name]: event.target.files[0],
      });
      setFile(URL.createObjectURL(event.target.files[0]));
    } else {
      setPhotoData({
        ...photoData,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (role === "photographer") {
      console.log(photoData);
      dispatch(updatePhotoProfile(photoData));
    } else {
      dispatch(updateProfile(formData));
    }
  };

  return (
    <div className="bg-[#E0E0E0] h-[100vh] px-[5%] lg:px-[0%]">
      {role === "photographer" ? (
        <>
          <div className="flex flex-col items-center py-[3%]">
          {file ? (
              <>
                <img
                  src={file}
                  alt=""
                  className="h-[150px] w-[150px] rounded-[50%] border border-[#fff] border-[6px]"
                />
                <img
                  src={camera}
                  alt=""
                  className="h-[8vh] mt-[-4%] ml-[8%]"
                  onClick={handleButtonClick}
                />{" "}
              </>
            ) : (
              <>
                {" "}
                <img
                  src={photo?.coverImage || profile1}
                  alt=""
                  className="h-[150px] w-[150px] rounded-[50%] border border-[#fff] border-[6px]"
                />
                <img
                  src={camera}
                  alt=""
                  className="h-[8vh] mt-[-4%] ml-[8%]"
                  onClick={handleButtonClick}
                />{" "}
              </>
            )}
            <input
              type={"file"}
              name={"photo"}
              className={
                "border border-[#FF6E31] rounded-xl w-[90%] py-[2%] pl-[2%] mt-[-8%] xl:mt-[-3%] hidden"
              }
              ref={fileInputRef}
              onChange={photoChange}
            />
          </div>
          <div className="flex flex-col lg:grid grid-cols-2 justify-center pl-[3%] py-[2%] ">
            <div className="w-[100%] flex flex-col items-start my-[1%]">
              <label className="my-[2%]">Name</label>
              <br />
              <input
                type={"text"}
                name={"name"}
                placeholder={"Enter Your Full Name"}
                value={photoData?.name || photo?.name}
                className={
                  "border border-[#FF6E31] rounded-xl w-[100%] lg:w-[90%] py-[2%] pl-[2%] mt-[-8%] md:mt-[-3%] xl:mt-[-3%]"
                }
                onChange={photoChange}
              />
            </div>
            <div className="w-[100%] flex flex-col items-start my-[1%]">
              <label className="my-[2%]">Brand Name</label>
              <br />
              <input
                type={"text"}
                name={"brandName"}
                placeholder={"Enter Your BrandName"}
                value={photoData?.brandName || photo?.brandName}
                className={
                  "border border-[#FF6E31] rounded-xl w-[100%] lg:w-[90%] py-[2%] pl-[2%] mt-[-8%] md:mt-[-3%] xl:mt-[-3%]"
                }
                onChange={photoChange}
              />
            </div>
            <div className="w-[100%] flex flex-col items-start my-[1%]">
              <label className="my-[2%]">Email</label>
              <br />
              <input
                type={"email"}
                name={"email"}
                placeholder={photo?.email}
                value={photo?.email}
                className={
                  "border border-[#FF6E31] rounded-xl w-[100%] lg:w-[90%] py-[2%] pl-[2%] mt-[-8%] md:mt-[-3%] xl:mt-[-3%]"
                }
                readOnly
              />
            </div>
            <div className="w-[100%] flex flex-col items-start my-[1%]">
              <label className="my-[2%]">Phone Number</label>
              <br />
              <input
                type={"tel"}
                name={"phone"}
                placeholder={"Enter Your Phone Number"}
                value={photoData?.phone || photo?.phone}
                className={
                  "border border-[#FF6E31] rounded-xl w-[100%] lg:w-[90%] py-[2%] pl-[2%] mt-[-8%] md:mt-[-3%] xl:mt-[-3%]"
                }
                onChange={photoChange}
              />
            </div>

            <Button
              className="bg-[#FF6E31] flex-row-reverse w-[55%] h-[5vh]  py-[1%] px-[5%] text-[#fff] mx-[auto] rounded-md mt-[13%]"
              onClick={handleSubmit}
            >
              Update Profile
            </Button>
            <Link to="/dashboard/profile" className="flex justify-center">
              <img
                src={profileCard}
                alt=""
                className="h-[20vh] mt-[5%] ml-[5%]"
              />
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col items-center py-[3%]">
            {file ? (
              <>
                <img
                  src={file}
                  alt=""
                  className="h-[150px] w-[150px] rounded-[50%] border border-[#fff] border-[6px]"
                />
                <img
                  src={camera}
                  alt=""
                  className="h-[8vh] mt-[-4%] ml-[8%]"
                  onClick={handleButtonClick}
                />{" "}
              </>
            ) : (
              <>
                {" "}
                <img
                  src={user?.photo || profile1}
                  alt=""
                  className="h-[150px] w-[150px] rounded-[50%] border border-[#fff] border-[6px]"
                />
                <img
                  src={camera}
                  alt=""
                  className="h-[8vh] mt-[-4%] ml-[8%]"
                  onClick={handleButtonClick}
                />{" "}
              </>
            )}
            <input
              type={"file"}
              name={"photo"}
              className={
                "border border-[#FF6E31] rounded-xl w-[90%] py-[2%] pl-[2%] mt-[-8%] xl:mt-[-3%] hidden"
              }
              ref={fileInputRef}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col lg:grid grid-cols-2 justify-center pl-[3%] py-[2%] ">
            <div className="w-[100%] flex flex-col items-start my-[1%]">
              <label className="my-[2%]">First Name</label>
              <br />
              <input
                type={"text"}
                name={"firstName"}
                placeholder={"Enter Your FirstName"}
                value={user?.firstName || formData?.firstName}
                className={
                  "border border-[#FF6E31] rounded-xl w-[100%] lg:w-[90%] py-[2%] pl-[2%] mt-[-8%] md:mt-[-3%] xl:mt-[-3%]"
                }
                onChange={handleChange}
              />
            </div>
            <div className="w-[100%] flex flex-col items-start my-[1%]">
              <label className="my-[2%]">Last Name</label>
              <br />
              <input
                type={"text"}
                name={"lastName"}
                placeholder={"Enter Your LastName"}
                value={user?.lastName || formData?.lastName}
                className={
                  "border border-[#FF6E31] rounded-xl w-[100%] lg:w-[90%] py-[2%] pl-[2%] mt-[-8%] md:mt-[-3%] xl:mt-[-3%]"
                }
                onChange={handleChange}
              />
            </div>
            <div className="w-[100%] flex flex-col items-start my-[1%]">
              <label className="my-[2%]">Email</label>
              <br />
              <input
                type={"email"}
                name={"email"}
                placeholder={"Enter Your Email Address"}
                value={user?.email}
                className={
                  "border border-[#FF6E31] rounded-xl w-[100%] lg:w-[90%] py-[2%] pl-[2%] mt-[-8%] md:mt-[-3%] xl:mt-[-3%]"
                }
                readOnly
              />
            </div>
            <div className="w-[100%] flex flex-col items-start my-[1%]">
              <label className="my-[2%]">Phone Number</label>
              <br />
              <input
                type={"tel"}
                name={"phone"}
                placeholder={"Enter Your Phone Number"}
                value={user?.phone || formData?.phone}
                className={
                  "border border-[#FF6E31] rounded-xl w-[100%] lg:w-[90%] py-[2%] pl-[2%] mt-[-8%] md:mt-[-3%] xl:mt-[-3%]"
                }
                onChange={handleChange}
              />
            </div>

            <Button
              className="bg-[#FF6E31] flex-row-reverse w-[55%] h-[5vh]  py-[1%] px-[5%] text-[#fff] mx-[auto] rounded-md mt-[13%]"
              onClick={handleSubmit}
            >
              Update Profile
            </Button>
            <Link to="/dashboard/profile" className="flex justify-center">
              <img
                src={profileCard}
                alt=""
                className="h-[20vh] mt-[5%] ml-[5%]"
              />
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default DashboardProfile;
