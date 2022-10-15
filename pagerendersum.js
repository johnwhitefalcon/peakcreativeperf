
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




  


var hold2 = comments.map(function(item){
 return item
  
})


var store = []

var hold3 = comments.map(function(it){

   store.push(it.data.Q1, it.data.Q2, it.data.Q3, it.data.Q4, it.data.Q5, it.data.Q6, it.data.Q7, it.data.Q8, it.data.Q9, it.data.Q10)

  
  
})



var store1 = [];
var store2 = [];

for(var i = 0; i<store.length; i = 0){ 
var cut = store.splice(0, 10)

store1.push(cut)

var flat = store1.flat()
var test = flat.map(function(item){
  return Number(item)
})

var full = test.reduce(function(a,b){return a+b},0)
store2.push(full)

var store1 = []
}
  










return (

<div className="font-bold text-9xl items-center flex ml-[20rem] mt-[10rem]">
  {store2}
  


</div>




)

}




