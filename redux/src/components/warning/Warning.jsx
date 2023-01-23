import React from "react";
import { useSelector } from "react-redux";
import "./warning.css";

export default function Warning() {
  const state = useSelector((state) => state);
  return (
    <div className="warning">
      Deleting account cannot be undone <b>{state.user.userInfo.name}</b>! You
      should confirm your password to delete your account.
    </div>
  );
}
