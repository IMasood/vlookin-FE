import React, { useState, useEffect } from "react";
import { Select } from "antd";
import { apiRoutes } from "../../routes/config";
import axios from "axios";
import "./style.css";
import { toast } from "react-toastify";
import { CustomAlert } from "../Alert";

const { Option } = Select;

const BuildingDropDown = ({
  value,
  // handleChange,
  placeholder,
  disabled,
  setSelectedBuilding,
  realEstateId,
  isBuildingSelected
}) => {
  const [buildingData, setBuildingData] = useState([]);
  const [selectedBuildingData, setSelectedBuildingData] = useState([])
  const [disableBuilding, SetDisableBuilding] = useState(false);

  useEffect(() => {
    // Fetch building data from the API and update state
    fetchBuildingData();
  }, []);

  const fetchBuildingData = async () => {
    try {
      // if(realEstateId){
      //   const url = `http://195.35.45.131:4000/building?realEstateId=${realEstateId}`
      //   // console.log(url, realEstateId, 'testing urrlll')
      //   axios.get(url).then((response) => {
      //     const data = response.data.data;
      //     console.log(data);
      //     setSelectedBuildingData(data);
      //   });
  
      // }else{
        axios.get(apiRoutes.getBuilding).then((response) => {
          const data = response.data.data;
          if(data.length == 0){
            toast.error('Create building first')
            SetDisableBuilding(true)
          }
          if(data.length > 0){
              setBuildingData(data);        
            }  
        });
      // }

    } catch (error) {
      console.error("Error fetching building data:", error);
    }
  };

  const handleChange = (value) => {
    console.log(value);
    setSelectedBuilding(value);
    isBuildingSelected(true)
  };

  return (
    <div>
    <Select
      placeholder={placeholder ? placeholder : "Select a building"}
      onChange={handleChange}
      // value={value}
      className="building_selector"
      disabled={disabled ? disabled : disableBuilding}
    >
      {buildingData?.map((building) => (
        <Option key={building._id} value={building._id}>
          {building.buildingName} - {building.buildingCode}
        </Option>
      ))}
    </Select>
    <CustomAlert/>
    </div>
  );
};

export default BuildingDropDown;
