
import React from 'react';
import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";

export default function webtwo(){

  
  const [comments, setComments] = useState([]);
  const [isLoading, setLoading] = useState(true)


  useEffect(() => {
    
  async function fetchdashboarddata(){
  const response = await fetch("./api/mongget");
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


var store2 = [];

function wrap(){

for(var i = 0; i<store.length; i = 0){ 
var cut = store.splice(0, 10)
var store1 = [];
store1.push(cut)

var flat = store1.flat()
var test = flat.map(function(item){
  return Number(item)
})


var full = test.reduce(function(a,b){return a+b},0)

  store2.push(full)


var store1 = []


}

}
wrap()

store2 = [10,20,30,40]
console.log(store2)

var storex = {};

var keyx = 'Q'
var countx = 0
for(var i = 0; i<store2.length; i++){
  countx = countx+1
  storex[keyx+countx] = store2[i]
}






const [statea, stateb] = useState([]);
const [state1, state2] = useState(false);

useEffect(() => {
state2(true)
  async function postapi(){
    const response = await fetch("./api/mongapi1", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(storex)
      })
      const findata = await response.json();
      
      stateb(findata)
      state2(false)
    }
    postapi();
  }, [])




  const [stateaa, statebb] = useState([]);
  const [state11, state22] = useState(false);
  
  useEffect(() => {
  state22(true)
    async function getapi(){
      const response = await fetch("./api/mongget1")
        const findataget = await response.json();
        
        statebb(findataget)
        state22(false)
      }
      getapi();
    }, [])
  
  

  

return (

<div className="font-bold text-9xl items-center flex ml-[20rem] mt-[10rem]">
  {store2}
  
 

</div>




)

}





export async function getServerSideProps(){

  
  
  return {
    props : {
      
      
    }
  
  }
  
  }
  
  






