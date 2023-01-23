import React from "react";
import Warning from "../warning/Warning";
import "./update.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { updateUser } from "../../redux/apiCall";
import { updateUser } from "../../redux/UserSlice";

export default function Update() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser({ name, email }));
  };

  return (
    <div className="update">
      <div className="updateWrapper">
        <h3 className="updateTitle">Update Your Account</h3>
        <Warning />
        <button className="delete">Delete Account</button>
        <div className="updateContainer">
          <form>
            <div className="formItem">
              <label>Profile Picture</label>
              <div className="profilePic">
                <img
                  className="avatar"
                  src="https://images.pexels.com/photos/3024627/pexels-photo-3024627.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <span className="change">Change</span>
              </div>
            </div>
            <div className="formItem">
              <label>Username</label>
              <input
                className="formInput"
                type="text"
                placeholder={state.user.userInfo.name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="formItem">
              <label>Email</label>
              <input
                className="formInput"
                type="text"
                placeholder={state.user.userInfo.email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="formItem">
              <label>Password</label>
              <input className="formInput" type="password" />
            </div>
            <button className="updateButton" onClick={handleUpdate}>
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
