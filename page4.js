
// this type of server side fetch only works from https --not local api file for security reasons

import React from 'react';



export default function webtwo({posts}){
 
    
return (

<div>
  
{
  
  posts.map(function(item){
   
    return <div>
    {item._id}

    </div>
  
  })
  
  }

</div>




)

}


export async function getServerSideProps(){

  const res = await fetch('http://localhost:3000/api/mongapithree');
  const posts = await res.json();

  return {
    props : {
      posts,
    }

  }
}
