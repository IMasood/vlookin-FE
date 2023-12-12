import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import MobileHeader from "../../../../components/Header/MobileHeader";
import { apiRoutes, routePaths } from "../../../../routes/config";
import { Header } from "../../../../components/Header";
import { CustomButton } from "../../../../components/Button";

const TenancyExpiryListForm = (props) => {
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
            title={"Tenancy Expiry List"}
            route={routePaths.Admin.login}
          />
        )}
      </div>
      <div className="container-fluid">
        <div className="d-flex flex-row col-md-12 border-top border-bottom pt-4 pb-5 align-items-end">
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
            <label for="buidlingCode" className="fw-bold col-md-5">
              Building Code
            </label>
            <input type="text" class="form-control" id="buidlingCode" />
          </div>
          <div class="form-group d-flex flex-column me-2">
            <label for="buidlingCode" className="fw-bold col-md-4">
              Account #
            </label>
            <input type="text" class="form-control" id="buidlingCode" />
          </div>
          <div className="align-self-end ms-auto">
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
        <div>
          <div className="d-flex flex-row-reverse col-md-12 pt-4 align-items-center">
            <div className="align-self-end">
              <CustomButton
                className="col-md-6"
                // disabled={loginOrCrm === 0 ? true : false}
                // handleClick={handleClick}
                bgColor={"#4A0D37"}
                color={"#F8F8F8"}
                buttonName={"Notify"}
              />
            </div>
          </div>
        </div>
        {/* Grid will be added later */}
        <div className="pb-4">
          <table class="table">
            <thead>
              <tr>
                <th style={{ whiteSpace: "nowrap" }} scope="col">
                  Voucher #
                </th>
                <th style={{ whiteSpace: "nowrap" }} scope="col">
                  Tenant ID
                </th>

                <th style={{ whiteSpace: "nowrap" }} scope="col">
                  Tenant Name
                </th>
                <th style={{ whiteSpace: "nowrap" }} scope="col">
                  Building Code
                </th>
                <th style={{ whiteSpace: "nowrap" }} scope="col">
                  Building Name
                </th>
                <th style={{ whiteSpace: "nowrap" }} scope="col">
                  Amount
                </th>
                <th style={{ whiteSpace: "nowrap" }} scope="col">
                  Narration
                </th>
                <th style={{ whiteSpace: "nowrap" }} scope="col">
                  Cheque #
                </th>
                <th style={{ whiteSpace: "nowrap" }} scope="col">
                  Contract Expiry
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>03</td>
                <td>2023000713</td>
                <td>Mr. Ali Abbas</td>
                <td>4210</td>
                <td>Emirates Tower Secured</td>
                <td>2,000,000</td>
                <td>Emirates Tower 1712</td>
                <td>1022859</td>
                <td>01-01-2024</td>
              </tr>
              <tr>
                <td>03</td>
                <td>2023000713</td>
                <td>Mr. Ali Abbas</td>
                <td>4210</td>
                <td>Emirates Tower Secured</td>
                <td>2,000,000</td>
                <td>Emirates Tower 1712</td>
                <td>1022859</td>
                <td>01-01-2024</td>
              </tr>
              <tr>
                <td>03</td>
                <td>2023000713</td>
                <td>Mr. Ali Abbas</td>
                <td>4210</td>
                <td>Emirates Tower Secured</td>
                <td>2,000,000</td>
                <td>Emirates Tower 1712</td>
                <td>1022859</td>
                <td>01-01-2024</td>
              </tr>
              <tr>
                <td>03</td>
                <td>2023000713</td>
                <td>Mr. Ali Abbas</td>
                <td>4210</td>
                <td>Emirates Tower Secured</td>
                <td>2,000,000</td>
                <td>Emirates Tower 1712</td>
                <td>1022859</td>
                <td>01-01-2024</td>
              </tr>
              <tr>
                <td>03</td>
                <td>2023000713</td>
                <td>Mr. Ali Abbas</td>
                <td>4210</td>
                <td>Emirates Tower Secured</td>
                <td>2,000,000</td>
                <td>Emirates Tower 1712</td>
                <td>1022859</td>
                <td>01-01-2024</td>
              </tr>
              <tr>
                <td>03</td>
                <td>2023000713</td>
                <td>Mr. Ali Abbas</td>
                <td>4210</td>
                <td>Emirates Tower Secured</td>
                <td>2,000,000</td>
                <td>Emirates Tower 1712</td>
                <td>1022859</td>
                <td>01-01-2024</td>
              </tr>
              <tr>
                <td>03</td>
                <td>2023000713</td>
                <td>Mr. Ali Abbas</td>
                <td>4210</td>
                <td>Emirates Tower Secured</td>
                <td>2,000,000</td>
                <td>Emirates Tower 1712</td>
                <td>1022859</td>
                <td>01-01-2024</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TenancyExpiryListForm;
