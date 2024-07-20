"useclient";
import React from 'react'
import Link from 'next/link';

function Users({users}) {

  return (
    <div>
         <ul>
      {
        users.map((user)=>(
          <Link
          key={user.id}
          href={`/users/${user.id}`}>
          <li  className="bg-slate-400 mb-2 p-4 rounded-md text-black flex gap-10 justify-between">
            <div>
              <h2 className="font-bold">{user.id} {user.first_name} {user.last_name}</h2>
              <p className="text-slate-200">email: {user.email}</p>
            </div>
              <img src={user.avatar} className="rounded-full w-20"/>
          </li>
          </Link>
        ))
      }
    </ul>
    </div>
  )
}

export default Users