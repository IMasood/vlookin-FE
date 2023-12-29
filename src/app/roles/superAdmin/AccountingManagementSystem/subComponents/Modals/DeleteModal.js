import React from "react";
import Modal from "react-bootstrap/Modal";
import { CustomButton } from "../../../../../components/Button";
const DeleteModal = (props) => {
  const { show, onHide } = props;
  return (
    <div>
      <Modal
        show={show}
        onHide={onHide}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton />
        <Modal.Body>
          Are you sure you want to delete the Receipts ?
          <CustomButton
            className="col-md-6"
            // disabled={loginOrCrm === 0 ? true : false}
            // handleClick={handleClick}
            bgColor={"#4A0D37"}
            color={"#F8F8F8"}
            buttonName={"Yes"}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default DeleteModal;
