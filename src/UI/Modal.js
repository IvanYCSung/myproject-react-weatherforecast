import { Fragment, useContext } from "react";
import ReactDom from "react-dom";
import Button from "./Button";
import DataAndStateContext from "../store/data-and-state-context";
import classes from "./Modal.module.css";

const Modal = (props) => {
  const ctx = useContext(DataAndStateContext);

  const Backdrop = (props) => {
    return (
      <div className={classes.backdrop} onClick={ctx.clearErrorState}></div>
    );
  };

  const Overlay = (props) => {
    return (
      <div className={classes.modal}>
        <p className={classes.message}>{props.children}</p>
        <Button className={classes.button} onClick={ctx.clearErrorState}>
          Close
        </Button>
      </div>
    );
  };

  const protalElement = document.getElementById("overlays");

  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop />, protalElement)}
      {ReactDom.createPortal(<Overlay>{props.error}</Overlay>, protalElement)}
    </Fragment>
  );
};

export default Modal;

// close modal handler on the button and back drop
