import React, { useState } from "react";
import SideBar from "../../../components/Layouts/SideBar";
import { superAdminSidebar } from "../../../utils/superAdminSideBar";
import { Cookies } from "react-cookie";
import BankPaymentVoucherForm from "./subComponents/BankPaymentVoucherForm";
const BankPaymentVoucher = () => {
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
        children={<BankPaymentVoucherForm showDrawer={showDrawer} />}
        items={superAdminSidebar}
        heading={"Bank Payment Voucher"}
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

export default BankPaymentVoucher;
