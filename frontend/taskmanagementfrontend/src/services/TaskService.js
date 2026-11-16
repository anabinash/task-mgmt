import axios from "axios";

const API_URL="http://localhost:9096/task";

export const addTask=(task)=>{

 return axios.post(`${API_URL}/add`,task);

};

export const getAllTasks=()=>{

 return axios.get(`${API_URL}/all`);

};

export const updateTask=(id,task)=>{
    return axios.put(`${API_URL}/update/${id}`,task);
};

export const deleteTask=(id)=>{
    return axios.delete(`${API_URL}/delete/${id}`);
};

export const getTaskById=(id)=>{
    return axios.post(`${API_URL}/get/${id}`);
};