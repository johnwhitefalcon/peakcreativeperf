
import React from 'react';
import { useState, useEffect } from 'react';


export default function webtwo(){

  
  const [comments, setComments] = useState([]);
  const [isLoading, setLoading] = useState(true)


  useEffect(() => {
    
  async function fetchdashboarddata(){
  const response = await fetch("./api/mongapithree");
  const data = await response.json();
  setComments(data); 
  setLoading(false)
 }
fetchdashboarddata();
}, [])



const isObject = function(val){
    if(val===null){
      return false;
    }
return(typeof val === 'object')

};

const objProps = function(obj){
  for(var val in obj){
    if(isObject(obj[val])){
      objProps(obj[val])
    } else {console.log(val, obj[val])}
  }
}

objProps(comments);






return (

<div className="font-bold text-9xl items-center flex ml-[20rem] mt-[10rem]">
  {}


</div>




)

}




