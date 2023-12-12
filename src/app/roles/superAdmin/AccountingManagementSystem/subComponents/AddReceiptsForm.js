import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import MobileHeader from "../../../../components/Header/MobileHeader";
import { apiRoutes, routePaths } from "../../../../routes/config";
import { Header } from "../../../../components/Header";
import { CustomButton } from "../../../../components/Button";
const AddReceiptsForm = (showDrawer) => {
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
          <Header title={"Add Receipts"} route={routePaths.Admin.login} />
        )}
      </div>
      <div className="container-fluid pb-0">
        <div className="d-flex justify-content-between top-bar col-md-12">
          <div className="col-md-4">
            <span className="d-flex flex-row">
              <div className="fw-bold">Date : </div>16-09-2023
            </span>
            <span className="d-flex flex-row">
              <div className="fw-bold">Voucher No : </div>2023000715
            </span>
          </div>
          <div className="d-flex flex-column col-md-4">
            <div class="form-group d-flex flex-row">
              <label for="buidlingCode" className="fw-bold col-md-4">
                Building Code
              </label>
              <input type="text" class="form-control" id="buidlingCode" />
            </div>
            <div class="form-group d-flex flex-row">
              <label for="buidlingCode" className="fw-bold col-md-4">
                Building Name
              </label>
              <input type="text" class="form-control" id="buidlingCode" />
            </div>
            <div class="form-group d-flex flex-row">
              <label for="buidlingCode" className="fw-bold col-md-4 ">
                Flat #
              </label>
              <input className="form-control" type="text" id="buidlingCode" />
            </div>
          </div>
        </div>
        <div className="border-top pt-1 d-flex flex-row">
          <div className="col-md-3">
            {/* left */}
            <div>
              <h5>Tenent Details</h5>
              <div>
                <div className="fw-bold  mb-1">Tenant Account</div>
                <div className="d-flex flex-row">
                  <input
                    style={{
                      maxWidth: "80px",
                      minWidth: "80px",
                      marginRight: "15px",
                    }}
                    className="form-control"
                    disabled={true}
                    value={"1AA001"}
                  />
                  <input
                    className="form-control"
                    disabled={true}
                    value={"ABRAR"}
                  />
                </div>
              </div>
              <div className="mt-2">
                <table class="table">
                  <thead>
                    <tr>
                      <th style={{ whiteSpace: "nowrap" }} scope="col">
                        Credit Code
                      </th>
                      <th style={{ whiteSpace: "nowrap" }} scope="col">
                        Credit Head
                      </th>
                      <th scope="col">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">4103</th>
                      <td>Al Salam Un Earned Revenue</td>
                      <td>50000</td>
                    </tr>
                    <tr>
                      <th scope="row">4103</th>
                      <td>Al Salam Un Earned Revenue</td>
                      <td>50000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <h5>Contract Details</h5>
              <div>
                <div class="form-group d-flex flex-row mb-1">
                  <label for="buidlingCode" className="fw-bold  col-md-4 ">
                    Period Of Contract
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="buidlingCode"
                  />
                </div>
                <div class="form-group d-flex flex-row mb-1">
                  <label for="buidlingCode" className="fw-bold  col-md-4 ">
                    Total Rent
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="buidlingCode"
                  />
                </div>
                <div class="form-group d-flex flex-row mb-1">
                  <label for="buidlingCode" className="fw-bold col-md-4 ">
                    F.A.S Date
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="buidlingCode"
                  />
                </div>
                <div class="form-group d-flex flex-row mb-1">
                  <label for="buidlingCode" className="fw-bold  col-md-4 ">
                    Parking Charges 1
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="buidlingCode"
                  />
                </div>
                <div class="form-group d-flex flex-row mb-1">
                  <label for="buidlingCode" className="fw-bold col-md-4 ">
                    Parking Charges 2
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="buidlingCode"
                  />
                </div>
                <div class="form-group d-flex flex-column mb-1">
                  <label for="buidlingCode" className="fw-bold col-md-4 ">
                    Period Range
                  </label>
                  <div className="d-flex flex-row">
                    <div className="fw-bold col-md-4">From</div>
                    <input
                      className="form-control"
                      type="text"
                      id="buidlingCode"
                    />
                  </div>
                  <div className="d-flex flex-row">
                    <div className="fw-bold col-md-4">To</div>
                    <input
                      className="form-control"
                      type="text"
                      id="buidlingCode"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h5>Additional Information</h5>
              <div class="form-group d-flex flex-row mb-1">
                <label for="buidlingCode" className="fw-bold col-md-4 ">
                  Receipt Description
                </label>
                <textarea
                  className="form-control"
                  type="text"
                  id="buidlingCode"
                />
              </div>
            </div>
          </div>
          <div
            className="col-md-9 border-start d-flex flex-column justify-content-between"
            style={{ marginLeft: "10px" }}
          >
            <table class="table">
              <thead>
                <tr>
                  <th style={{ whiteSpace: "nowrap" }} scope="col">
                    Sr#
                  </th>
                  <th style={{ whiteSpace: "nowrap" }} scope="col">
                    Cheque Date
                  </th>
                  <th scope="col">Details</th>
                  <th scope="col">Dr.A/c</th>
                  <th scope="col">Bank Name</th>
                  <th scope="col">Deposit Bank</th>
                  <th scope="col">Drawn Bank</th>
                  <th scope="col">Cheuqe #</th>
                  <th scope="col">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">4103</th>
                  <td>Al Salam Un Earned Revenue</td>
                  <td>50000</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">4103</th>
                  <td>Al Salam Un Earned Revenue</td>
                  <td>50000</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">4103</th>
                  <td>Al Salam Un Earned Revenue</td>
                  <td>50000</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">4103</th>
                  <td>Al Salam Un Earned Revenue</td>
                  <td>50000</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">4103</th>
                  <td>Al Salam Un Earned Revenue</td>
                  <td>50000</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">4103</th>
                  <td>Al Salam Un Earned Revenue</td>
                  <td>50000</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">4103</th>
                  <td>Al Salam Un Earned Revenue</td>
                  <td>50000</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">4103</th>
                  <td>Al Salam Un Earned Revenue</td>
                  <td>50000</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">4103</th>
                  <td>Al Salam Un Earned Revenue</td>
                  <td>50000</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">4103</th>
                  <td>Al Salam Un Earned Revenue</td>
                  <td>50000</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">4103</th>
                  <td>Al Salam Un Earned Revenue</td>
                  <td>50000</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <div>
              <CustomButton
                className="col-md-6"
                // disabled={loginOrCrm === 0 ? true : false}
                // handleClick={handleClick}
                bgColor={"#4A0D37"}
                color={"#F8F8F8"}
                buttonName={"Save"}
              />
              <CustomButton
                className="col-md-6"
                // disabled={loginOrCrm === 0 ? true : false}
                // handleClick={handleClick}
                bgColor={"#4A0D37"}
                color={"#F8F8F8"}
                buttonName={"Download"}
              />
              <CustomButton
                className="col-md-6"
                // disabled={loginOrCrm === 0 ? true : false}
                // handleClick={handleClick}
                bgColor={"#4A0D37"}
                color={"#F8F8F8"}
                buttonName={"Print"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddReceiptsForm;
