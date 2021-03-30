import React from "react";
import style from "./Notification.module.css";

const Notification = ({msg}) => {
  return (
    <>
      <div className={style.wrapper}>
        <p className={style.notif}>{msg}</p>
      </div>
    </>
  );
};

export default Notification;
