import React from "react";
import Modal from "react-bootstrap/Modal";
import { CustomButton } from "../../../../../components/Button";
const AddAccountModal = (props) => {
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
        <Modal.Body className="p-3">
          <div>
            <div className="form-group pt-2">
              <label className="pb-1 fw-bold">Master Acc#</label>
              <input className="form-control" />
            </div>
            <div className="form-group pt-2">
              <label className="pb-1 fw-bold">Credit Code</label>
              <input className="form-control" />
            </div>
            <div className="form-group pt-2">
              <label className="pb-1 fw-bold">Credit Head</label>
              <input className="form-control" />
            </div>
            <div className="pt-3">
              <CustomButton
                className="col-md-6"
                bgColor={"#4A0D37"}
                color={"#F8F8F8"}
                buttonName={"Add"}
              />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddAccountModal;
