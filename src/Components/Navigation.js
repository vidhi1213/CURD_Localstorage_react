import React from 'react';
import { Link} from 'react-router-dom';

export default function Navigation () {

   // console.log(user[])
   return (
     <>
               
                           
                           <Link to="/create" className="btn btn-dark">Add User</Link>

                           <Link to="/Contact" className="btn btn-dark">contact</Link> 
</>
   );
}
