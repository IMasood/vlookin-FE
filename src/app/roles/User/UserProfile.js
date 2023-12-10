import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import ComplaintForm from "../../components/Form/ComplaintForm";
import Profile from "../../components/Form/userProfileForm";
import axios from "axios";
import { toast } from "react-toastify";
import { CustomAlert } from "../../components/Alert";
import { useMediaQuery } from "react-responsive";
import { getItem } from '../../utils/functions';
import { FaThList, FaWarehouse, FaBuilding } from 'react-icons/fa';
import { HiUserAdd } from 'react-icons/hi';
import { BiMessageError } from 'react-icons/bi';
import { MdOutlineDomainDisabled } from 'react-icons/md';
import { routePaths } from '../../routes/config';
import MobileHeader from '../../components/Header/MobileHeader';
import SideBar from "../../components/Layouts/SideBar";


const UserProfile = () => {
  const [tenantData, setTenantData] = useState([]);
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
      setOpen(true);
  };


  const items = [
      getItem('Tenant', '1', <FaWarehouse />,
          [getItem('Add Complaint', 'addcomplaint', <HiUserAdd />),
          getItem('List Complaint', 'complaintlist', <FaThList />)]),
      getItem('Receipts', '2', <MdOutlineDomainDisabled />,
      [getItem('List Receipts', 'receiptList', <BiMessageError />)]
      ),
  ];
  const isMobile = useMediaQuery({ query: '(max-width: 700px)' })

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
      <SideBar children={<Profile data={tenantData} showDrawer={showDrawer}/>} items={items} showDrawer={showDrawer} open={open} setOpen={setOpen}/>
      {/* <Dashboard data={<Profile data={tenantData} />} tenantData={tenantData} /> */}
      <CustomAlert />
    </div>
  );
};

export default UserProfile;
