// import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
// import { useDispatch ,useSelector} from "react-redux";
// import {updateContact} from '../action/ContactAction';
// const Create = () => {
//  let history = useHistory();
//  const currentData =useSelector((state)=>state);
//  console.log(currentData)
//  const dispatch = useDispatch();
//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     password: "",
//     contact:"",
    
//   });
//   const { name, email, password,contact } = user;
//   const onInputChange = e => {
//     setUser({ ...user, [e.target.name]: e.target.value },currentData);
  
//   };

//   const onSubmit = async e => {
//     e.preventDefault();
    
//     try { 
//         dispatch(updateContact(user));
//        setUser({
//          name: "",
//      email: "",
//     password:" ",
//     contact:""
//        });
 
//        history.push('/Contact');
//      }
//      catch (error) {
//        console.log(error);
//      }
//   };
//   return (
//     <div className="container">
//       <div className="w-75 mx-auto shadow p-5">
//         <h2 className="text-center mb-4">Add A User</h2>
//         <form onSubmit={e => onSubmit(e)}>
//           <div className="form-group">
//             <input
//              id="Name"
//              type="text"
//               className="form-control form-control-lg"
//               placeholder="Enter Your Name"
//               name="name"
//               value={name}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group">
//             <input
//              id="Email"
//              type="email"
//               className="form-control form-control-lg"
//               placeholder="Enter Your E-mail Address"
//               name="email"
//               value={email}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group">
//             <input
//              id="password"
//              type="password"
//               className="form-control form-control-lg"
//               placeholder="Enter Your password"
//               name="password"
//               value={password}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group">
//             <input
//              id="contact"
//              type="contact"
//               className="form-control form-control-lg"
//               placeholder="Enter Your Phone no"
//               name="contact"
//               value={contact}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
        
//           <button className="btn btn-primary btn-block">Add User</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Create;