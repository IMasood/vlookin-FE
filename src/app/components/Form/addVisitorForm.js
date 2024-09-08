import React, { useState } from "react";
import { Col, Input, Row, Form, Checkbox } from "antd";
import { CustomButton } from "../Button";
import "./style.css";
import { Header } from "../Header";
import { apiRoutes, routePaths } from "../../routes/config";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import CounterBtn from "../CounterBtn/CounterBtn";
import { SaveModal } from "../Modal/SaveModal";
import { CustomAlert } from "../Alert";
import BuildingDropDown from "../DropDown";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useMediaQuery } from "react-responsive";
import MobileHeader from "../Header/MobileHeader";
import ApartmentsDropdown from "../DropDown/apartmentDropDown";
import { redColor, whiteColor } from "../../../assets/colors";
import { AddVisitorInitialValues } from "../../utils/schemas/addVisitor/initialValues";
import { AddVisitorSchemas } from "../../utils/schemas/addVisitor/addVisitorSchema";
import { useFormik } from "formik";
import AddVisitorService from "../../utils/services/addVisitor/addVisitor.service";

const AddVisitorForm = ({ title, showDrawer }) => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    date: "",
    mobileNo: "",
    comment: "",
    buildingName: "",
    flatNo: "",
    other: "",
  });
  const [maxRooms, setMaxRooms] = useState(0);
  const [open, setOpen] = useState(false);
  const [selectedBuilding, setSelectedBuilding] = useState("");
  const [studioFlat, setStudioFlat] = useState(false);
  const [buildingSelected, setBuildingSelected] = useState(false);
  const [selectedApartment, setSelectedApartment] = useState("");
  const [showLoader, setShowLoader] = useState(false);

  // const handleChange = (event) => {
  //   setInputs({ ...inputs, [event.target.name]: event.target.value });
  // };

  const handleFlatChange = (e) => {
    if (e.target.checked) {
      setStudioFlat(true);
    } else {
      setStudioFlat(false);
    }
  };

  // const handleSave = (event) => {
  //   event.preventDefault();
  //   if (
  //     inputs.name &&
  //     inputs.email &&
  //     selectedBuilding &&
  //     inputs.mobileNo &&
  //     inputs.comment
  //   ) {
  //     postVisit(inputs);
  //   } else {
  //     toast.error("Complete Form");
  //   }
  // };

  // const postVisit = async (inputs) => {
  //   const config = {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };
  //   let url = apiRoutes.createVisitor;
  //   try {
  //     setShowLoader(true);
  //     await axios
  //       .post(
  //         url,
  //         {
  //           visitorName: inputs.name,
  //           email: inputs.email,
  //           visitDate: inputs.date,
  //           buildingName: selectedBuilding,
  //           flatNo: inputs.selectedApartment,
  //           contact: inputs.mobileNo,
  //           maxRooms: inputs.maxRooms,
  //           comments: inputs.comment,
  //         },
  //         config
  //       )
  //       .then((response) => {
  //         if (response.data.status == 200) {
  //           setShowLoader(false);
  //           toast.success("Visitor Created Successfully");
  //           navigate(routePaths.Visitor.listVisitor);
  //         } else {
  //           setShowLoader(false);
  //           toast.error("Something went wrong");
  //         }
  //       });
  //   } catch (error) {
  //     toast.error(error);
  //   }
  // };

  const {
    errors,
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    touched,
  } = useFormik({
    initialValues: AddVisitorInitialValues,
    validationSchema: AddVisitorSchemas,
    onSubmit: async (values) => {
      try {
        const response = AddVisitorService.addVisitor(values);
        if (response.status === 200) {
          setShowLoader(false);
          toast.success("Visitor Created Successfully");
          navigate(routePaths.Visitor.listVisitor);
        } else {
          setShowLoader(false);
          toast.error("Something went wrong");
        }
      } catch (error) {
        toast.error(error);
      }
    },
  });
  return (
    <>
      <div>
        {isMobile ? (
          <MobileHeader
            route={routePaths.Visitor.login}
            showDrawer={showDrawer}
          />
        ) : (
          <Header
            title={"Add Visitor"}
            subtitle={"Welcome to visitor panel"}
            route={routePaths.Visitor.login}
          />
        )}
        <div className="mb_form_heading">
          <h2>Add Visitor</h2>
          <p className="headerText">Welcome to visitor panel</p>
        </div>
      </div>
      <div className="visitor-body">
        <form onSubmit={handleSubmit}>
          <Row>
            <Col
              // span={10}
              sm={16}
              md={10}
            >
              <div>
                <label>Full Name</label>
                <Input
                  placeholder="Please enter full name"
                  className="visitor_form_input mt-3"
                  name="name"
                  size="large"
                  value={values.vistorName}
                  onChange={handleChange}
                />
              </div>
              {/* <Form.Item
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please enter your name",
                  },
                ]}
              >
                <Input
                  placeholder="Full name"
                  className="visitor_form_input"
                  name="name"
                  size="large"
                  value={inputs.name}
                  onChange={handleChange}
                />
              </Form.Item> */}
              <div className="pt-3">
                <label>Mobile number</label>
                <Input
                  placeholder="Please enter mobile number"
                  className="visitor_form_input mt-3"
                  name="mobileNo"
                  size="large"
                  value={values.contact}
                  onChange={handleChange}
                />
              </div>
              {/* <Form.Item
                name="mobileNo"
                rules={[
                  {
                    required: true,
                    message: "Please enter your mobile Number",
                  },
                ]}
              >
                <Input
                  placeholder="Mobile No."
                  className="visitor_form_input"
                  name="mobileNo"
                  size="large"
                  value={inputs.mobileNo}
                  onChange={handleChange}
                />
              </Form.Item> */}
              <div>
                <label className="pt-3">Required From</label>
                <Input
                  placeholder="Visitng Date"
                  className="visitor_form_input mt-3"
                  name="date"
                  type="date"
                  size="large"
                  value={values.visitDate}
                  onChange={handleChange}
                />
              </div>
              {/* <Form.Item name="date">
                <label>Required From</label>
                <Input
                  placeholder="Visitng Date"
                  className="visitor_form_input"
                  name="date"
                  type="date"
                  size="large"
                  value={inputs.date}
                  onChange={handleChange}
                />
              </Form.Item> */}
              <div className="pt-3">
                <label>Studio Flat</label>
                <Checkbox
                  onChange={handleFlatChange}
                  value={values.studioFlat}
                  style={{ color: "#ffffff", marginLeft: "12px" }}
                ></Checkbox>
              </div>
              {/* <Form.Item
                label="Studio Flat"
                name="studioFlat"
                valuePropName="checked"
              >
                <Checkbox
                  onChange={handleFlatChange}
                  value={studioFlat}
                  style={{ color: "#ffffff", marginLeft: "12px" }}
                ></Checkbox>
              </Form.Item> */}
              <div className="pt-3">
                <label>Flat Type</label>
                <CounterBtn
                  name="maxRooms"
                  placeholder="Bed Rooms"
                  state={maxRooms}
                  setState={setMaxRooms}
                  fieldName={"maxRooms"}
                  setFieldValue={setFieldValue}
                  disabled={studioFlat ? true : false}
                />
                {console.log(values)}
                <div>
                  <label>Other Information</label>
                  <Input
                    placeholder="Please enter information if required"
                    className="visitor_form_input mt-3"
                    name="other"
                    size="large"
                    value={inputs.other}
                    onChange={handleChange}
                  />
                </div>
              </div>
              {/* <Form.Item>
                <label>Flat Type</label>
                <CounterBtn
                  placeholder="Bed Rooms"
                  state={maxRooms}
                  setState={setMaxRooms}
                  disabled={studioFlat ? true : false}
                />
                <Input
                  placeholder="Other"
                  className="visitor_form_input"
                  name="other"
                  value={inputs.other}
                  onChange={handleChange}
                />
              </Form.Item> */}
            </Col>
            <Col
              // span={10}
              offset={isMobile ? 0 : 4}
              md={10}
              sm={16}
            >
              <div>
                <label>Email</label>
                <Input
                  placeholder="Email"
                  className="visitor_form_input mt-3"
                  name="email"
                  type="email"
                  size="large"
                  value={inputs.email}
                  onChange={handleChange}
                />
              </div>
              {/* <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please enter Email",
                  },
                ]}
              >
                <Input
                  placeholder="Email"
                  className="visitor_form_input"
                  name="email"
                  type="email"
                  size="large"
                  value={inputs.email}
                  onChange={handleChange}
                />
              </Form.Item> */}
              <div className="pt-3">
                <label className="pb-3">Building Name</label>
                <BuildingDropDown
                  setSelectedBuilding={setSelectedBuilding}
                  isBuildingSelected={setBuildingSelected}
                />
              </div>
              {/* <Form.Item>
                <label>Building Name</label>
                <BuildingDropDown
                  setSelectedBuilding={setSelectedBuilding}
                  isBuildingSelected={setBuildingSelected}
                />
              </Form.Item> */}
              {buildingSelected && (
                <ApartmentsDropdown
                  setSelectedApartment={setSelectedApartment}
                  buildingId={selectedBuilding}
                />
              )}
              {/* <Form.Item
                                name='flatNo'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter Flat Number',
                                    }
                                ]}
                            >
                                <Input
                                    placeholder="Flat Number"
                                    className="visitor_form_input"
                                    name='flatNo'
                                    value={inputs.flatNo}
                                    onChange={handleChange}
                                />
                            </Form.Item> */}
              <div className="pt-3">
                <label className="pb-3">Comments</label>
                <TextArea
                  placeholder="Please enter comments if any"
                  className="visitor_form_input"
                  name="comment"
                  size="large"
                  value={inputs.comment}
                  onChange={handleChange}
                />
              </div>
              {/* <Form.Item>
               
                <TextArea
                  placeholder="Comments"
                  className="visitor_form_input"
                  name="comment"
                  size="large"
                  value={inputs.comment}
                  onChange={handleChange}
                />
              </Form.Item> */}
            </Col>
          </Row>
          <div>
            <CustomButton
              handleClick={() => {
                handleSubmit();
                console.log(errors);
              }}
              buttonName={"Save"}
              bgColor={redColor}
              color={whiteColor}
              loading={showLoader}
              disabled={showLoader}
            />
            <SaveModal
              route={routePaths.Visitor.listVisitor}
              open={open}
              setOpen={setOpen}
            />
            <CustomAlert />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddVisitorForm;
