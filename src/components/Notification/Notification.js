import React from "react";
import style from "./Notification.module.css";
import { CSSTransition } from "react-transition-group";
const Notification = ({ msg, error }) => {
  return (
    <>
      <CSSTransition
        in={error}
        appear={true}
        timeout={500}
        classNames={style}
        unmountOnExit
      >
        <div className={style.wrapper}>
          <p className={style.notif}>{msg}</p>
        </div>
      </CSSTransition>
    </>
  );
};

export default Notification;
