import axios from "axios";

const URL = "http://localhost:8085/";

export const addCar = async (carData) => {
     axios.post(
        URL + "cars/",
        carData
    ).then(({data})=>{
        return data
    }).catch((err)=>{
        console.log("error in the post request", err);
        
    });

};


export const updateCar = async (id,carData) => {
    axios.put(
       URL + "cars/" + id,
       carData
   ).then(({data})=>{
       return data
   }).catch((err)=>{
       console.log("error in the put request", err);
       
   });

};
export const deleteCar = async (id) => {
 axios.delete(
        URL + 'cars/' + id 
    ).then(()=>{

    }).catch((err)=>{
        console.log("error in the delete request", err);
    });
};
export async function getCars (){
    let dataList = [];
    await axios.get(
        URL + "cars/").then(({data})=>{
            dataList =  data
        }).catch((err)=>{
        console.log("error in the get request", err);
    })

    return dataList
};

export const getCar = async (id) => {
    let car = {};
    await axios.get(
        URL + "cars/" + id).then(({data})=>{
            car = data
        }).catch((err)=>{
        console.log("error in the get request", err);
    })

    return car
};