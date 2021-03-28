import React from "react";
import style from "./Notification.module.css";

const Notification = () => {
  return (
    <>
      <div className={style.wrapper}>
        <p className={style.notif}>Contact already exist</p>
      </div>
    </>
  );
};

export default Notification;
