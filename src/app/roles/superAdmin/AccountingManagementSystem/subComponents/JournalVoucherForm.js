import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import MobileHeader from "../../../../components/Header/MobileHeader";
import { apiRoutes, routePaths } from "../../../../routes/config";
import { Header } from "../../../../components/Header";
import { CustomButton } from "../../../../components/Button";

const JournalVoucherForm = (props) => {
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
          <Header title={"Journal Voucher"} route={routePaths.Admin.login} />
        )}
      </div>
      <div className="container-fluid">
        <div className="d-flex flex-column border-top border-bottom col-md-12">
          <div className="col-md-4 mt-3">
            <span className="d-flex flex-row">
              <div className="fw-bold">Date : </div>16-09-2023
            </span>
            <span className="d-flex flex-row">
              <div className="fw-bold">Voucher No : </div>2023000715
            </span>
          </div>
          <div className="d-flex flex-row col-md-12 pb-3 pt-4 align-items-end">
            <div class="form-group d-flex flex-column me-2">
              <label for="buidlingCode" className="fw-bold col-md-4">
                Tenant ID
              </label>
              <input
                type="text"
                class="form-control col-md-4"
                id="buidlingCode"
              />
            </div>
            <div class="form-group d-flex flex-column me-2">
              <label for="buidlingCode" className="fw-bold col-md-4">
                Flat #
              </label>
              <input type="text" class="form-control" id="buidlingCode" />
            </div>
            <div class="form-group d-flex flex-column me-2">
              <label for="buidlingCode" className="fw-bold col-md-6">
                Account Code
              </label>
              <input type="text" class="form-control" id="buidlingCode" />
            </div>
            <div class="form-group d-flex flex-column me-2">
              <label for="buidlingCode" className="fw-bold col-md-6">
                Account Head
              </label>
              <input type="text" class="form-control" id="buidlingCode" />
            </div>
            <div className="ms-auto">
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
        <div className="pb-3">
          <table class="table">
            <thead>
              <tr>
                <th style={{ whiteSpace: "nowrap" }} scope="col">
                  Sr #
                </th>
                <th style={{ whiteSpace: "nowrap" }} scope="col">
                  Account Code
                </th>

                <th style={{ whiteSpace: "nowrap" }} scope="col">
                  Account Head
                </th>
                <th style={{ whiteSpace: "nowrap" }} scope="col">
                  Ledger Narration
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01</td>
                <td>7270</td>
                <td>Mr. Ali Abbas</td>
                <td>Water Leak</td>
              </tr>
              <tr>
                <td>01</td>
                <td>7270</td>
                <td>Mr. Ali Abbas</td>
                <td>Water Leak</td>
              </tr>
              <tr>
                <td>01</td>
                <td>7270</td>
                <td>Mr. Ali Abbas</td>
                <td>Water Leak</td>
              </tr>
              <tr>
                <td>01</td>
                <td>7270</td>
                <td>Mr. Ali Abbas</td>
                <td>Water Leak</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="d-flex flex-row-reverse">
          <div>
            <CustomButton
              className="col-md-6"
              // disabled={loginOrCrm === 0 ? true : false}
              // handleClick={handleClick}
              bgColor={"#4A0D37"}
              color={"#F8F8F8"}
              buttonName={"Add"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default JournalVoucherForm;
