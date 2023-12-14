import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import MobileHeader from "../../../../components/Header/MobileHeader";
import { apiRoutes, routePaths } from "../../../../routes/config";
import { Header } from "../../../../components/Header";
import { CustomButton } from "../../../../components/Button";

const BankPaymentVoucherForm = (props) => {
  const { showDrawer } = props;
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });
  return (
    <>
      <div>
        {isMobile ? (
          <MobileHeader
            route={routePaths.Admin.login}
            showDrawer={showDrawer}
          />
        ) : (
          <Header
            title={"Bank Payment Voucher"}
            route={routePaths.Admin.login}
          />
        )}
      </div>
    </>
  );
};

export default BankPaymentVoucherForm;
