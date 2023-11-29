import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import ComplaintForm from "../../components/Form/ComplaintForm";
import Profile from "../../components/Form/userProfileForm";
import axios from "axios";
import { toast } from "react-toastify";
import { CustomAlert } from "../../components/Alert";

const UserProfile = () => {
  const [tenantData, setTenantData] = useState([]);

  const tenantId = localStorage.getItem("tenantId");

  const getUsers = async () => {
    axios
      .get(`http://195.35.45.131:4000/user?id=${tenantId}`)
      .then((response) => {
        setTenantData(response.data.data);
      })
      .catch((e) => toast.error(e));
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <Dashboard data={<Profile data={tenantData} />} tenantData={tenantData} />
      <CustomAlert />
    </div>
  );
};

export default UserProfile;
