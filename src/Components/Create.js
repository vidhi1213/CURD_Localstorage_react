import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addContact, EditUser } from '../action/ContactAction';
const Create = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const currentData = useSelector((state) => state.contact.currentData);
  const fg = useSelector((state) => state.contact.flag);
  const [editFlag, setEditFlag] = useState(fg);
  const [emailErr, setemailErr] = useState('');
  const [passwordErr, setpasswordErr] = useState('')
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    contact: "",

  });
  useEffect(() => {
    console.log('currentData', currentData);
    if (currentData) {
      setUser(currentData);
      setEditFlag(true)
    }

  }, []);
  const validation = () => {
    let emailErr=""
    let passErr = ''
    if (!user.email) {
      emailErr="This field is required."
      
    }
    else {
      if (
        !user.email.match(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      ) {
        emailErr="Email address must be valid email."
       

      }

    }



    if (!user.password) {
     passErr = 'Password can not be blank'
      // setpasswordErr("")
    } else {
      if (
        !user.password.match(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/
        )
      ) {
        passErr = 'Password must be at least 8 characters and include one lowercase letter, one uppercase letter, and one digit.'
        // setpasswordErr("")

      }
    }

    setemailErr(emailErr)
    setpasswordErr(passErr)
    if (emailErr || passErr) {
      return false;
    }
    return true;
  }

  const { name, email, password, contact } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setpasswordErr('');
    setemailErr('')
  };

  const onSubmit = e => {
    e.preventDefault();
    // console.log('editFlag',editFlag);
    let val = validation();
    if (val) {
      if (editFlag) {
        dispatch(EditUser(user))
        history.push('/Contact')
      }
      else {
        dispatch(addContact(user));
        //  const allData = JSON.parse(localStorage.getItem('store') || "[]");
        // allData.push({ ...user, _id: Math.round(Math.random() * 10 + 1) });
        //  localStorage.setItem("store", JSON.stringify(allData));
        setUser({
          name: "",
          email: "",
          password: " ",
          contact: ""
        });

        history.push('/Contact');
      }
    }
    //  catch (error) {
    //    console.log(error);
    //  }
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">{editFlag ? "Edit User" : "Add User"}</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              id="Name"
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />

          </div>
          <div className="form-group">
            <input
              id="Email"
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
              disabled={editFlag}
            />
            <span style={{ color: "red" }}>

              {emailErr}
            </span>
          </div>
          <div className="form-group">
            <input
              id="password"
              type="password"
              className="form-control form-control-lg"
              placeholder="Enter Your password"
              name="password"
              value={password}
              onChange={e => onInputChange(e)}
            />
            <span style={{ color: "red" }}>

              {passwordErr}
            </span>
          </div>
          <div className="form-group">
            <input
              id="contact"
              type="contact"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone no"
              name="contact"
              value={contact}
              onChange={e => onInputChange(e)}
            />
          </div>

          <button className="btn btn-primary btn-block">{editFlag ? "Edit User" : "Add User"}</button>
        </form>
      </div>
    </div>
  );
};

export default Create;