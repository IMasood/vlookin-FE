import React, { useState, useEffect } from "react";
import { Col, Input, Row } from "antd";
import { CustomButton } from "../Button";
import "./style.css";
import { Header } from "../Header";
import { routePaths } from "../../routes/config";
import CounterBtn from "../CounterBtn/CounterBtn";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { CustomAlert } from "../Alert";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
import MobileHeader from "../Header/MobileHeader";

const EditBuildingForm = ({ showDrawer }) => {
  const { id } = useParams();
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    bed: "",
    bathroom: "",
    pantry: "",
    living: "",
    dining: "",
    laundry: "",
    ownerName: "",
    buildingName: "",
    location: "",
  });

  const [floor, setFloor] = useState("");
  const [parkingFloor, setParkingFloor] = useState("");
  const [showLoader, setShowLoader] = useState(false)


  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    try {
      editBuilding(inputs);
      navigate(routePaths.Admin.listBuilding);
    } catch (error) {}
  };

  const editBuilding = async (inputs) => {
    let url = `http://195.35.45.131:4000/building?id=${id}`;
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Methods", "PATCH");

    const data = {
      buildingName: inputs.buildingName,
      floorCount: floor,
      parkingCount: parkingFloor,
      watchman: inputs.watchMan,
      landmark: inputs.location,
      fullName: inputs.ownerName,
    };

    const requestOptions = {
      method: "PATCH",
      headers: headers,
      body: JSON.stringify(data),
    };

    try {
      const res = await fetch(url, requestOptions);
      if (res.status === 200) {
        setShowLoader(true);
        toast.success("Building Edited Successfully");
        navigate(routePaths.Admin.listBuilding);
      } else {
        setShowLoader(false);
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Network error");
    }
  };

  const getBuildings = () => {
    axios
      .get(`http://195.35.45.131:4000/building?id=${id}`)
      .then((res) => {
        setInputs({
          buildingName: res.data.data.buildingName,
          watchMan: res.data.data.watchman,
          location: res.data.data.landmark,
          ownerName: res.data.data.fullName,
        });
        setFloor(res.data.data.floorCount);
        setParkingFloor(res.data.data.parkingCount);
      })
      .catch((e) => toast.error(e));
  };

  useEffect(() => {
    getBuildings();
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
            title={"Edit Building Details"}
            subtitle={"welcome to admin panel"}
            route={routePaths.Admin.login}
          />
        )}
        <div className="mb_form_heading">
          <h2>Edit Building Details</h2>
          <p className="headerText">welcome to admin panel</p>
        </div>
      </div>
      <div className="body">
        <Row>
          <Col md={10} sm={16}>
            <div style={{ marginTop: "15px" }}>
              <Input
                placeholder="Owner name"
                className="form_input"
                name="ownerName"
                value={inputs.ownerName}
                onChange={handleChange}
              />
              <p className="form_label">No of floors</p>
              <CounterBtn
                placeholder="Count of floor"
                state={floor}
                setState={setFloor}
              />
              <Input
                placeholder="Watchman"
                className="form_input"
                name="watchMan"
                value={inputs.watchMan}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col soffset={isMobile ? 0 : 4} md={10} sm={16}>
            <div style={{ marginTop: "15px", marginLeft: "22px" }}>
              <Input
                placeholder="Building name"
                className="form_input"
                name="buildingName"
                value={inputs.buildingName}
                onChange={handleChange}
              />
              <p className="form_label">No of parking floors</p>
              <CounterBtn
                placeholder="Count of floor"
                state={parkingFloor}
                setState={setParkingFloor}
              />
              <Input
                placeholder="Popular location"
                className="form_input"
                name="location"
                value={inputs.location}
                onChange={handleChange}
              />
            </div>
          </Col>
        </Row>
        <div className="addform_btn">
          <CustomButton
            handleClick={handleSave}
            buttonName={"Save"}
            bgColor={"#4A0D37"}
            color={"#F8F8F8"}
            loading={showLoader} disabled={showLoader}
          />
          <CustomAlert />
        </div>
      </div>
    </>
  );
};

export default EditBuildingForm;
