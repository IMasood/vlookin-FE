import React, { useState } from "react";
import SideBar from "../../components/Layouts/SideBar";
import { AddSuperAdminUser } from "./AddUser";
import { superAdminSidebar } from "../../utils/superAdminSideBar";
import { Cookies } from "react-cookie";
import MobileHeader from "../../components/Header/MobileHeader";
import { Header } from "../../components/Header";
import { useMediaQuery } from "react-responsive";
import { routePaths } from "../../routes/config";

const SuperAdminDashboard = ({ data }) => {
  const cookies = new Cookies();
  const role = cookies.get("role"); 
  const userName = cookies.get('name');
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const isMobile = useMediaQuery({ query: '(max-width: 700px)' })

  return (
    <div>
      {isMobile ? <MobileHeader route={routePaths.Admin.login} showDrawer={showDrawer} /> :
          <Header  route={routePaths.Admin.login} />
      }      
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
