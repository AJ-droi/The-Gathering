import axios from "axios";

const baseUrl = "https://the-gathering.onrender.com" || "http://localhost:5000";

export const apiGet = (path:string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("signature")}`,
      'Access-Control-Allow-Origin': '*'
    },
  };

  return axios.get(`${baseUrl}${path}`, config);
};

export const apiPost = async (path:string, data:any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("signature")}`,
      'Access-Control-Allow-Origin': '*'
    },
  };
  return await axios.post(`${baseUrl}${path}`, data, config);
};

export const FormDataPost = async (path:string, data:any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("signature")}`,
      "Content-Type": "multipart/form-data",
      'Access-Control-Allow-Origin': '*'
    },
  };
  return await axios.post(`${baseUrl}${path}`, data, config);
};

export const apiPut = (path:string, data:object) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("signature")}`,
      'Access-Control-Allow-Origin': '*'
    },
  };

  return axios.put(`${baseUrl}${path}`, data, config);
};

export const apiPatch = (path:string, data:object) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("signature")}`,
      'Access-Control-Allow-Origin': '*'
    },
  };

  return axios.patch(`${baseUrl}${path}`, data, config);
};

export const apiDelete = (path:string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("signature")}`,
      'Access-Control-Allow-Origin': '*'
    },
  };

  return axios.delete(`${baseUrl}${path}`, config);
};