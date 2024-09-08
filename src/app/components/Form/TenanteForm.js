import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Col, Input, Row, Form } from "antd";
import { CustomButton } from "../Button";
import "./style.css";
import { Header } from "../Header";
import OTPmodal from "../Modal/OTPmodal";
import { apiRoutes, routePaths } from "../../routes/config";
import axios from "axios";
import { toast } from "react-toastify";
import { CustomAlert } from "../Alert";
import BuildingDropDown from "../DropDown";
import { useNavigate } from "react-router";
import { useMediaQuery } from "react-responsive";
import MobileHeader from "../Header/MobileHeader";
import ReceiptModal from "../Modal/ReceiptModal";
import ApartmentsDropdown from "../DropDown/apartmentDropDown";
import { Cookies } from "react-cookie";
import { redColor, whiteColor } from "../../../assets/colors";
import { addTenantInitialValues } from "../../utils/schemas/addTenant/initialValues";
import { addTenantSchemas } from "../../utils/schemas/addTenant/addTenantSchemas";
import AddTenantService from "../../utils/services/addTenant/addTenant.service";

const TenantForm = ({ title, showDrawer, role }) => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });
  const [modalOpen, setModalOpen] = useState(false);
  const cookie = new Cookies();

  const [inputs, setInputs] = React.useState({
    name: "",
    email: "",
    buildingNo: "",
    flatNo: "",
    mobileNo: "",
    officeNo: "",
    nationality: "",
    joiningDate: "",
    creationDate: "",
    password: "",
  });

  const [receiptModal, setReceiptModal] = useState(false);
  const [selectedBuilding, setSelectedBuilding] = useState("");
  const [buildingSelected, setBuildingSelected] = useState(false);
  const [selectedApartment, setSelectedApartment] = useState("");
  const [tenantAccount, setTenantAccount] = useState("");
  const [tenantName, setTenantName] = useState("");
  const [showLoader, setShowLoader] = useState(false);

  //   const handleChange = (event) => {
  //     setInputs({ ...inputs, [event.target.name]: event.target.value });
  //   };

  const onCancel = () => {
    setModalOpen(false);
    setReceiptModal(false);
  };

  const handleSave = (event) => {
    event.preventDefault();
    if (
      inputs.name &&
      inputs.email &&
      selectedBuilding &&
      selectedApartment &&
      inputs.mobileNo &&
      inputs.nationality &&
      inputs.officeNo
    ) {
      createTenant(inputs);
    } else {
      toast.error("Complete Form");
    }
  };

  const createTenant = async (inputs) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let url = apiRoutes.postTenant;
    const createdBy = cookie.get("userId");
    const role = cookie.get("role");
    setShowLoader(true);
    try {
      await axios
        .post(
          url,
          {
            tenantName: inputs.name,
            email: inputs.email,
            buildingId: selectedBuilding,
            apartmentId: selectedApartment,
            contact: inputs.mobileNo,
            officeNo: inputs.officeNo,
            createdBy: createdBy,
            nationality: inputs.nationality,
            joiningDate: inputs.joiningDate,
            creationDate: inputs.creationDate,
            password: inputs.password,
          },
          config
        )
        .then((response) => {
          if (response?.data?.status == 200) {
            setShowLoader(false);
            setTenantAccount(response?.data?.data._id);
            setTenantName(response?.data?.data.tenantName);
            setModalOpen(true);
          }
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        });
    } catch (error) {
      toast.error(error);
    }
  };

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: addTenantInitialValues,
    validationSchema: addTenantSchemas,
    onSubmit: async (values) => {
      try {
        setShowLoader(true);
        let response = await AddTenantService.addTenant(values);
        if (response.data.status === 200) {
          setShowLoader(false);
          setTenantAccount(response?.data?.data._id);
          setTenantName(response?.data?.data.tenantName);
          setModalOpen(true);
        }
      } catch (error) {
        setShowLoader(false);
        toast.error(error?.response?.data?.message);
      }
    },
  });

  useEffect(() => {
    setFieldValue("buildingId", selectedBuilding);
  }, [selectedBuilding]);

  useEffect(() => {
    setFieldValue("apartmentId", selectedApartment);
  }, [selectedApartment]);

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
            title={"Add Tenant Details"}
            subtitle={"Welcome to tenant panel"}
            route={routePaths.Admin.login}
          />
        )}
        <div className="mb_form_heading">
          <h2>Add Tenant Details</h2>
          <p className="headerText">Welcome to tenant panel</p>
        </div>
      </div>
      <div className="body">
        <form>
          <Row>
            <Col md={10} sm={16}>
              <div className="pt-3">
                <label htmlFor="tenantName">Full Name</label>
                <Input
                  size="large"
                  placeholder="Please enter full name"
                  className="form_input"
                  name="tenantName"
                  value={values.tenantName}
                  onChange={handleChange}
                />
                {errors.tenantName && touched.tenantName && (
                  <p className="text-danger mb-0 ">{errors?.tenantName}</p>
                )}
              </div>
              <div className="pt-3">
                <label htmlFor="email">Email</label>
                <Input
                  size="large"
                  placeholder="Please enter email"
                  className="form_input"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && touched.email && (
                  <p className="text-danger mb-0 ">{errors?.email}</p>
                )}
              </div>
              <div className="pt-3">
                <label htmlFor="password">Password</label>
                <Input.Password
                  size="large"
                  placeholder="Please enter password"
                  className="form_input"
                  name="password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
                {errors.password && touched.password && (
                  <p className="text-danger mb-0 ">{errors?.password}</p>
                )}
              </div>
              <div className="pt-3">
                <label htmlFor="contact">Mobile Number</label>
                <Input
                  size="large"
                  placeholder="Please enter mobile number"
                  className="form_input"
                  name="contact"
                  value={values.contact}
                  onChange={handleChange}
                />
                {errors.contact && touched.contact && (
                  <p className="text-danger mb-0 ">{errors?.contact}</p>
                )}
              </div>
              <div className="pt-3">
                <label htmlFor="fullName">Nationality</label>
                <Input
                  size="large"
                  placeholder="Please enter nationality"
                  className="form_input"
                  name="nationality"
                  value={values.nationality}
                  onChange={handleChange}
                />
                {errors.nationality && touched.nationality && (
                  <p className="text-danger mb-0">{errors?.nationality}</p>
                )}
              </div>
              {/* <Form>
                <Form.Item
                  name="fullName"
                  rules={[{ required: true, message: "Please enter name" }]}
                >
                  <Input
                    size="large"
                    placeholder="Full name *"
                    className="form_input"
                    name="fullName"
                    value={inputs.name}
                    onChange={handleChange}
                  />
                </Form.Item>
                <Form.Item
                  name="email"
                  rules={[{ required: true, message: "Please enter email" }]}
                >
                  <Input
                    size="large"
                    placeholder="Email *"
                    className="form_input"
                    name="email"
                    type="email"
                    value={inputs.email}
                    onChange={handleChange}
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[{ required: true, message: "Please enter password" }]}
                >
                  <Input
                    size="large"
                    placeholder="Password *"
                    className="form_input"
                    name="password"
                    type="password"
                    value={inputs.password}
                    onChange={handleChange}
                  />
                </Form.Item>
                <Form.Item
                  name="mobileNo"
                  rules={[
                    {
                      required: true,
                      message: "Please enter mobile number of tenant",
                    },
                  ]}
                >
                  <Input
                    size="large"
                    placeholder="Mobile No *"
                    className="form_input"
                    name="mobileNo"
                    value={inputs.mobileNo}
                    onChange={handleChange}
                  />
                </Form.Item>
                <Form.Item
                  name="nationality"
                  rules={[
                    { required: true, message: "Please enter nationality" },
                  ]}
                >
                  <Input
                    size="large"
                    placeholder="Nationality *"
                    className="form_input"
                    name="nationality"
                    value={inputs.nationality}
                    onChange={handleChange}
                  />
                </Form.Item>
              </Form> */}
            </Col>
            <Col offset={isMobile ? 0 : 4} md={10} sm={16}>
              <label className="pb-3">Select a Building</label>
              <BuildingDropDown
                setSelectedBuilding={setSelectedBuilding}
                isBuildingSelected={setBuildingSelected}
              />
              {errors.buildingId && touched.buildingId && (
                <p className="text-danger mb-0 pt-3">{errors?.buildingId}</p>
              )}
              {buildingSelected && (
                <>
                  <label className="py-3">Select an Apartment</label>
                  <ApartmentsDropdown
                    setSelectedApartment={setSelectedApartment}
                    buildingId={selectedBuilding}
                  />
                  {errors.apartment && touched.apartment && (
                    <p className="text-danger mb-0 pt-3">{errors?.apartment}</p>
                  )}
                </>
              )}
              <div className="pt-3">
                <label className="required-field">Office Number</label>
                <Input
                  size="large"
                  style={{ borderColor: "gray" }}
                  placeholder="Please enter office number"
                  className="form_input"
                  name="officeNo"
                  value={values.officeNo}
                  onChange={handleChange}
                />
                {errors.officeNo && touched.officeNo && (
                  <p className="text-danger mb-0">{errors?.officeNo}</p>
                )}
              </div>
              <div className="pt-3">
                <label htmlFor="creationDate" className="required-field pb-3">
                  Creation Date
                </label>
                <Input
                  size="large"
                  placeholder="Creation Date"
                  className="visitor_form_input"
                  name="creationDate"
                  type="date"
                  value={values.creationDate}
                  onChange={handleChange}
                />
                {errors.creationDate && touched.creationDate && (
                  <p className="text-danger mb-0 pt-3">
                    {errors?.creationDate}
                  </p>
                )}
              </div>
              <div className="pt-3">
                <label htmlFor="joiningDate" className="required-field pb-3">
                  Joining Date
                </label>
                <Input
                  size="large"
                  placeholder="Joining Date"
                  className="visitor_form_input"
                  name="joiningDate"
                  type="date"
                  value={values.joiningDate}
                  onChange={handleChange}
                />
                {errors.joiningDate && touched.joiningDate && (
                  <p className="text-danger mb-0 pt-3">{errors?.joiningDate}</p>
                )}
              </div>
              {/* <Form>
                <Form.Item
                  name="officeNo"
                  rules={[
                    { required: true, message: "Please enter office No" },
                  ]}
                >
                  <Input
                    size="large"
                    style={{ borderColor: "gray" }}
                    placeholder="Office No *"
                    className="form_input"
                    name="officeNo"
                    value={inputs.officeNo}
                    onChange={handleChange}
                  />
                </Form.Item>
                <Form.Item
                  name="creationDate"
                  label="Creation Date"
                  rules={[
                    { required: true, message: "Please enter creation date" },
                  ]}
                >
                  <Input
                    placeholder="Creation Date"
                    className="visitor_form_input"
                    name="creationDate"
                    type="date"
                    value={inputs.creationDate}
                    onChange={handleChange}
                  />
                </Form.Item>
                <Form.Item
                  name="joiningDate"
                  label="Joining Date"
                  rules={[
                    { required: true, message: "Please enter joining date" },
                  ]}
                >
                  <Input
                    placeholder="Joining Date"
                    className="visitor_form_input"
                    name="joiningDate"
                    type="date"
                    value={inputs.joiningDate}
                    onChange={handleChange}
                  />
                </Form.Item>
              </Form> */}
            </Col>
          </Row>
          <CustomButton
            // handleClick={handleSave}
            handleClick={() => {
              handleSubmit();
              console.log(errors);
              console.log(values);
            }}
            buttonName={"Save"}
            bgColor={redColor}
            color={whiteColor}
            loading={showLoader}
            disabled={showLoader}
          />
        </form>
      </div>
      {/* for receipt modal testing */}
      <ReceiptModal
        route={routePaths.Visitor.listVisitor}
        open={
          receiptModal
          //   true
        }
        setOpen={setReceiptModal}
        onCancel={onCancel}
        tenantAccount={tenantAccount}
        tenantName={tenantName}
      />
      <OTPmodal
        open={modalOpen}
        onCancel={onCancel}
        setReceiptModal={setReceiptModal}
        tenantAccount={tenantAccount}
        setModalOpen={setModalOpen}
      />
      <CustomAlert />
    </>
  );
};

export default TenantForm;
