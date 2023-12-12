import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import MobileHeader from "../../../../components/Header/MobileHeader";
import { apiRoutes, routePaths } from "../../../../routes/config";
import { Header } from "../../../../components/Header";
import { CustomButton } from "../../../../components/Button";
const AccountsDirectoryForm = (props) => {
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
          <Header title={"Accounts Directory"} route={routePaths.Admin.login} />
        )}
      </div>
      <div className="container-fluid">
        <div className="d-flex flex-row-reverse col-md-12 border-top border-bottom pt-2 pb-2 align-items-end">
          <CustomButton
            className="col-md-6"
            bgColor={"#4A0D37"}
            color={"#F8F8F8"}
            buttonName={"Delete"}
          />
          <CustomButton
            className="col-md-6"
            bgColor={"#4A0D37"}
            color={"#F8F8F8"}
            buttonName={"Add"}
          />
        </div>
        <div>
          <div className="d-flex col-md-12 pt-4 align-items-center">
            <div class="form-group d-flex flex-column me-2">
              <label for="buidlingCode" className="col-md-5">
                Master Acc #
              </label>
              <input
                type="text"
                class="form-control col-md-5"
                id="buidlingCode"
              />
            </div>
            <div class="form-group d-flex flex-column me-2">
              <label for="buidlingCode" className="col-md-5">
                Credit Code
              </label>
              <input type="text" class="form-control" id="buidlingCode" />
            </div>
            <div className="align-self-end">
              <CustomButton
                className="col-md-6"
                // disabled={loginOrCrm === 0 ? true : false}
                // handleClick={handleClick}
                bgColor={"#4A0D37"}
                color={"#F8F8F8"}
                buttonName={"Search"}
              />
            </div>
          </div>
        </div>
        <div className="pb-4">
          <table class="table">
            <thead>
              <tr>
                <th style={{ whiteSpace: "nowrap" }} scope="col">
                  Type
                </th>
                <th style={{ whiteSpace: "nowrap" }} scope="col">
                  Voucher #
                </th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">03</th>
                <td>2023000713</td>
                <td>12-SEP-2023</td>
              </tr>
              <tr>
                <th scope="row">03</th>
                <td>2023000713</td>
                <td>12-SEP-2023</td>
              </tr>
              <tr>
                <th scope="row">03</th>
                <td>2023000713</td>
                <td>12-SEP-2023</td>
              </tr>
              <tr>
                <th scope="row">03</th>
                <td>2023000713</td>
                <td>12-SEP-2023</td>
              </tr>
              <tr>
                <th scope="row">03</th>
                <td>2023000713</td>
                <td>12-SEP-2023</td>
              </tr>
              <tr>
                <th scope="row">03</th>
                <td>2023000713</td>
                <td>12-SEP-2023</td>
              </tr>
              <tr>
                <th scope="row">03</th>
                <td>2023000713</td>
                <td>12-SEP-2023</td>
              </tr>
              <tr>
                <th scope="row">03</th>
                <td>2023000713</td>
                <td>12-SEP-2023</td>
              </tr>
              <tr>
                <th scope="row">03</th>
                <td>2023000713</td>
                <td>12-SEP-2023</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AccountsDirectoryForm;
