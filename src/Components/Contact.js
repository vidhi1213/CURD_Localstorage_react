import React, { useEffect,useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import {updateIndex,deleteContact } from "../action/ContactAction";
import {useHistory} from "react-router-dom";
// import { Link} from 'react-router-dom';

const Contact =()=>{
    const [users, setUser] = useState([]);
    const getData = JSON.parse(localStorage.getItem('store') || "[]");
    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {
        userData();
      }, [getData]);
    
   
    const userData= async()=>{
    // const getData = JSON.parse(localStorage.getItem('store') || "[]");
    setUser(getData.reverse());
 }   
 const handleEdit = (data) => {
  dispatch(updateIndex(data));
  history.push("/create");
};

 const deleteUser = (users) => {
   dispatch(deleteContact(users))
    // const updatedData = users.filter((_) => _._id !== id);
    // setUser(updatedData);
    // localStorage.setItem("store", JSON.stringify(updatedData));
  };

    return(
        <>
        {/* <Link to="/contacts/add" className="btn btn-dark">Add User</Link> */}
       <div className="container">
      <div className="row pt-5">
      <div className="col-md-12">
      <div>

      <table className="table shadow">
      <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
     <th scope="col">email</th>
    <th scope="col">Phone No</th>
    <th></th>
    <th></th>
    </tr>
  </thead>
  <tbody>
{
    users.map((user, index)=>{
       return <tr>
            <th scope="row">{index + 1}</th>
            <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.contact}</td>
                      <td><button className="btn btn-danger" onClick={() => handleEdit(user)}>Edit</button></td>
                      <td><button className="btn btn-danger" onClick={() => deleteUser((user))}>Delete</button></td>
        </tr>
    })
}
  </tbody>
      </table>
    </div>
      </div>
      </div>
    </div>
        </>
    );
}

export default Contact;
