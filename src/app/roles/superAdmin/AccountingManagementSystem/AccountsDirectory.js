import React, { useState } from "react";
import SideBar from "../../../components/Layouts/SideBar";
import { superAdminSidebar } from "../../../utils/superAdminSideBar";
import { Cookies } from "react-cookie";
import AccountsDirectoryForm from "./subComponents/AccountsDirectoryForm";
const AccountsDirectory = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const cookies = new Cookies();
  const name = cookies.get("name");
  const role = cookies.get("role");

  return (
    <div>
      <SideBar
        children={<AccountsDirectoryForm showDrawer={showDrawer} />}
        items={superAdminSidebar}
        heading={"Accounts Directory"}
        // subHeading={"Add Receipts"}
        role={role ? role : ""}
        userName={name}
        showDrawer={showDrawer}
        open={open}
        setOpen={setOpen}
      ></SideBar>
    </div>
  );
};

export default AccountsDirectory;
