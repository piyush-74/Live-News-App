import axios from "axios";
const BASE_URL='https://newsapi.org/v2'
const API_KEY='43415a7eaf0d488580e7ed1153e46bae'


export const getAllNews=(topic)=>{
    
    return axios.get(`${BASE_URL}/everything?q=${topic}&apikey=${API_KEY}`)
}

export const getTopheadLines=()=>{
    //https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=API_KEY
    return axios.get(`${BASE_URL}/top-headlines?country=in&apikey=${API_KEY}`)
}

export const getSports=()=>{
   // https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=API_KEY
    // return axios.get(`${BASE_URL}/top-headlines?country=in&apikey=${API_KEY}`)
    return axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=43415a7eaf0d488580e7ed1153e46bae
    `)
}