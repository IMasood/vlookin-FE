import React, { useState, useEffect } from "react";
import { Col, Form, Input, Radio, Row } from "antd";
import { CustomButton } from "../Button";
import "./style.css";
import { Header } from "../Header";
import { routePaths } from "../../routes/config";
import CounterBtn from "../CounterBtn/CounterBtn";
import { useMediaQuery } from "react-responsive";
import MobileHeader from "../Header/MobileHeader";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import { redColor, whiteColor } from "../../../assets/colors";

const EditAppartmentForm = ({ showDrawer }) => {
  const { id } = useParams();
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });
  const navigate = useNavigate();
  const { TextArea } = Input;
  const [inputs, setInputs] = React.useState({
    floorNo: "",
    apartmentNo: "",
    apartmentType: "",
    furnished: "",
    rent: "",
    area: "",
    comments: "",
    buildingId:"",
    flatNo:""
  });
  const [bed, setBed] = useState("");
  const [pantry, setPantry] = useState("");
  const [laundry, setLaundry] = useState("");
  const [bathroom, setBathroom] = useState("");
  const [dining, setDining] = useState("");
  const [living, setLiving] = useState("");
  const [balcony, setBalcony] = useState(false);
  const [showLoader, setShowLoader] = useState(false)

  const handleRadioChange = (e) => {
    setInputs({ furnished: e.target.value });
  };

  const handleBalcony = (e) => {
    setBalcony(e.target.value);
  };

  const handleApartment = (e) => {
    setInputs({ apartmentType: e.target.value });
  };

  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };


  const handleSave = (e) => {
    e.preventDefault();
    try {
      editApartments(inputs);
      navigate(routePaths.Admin.listBuilding);
    } catch (error) {}
  };

  const editApartments = async (inputs) => {
    let url = `http://195.35.45.131:4000/apartment?id=${id}`;
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Methods", "PATCH");
    const data = {
      "buildingId" : inputs.buildingId,
      "apartmentType":inputs.apartmentType,
      "area":inputs.area,
      "rent":inputs.rent,
      "furnished":inputs.furnished,
      "isStudio": false,
      "balcony":balcony,
      "rooms":{
        "bedRoom": bed,
        "dining": dining,
        "laundry": laundry,
        "bath": bathroom
    },      
    "floorNo":inputs.floorNo,
    "comments":inputs.comments,
    "flatNo":inputs.flatNo,
    };

    const requestOptions = {
      method: "PATCH",
      headers: headers,
      body: JSON.stringify(data),
    };

    try {
      const res = await fetch(url, requestOptions);
      if (res.status === 200) {
        setShowLoader(true)
        toast.success("Building Edited Successfully");
        navigate(routePaths.Admin.listAppartment);
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      setShowLoader(false)
      toast.error(error);
    }
  };

  const getApartments = () => {
    axios
      .get(`http://195.35.45.131:4000/apartment?id=${id}`)
      .then((res) => {
        console.log(res, 'ressssssssssssssss')
        let data = res.data.data;
        setInputs({
          apartmentType: data.apartmentType,
          area: data.area,
          rent: data.rent,
          furnished: data.furnished,
          comments: data.comments,
          buildingId: data.buildingId._id,
          flatNo: data.flatNo,
          floorNo: data.floorNo,
        });
        // setBalcony(data.balcony);
        // setBed(data.rooms.bed)
        // setPantry(data.rooms.pantry)
        // setLaundry(data.rooms.laundry)
        // setBathroom(data.rooms.bathroom)
        // setDining(data.rooms.dining)
        // setLiving (data.rooms.living)
        })
      .catch((e) => toast.error(e));
  };

  useEffect(() => {
    getApartments();
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
            title={"Add Appartment Details"}
            subtitle={"welcome to admin panel"}
            route={routePaths.Admin.login}
          />
        )}
        <div className="mb_form_heading">
          <h2>Add Appartment Details</h2>
          <p className="headerText">welcome to admin panel</p>
        </div>
      </div>
      <div className="body">
        <Row>
          <Col md={10} sm={16}>
            <div style={{ marginTop: "15px" }}>
              <p className="form_label">Appartment Type</p>
              <Form.Item
                name="radio-button"
                className="form_radio_inputs"
                rules={[
                  {
                    required: true,
                    message: "Please pick an item!",
                  },
                ]}
              >
                <Radio.Group
                  defaultValue="Residential"
                  buttonStyle="solid"
                ></Radio.Group>
                <Radio.Group onChange={handleApartment}>
                  <Radio.Button className="radio_btn" value="Residential">
                    Residential
                  </Radio.Button>
                  <Radio.Button className="radio_btn" value="Commercial">
                    Commercial
                  </Radio.Button>
                </Radio.Group>
              </Form.Item>
            </div>
            <div className="btn_grp_container">
              <p className="form_label">Number of Rooms</p>
              <div className="appart_form_counter_group1">
                <div className="appart_form_counter_group">
                  <p className="form_label">Bedroom</p>
                  <CounterBtn placeholder="Bed" state={bed} setState={setBed} />
                </div>
                <div className="appart_form_counter_group">
                  <p className="form_label">Living</p>
                  <CounterBtn
                    placeholder="Living"
                    state={living}
                    setState={setLiving}
                  />
                </div>
              </div>
              <div className="appart_form_counter_group1">
                <div className="appart_form_counter_group">
                  <p className="form_label">Pantry</p>
                  <CounterBtn
                    placeholder="Pantry"
                    state={pantry}
                    setState={setPantry}
                  />
                </div>
                <div className="appart_form_counter_group">
                  <p className="form_label">Laundary</p>
                  <CounterBtn
                    placeholder="Laundry"
                    state={laundry}
                    setState={setLaundry}
                  />
                </div>
              </div>
              <div className="appart_form_counter_group1">
                <div className="appart_form_counter_group">
                  <p className="form_label">Dining</p>
                  <CounterBtn
                    placeholder="Dining"
                    state={dining}
                    setState={setDining}
                  />
                </div>
                <div className="appart_form_counter_group">
                  <p className="form_label">Bathroom</p>
                  <CounterBtn
                    placeholder="Bathroom"
                    state={bathroom}
                    setState={setBathroom}
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col offset={isMobile ? 0 : 4} md={10} sm={18}>
            <Input
              placeholder="Area"
              className="apartment_form_input"
              name="area"
              value={inputs.area}
              onChange={handleChange}
            />
            <div style={{ marginTop: "15px" }}>
              <p className="form_label">Furnished</p>
              <Form.Item
                name="radio-button"
                className="form_radio_inputs"
                rules={[
                  {
                    required: true,
                    message: "Please pick an item!",
                  },
                ]}
              >
                <Radio.Group buttonStyle="solid"></Radio.Group>
                <Radio.Group onChange={handleRadioChange}>
                  <Radio.Button className="radio_btn" value="Semi-Furnished">
                    Semi-Furnished
                  </Radio.Button>
                  <Radio.Button className="radio_btn" value="Not Furnished">
                    Not Furnished
                  </Radio.Button>
                  <Radio.Button className="radio_btn" value="Fully-Furnished">
                    Fully-Furnished
                  </Radio.Button>
                </Radio.Group>
              </Form.Item>
            </div>
            <div style={{ marginTop: "15px" }}>
              <p className="form_label">Balcony</p>
              <Form.Item
                name="radio-button"
                className="form_radio_inputs"
                rules={[
                  {
                    required: true,
                    message: "Please pick an item!",
                  },
                ]}
              >
                <Radio.Group
                  defaultValue="Yes"
                  buttonStyle="solid"
                ></Radio.Group>
                <Radio.Group onChange={handleBalcony} defaultValue="true">
                  <Radio.Button className="radio_btn" value="true">
                    Yes
                  </Radio.Button>
                  <Radio.Button className="radio_btn" value="false">
                    No
                  </Radio.Button>
                </Radio.Group>
              </Form.Item>
            </div>
            <Input
              placeholder="Rent"
              className="apartment_form_input"
              name="rent"
              value={inputs.rent}
              onChange={handleChange}
            />
            <br /> <br />
            <div>
              <TextArea
                rows={4}
                placeholder="Comment"
                name="comments"
                value={inputs.comments}
                onChange={handleChange}
                className="apartment_form_input"
              />
            </div>
          </Col>
        </Row>
        <br />
        <div>
          <CustomButton
            handleClick={handleSave}
            buttonName={"Save"}
            bgColor={redColor} color={whiteColor}
            loading={showLoader} disabled={showLoader}
          />
          {/* <ApartmentModal open={open} onCancel = {onCancel} selectedBuilding={selectedBuilding} 
                        handleBuildingChange={handleBuildingChange} handleChange = {handleChange}
                        handleSave = {addApartment} data = {inputs}
                        /> */}
        </div>
      </div>
    </>
  );
};

export default EditAppartmentForm;
