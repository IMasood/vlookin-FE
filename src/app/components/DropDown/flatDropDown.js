import React, { useState, useEffect } from "react";
import { Select } from "antd";
import { apiRoutes } from "../../routes/config";
import axios from "axios";
import "./style.css";

const { Option } = Select;

const ApartmentsDropdown = ({
  value,
  // handleChange,
  placeholder,
  disabled,
  setSelectedBuilding,
}) => {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    // Fetch building data from the API and update state
    fetchBuildingData();
  }, []);

  const fetchBuildingData = async () => {
    try {
      axios.get(apiRoutes.getApartment).then((response) => {
        const data = response.data.data;
        setApartments(data);
      });
    } catch (error) {
      console.error("Error fetching building data:", error);
    }
  };

  const handleChange = (value) => {
    console.log(value);
    setSelectedBuilding(value);
  };

  return (
    <Select
      placeholder={placeholder ? placeholder : "Select an Apartment"}
      onChange={handleChange}
      // value={value}
      className="building_selector"
      disabled={disabled && disabled}
    >
      {apartments?.map((building) => (
        <Option key={building._id} value={building._id}>
          {building.buildingName} - {building.buildingCode}
        </Option>
      ))}
    </Select>
  );
};

export default ApartmentsDropdown;
