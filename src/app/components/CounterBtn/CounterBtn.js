import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "./style.css";

const CounterBtn = (props) => {
  const { state, setState, placeholder, setFieldValue, fieldName } = props;
  const handleIncr = () => {
    if (state === "") {
      setState(1);
    } else {
      setState((prevState) => {
        if (fieldName && setFieldValue) {
          setFieldValue(fieldName, prevState + 1);
        }
        return prevState + 1;
      });
    }
  };
  const handleDecr = () => {
    if (state === 1) {
      setState("");
    } else if (state > 0) {
      setState((prevState) => {
        if (fieldName && setFieldValue) {
          setFieldValue(fieldName, prevState - 1);
        }
        return prevState - 1;
      });
    }
  };
  return (
    <div className="appart_container">
      <input
        className="input rounded"
        type="text"
        value={state}
        placeholder={placeholder}
        readOnly
      />
      <button
        className="btn"
        type="button"
        onClick={handleDecr}
        disabled={props.disabled ? props.disabled : false}
      >
        <AiOutlineMinus />
      </button>
      <br />
      <button
        className="btn"
        type="button"
        onClick={handleIncr}
        disabled={props.disabled ? props.disabled : false}
      >
        <AiOutlinePlus />
      </button>
    </div>
  );
};

export default CounterBtn;
