import React from 'react'

async function getUser(id){
    const res=await fetch(`https://reqres.in/api/users/${id}`);
    const data=await res.json();

    return data.data;
}

async function UserPage({params}) {

    const usuario=await getUser(params.id);
    console.log(usuario);
  return (
    <div className='bg-blue-900 p-10 rounded-md h-80 m-auto'>    
        <h3 className='text-center text-3xl font-bold'>{usuario.id} {usuario.first_name} {usuario.last_name}</h3>
        <p className='text-center'>email: {usuario.email}</p>
        <img src={usuario.avatar} className='m-auto p-20'/>
    </div>
  )
}

export default UserPage;