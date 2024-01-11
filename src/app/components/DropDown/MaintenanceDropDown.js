import React, { useState, useEffect } from "react";
import { Select } from "antd";
import { apiRoutes } from "../../routes/config";
import axios from "axios";
import "./style.css";

const { Option } = Select;

const MaintenanceDropDown = ({
  value,
  // handleChange,
  placeholder,
  setSelectedMaintenance ,
  className,
  buildingId

}) => {

  const [maintenance, setMaintenance] = useState([]);

  useEffect(() => {
    // Fetch building data from the API and update state
    fetchRealEstate(buildingId);
  }, [buildingId]);

  const fetchRealEstate = async (buildingId) => {
    try {
      axios.get(`${apiRoutes.getUsers}buildingId=${buildingId}&&role=maintenance`).then((response) => {
        const data = response.data.data;
        setMaintenance(data);
    });
    } catch (error) {
      console.error("Error fetching real estates:", error);
    }
  };

  const handleChange = (value) => {
    console.log(value);
    setSelectedMaintenance (value);
  };

  return (
    <Select
      placeholder={placeholder ? placeholder : "Choose Maintenance"}
      onChange={handleChange}
      className={className ? className : "building_selector"}
    >
      {maintenance?.map((maintenance) => (
        <Option 
          key={maintenance._id} 
          value={maintenance._id} >
          {maintenance.userName}
        </Option>
      ))}
    </Select>
  );
};

export default MaintenanceDropDown;
