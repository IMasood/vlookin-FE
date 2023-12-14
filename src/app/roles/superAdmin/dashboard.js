import React, { useState } from "react";
import SideBar from "../../components/Layouts/SideBar";
import { getItem } from "../../utils/functions";
import { FaThList, FaWarehouse, FaBuilding } from "react-icons/fa";
import { HiUserAdd } from "react-icons/hi";
import { MdApartment } from "react-icons/md";
import { RiWalkFill } from "react-icons/ri";
import { BsBuildingFillAdd } from "react-icons/bs";
import { AddSuperAdminUser } from "./AddUser";
import { superAdminSidebar } from "../../utils/superAdminSideBar";
import { Cookies } from "react-cookie";

const SuperAdminDashboard = ({ data }) => {
  const cookies = new Cookies();
  const role = cookies.get("role"); 
  const userName = cookies.get('name');
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  return (
    <div>
      <SideBar
        children={<AddSuperAdminUser showDrawer={showDrawer} />}
        items={superAdminSidebar}
        role={role ?? '' }
        userName={userName ?? ""}
        showDrawer={showDrawer}
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
};

export default SuperAdminDashboard;
