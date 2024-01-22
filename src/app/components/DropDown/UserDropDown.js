import React, { useState, useEffect } from "react";
import { Select } from "antd";
import { apiRoutes } from "../../routes/config";
import axios from "axios";
import "./style.css";

const { Option } = Select;

const UserDropDown = ({
  value,
  // handleChange,
  placeholder,
  setSelectedUser ,
  className,
  buildingId,
  role

}) => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch building data from the API and update state
    fetchUsers(buildingId);
  }, [buildingId]);

  const fetchUsers = async (buildingId) => {
    try {
      const apiEndpoint = role == 'tenant' ? `${apiRoutes.getTenant}buildingId=${buildingId}` : `${apiRoutes.getUsers}realEstate=${buildingId}&role=admin`;
      axios.get(apiEndpoint).then((response) => {
        const data = response.data.data;
        if(data.length > 0){
          setUsers(data);
        }else{
          setUsers([])
        }
    });
    } catch (error) {
      console.error("Error fetching real estates:", error);
    }
  };

  const handleChange = (value) => {
    setSelectedUser (value);
  };

  return (
    <Select
      placeholder={placeholder ? placeholder : "Choose User"}
      onChange={handleChange}
      className={className ? className : "building_selector"}
    >
      {users?.map((user) => (
        <Option 
          key={user._id} 
          value={user._id} >
          {user.tenantName ? user.tenantName : user.userName}
        </Option>
      ))}
    </Select>
  );
};

export default UserDropDown;
