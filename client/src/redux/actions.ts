import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { LoginData } from "../interface";
import { apiGet, apiPatch, apiPost } from "../utils/axios";
import { fetchDataFailure, fetchDataStart, fetchDataSuccess } from "./reducer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Lawyer
export const fetchData = createAsyncThunk(
  "user/loginLawyer",
  async (_, { dispatch }) => {
    try {
      dispatch(fetchDataStart);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      toast.success(response.data.message);
      dispatch(fetchDataSuccess(response.data));
    } catch (error: any) {
      toast.error(error.response.data.Error);
      dispatch(fetchDataFailure(error.response.data.error));
    }
  }
);

export const loginUser = createAsyncThunk(
  "loginUser",
  async (formData: LoginData, { dispatch }) => {
    try {
      dispatch(fetchDataStart);
      const response = await apiPost("/user/login", formData);
      toast.success(response.data.message);
      localStorage.setItem("signature", response.data.signature);
      dispatch(fetchDataSuccess(response.data));
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 2000);
    } catch (error: any) {
      console.log(error.response.data.error);
      toast.error(error.response.data.Error);
      dispatch(fetchDataFailure(error.response.data.error));
    }
  }
);

export const registerUser = createAsyncThunk(
  "registerUser",
  async (formData: LoginData, { dispatch }) => {
    try {
      dispatch(fetchDataStart);
      const response = await apiPost("/user/signup", formData);
      toast.success(response.data.message);
      localStorage.setItem("signature", response.data.signature);
      dispatch(fetchDataSuccess(response.data));
      setTimeout(() => {
        window.location.href = "/confirm";
      }, 2000);
    } catch (error: any) {
      console.log(error.response.data.error);
      toast.error(error.response.data.Error);
      dispatch(fetchDataFailure(error.response.data.error));
    }
  }
);

export const verifyUser = createAsyncThunk(
  "verifyUser",
  async (token: string, { dispatch }) => {
    try {
      dispatch(fetchDataStart);
      const response = await apiPatch(`/user/verify/?token=${token}`, {});
      toast.success(response.data.message);
      dispatch(fetchDataSuccess(response.data));
      setTimeout(() => {
        window.location.href = "/verified";
      }, 2000);
    } catch (error: any) {
      console.log(error.response.data.error);
      toast.error(error.response.data.Error);
      dispatch(fetchDataFailure(error.response.data.error));
      window.location.href = "/expired";
    }
  }
);

export const resendverification = createAsyncThunk(
  "resendverification",
  async (token: string, { dispatch }) => {
    try {
      dispatch(fetchDataStart);
      const response = await apiGet(`/user/resendverification/${token}`);
      toast.success(response.data.message);
      dispatch(fetchDataSuccess(response.data));
      setTimeout(() => {
        window.location.href = "/confirm";
      }, 2000);
    } catch (error: any) {
      console.log(error.response.data.error);
      toast.error(error.response.data.Error);
      dispatch(fetchDataFailure(error.response.data.error));
    }
  }
);
