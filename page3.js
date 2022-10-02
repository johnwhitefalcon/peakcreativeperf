// this type of client side fetch works for local api file
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

  
   
return (

<div>
  
{
  
  comments.map(function(item){
   
    return <div>
    {item._id}

    </div>
  
  })
  
  }

</div>




)

}