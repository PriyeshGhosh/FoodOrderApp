import { Fragment } from "react";
import classes from "./Module.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}/>;
};

const ModuleOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElements = document.getElementById("overlays");

const Module = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElements)}
      {ReactDOM.createPortal(
        <ModuleOverlay>{props.childern}</ModuleOverlay>,
        portalElements
      )}
    </Fragment>
  );
};

export default Module;
