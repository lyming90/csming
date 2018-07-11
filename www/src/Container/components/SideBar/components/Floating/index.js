import React from "react";
import { ToastContainer, ToastStore } from 'react-toasts';
import "./style.css";

const thumbsUpIcon = <i className="far fa-thumbs-up fa-lg" style={{color: 'var(--warning)'}} />;
const facebookIcon = <i className="fab fa-facebook-square fa-lg" style={{color: '#3b5998'}} />;
const mediumIcon = <i className="fab fa-medium fa-lg" />;

const Floating = () => (
  <div className="floating">
    <div
      onClick={() =>
        ToastStore.success('Thanks buddy!', 1000, 'toast')
      }
    >
      {thumbsUpIcon}
      <ToastContainer store={ToastStore} />
    </div>
    <div
      onClick={() =>
        window.open("https://facebook.com/mingyuliu1916", "_blank")
      }
    >
      {facebookIcon}
    </div>
    <div onClick={() => window.open("https://medium.com/@mingyuliu_64884", "_blank")}>
      {mediumIcon}
    </div>
  </div>
);

export default Floating;
