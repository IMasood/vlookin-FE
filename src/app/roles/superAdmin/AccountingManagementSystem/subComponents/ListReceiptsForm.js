import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import MobileHeader from "../../../../components/Header/MobileHeader";
import { apiRoutes, routePaths } from "../../../../routes/config";
import { Header } from "../../../../components/Header";
import { CustomButton } from "../../../../components/Button";
import { MdOutlineLocalPrintshop } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
const ListReceiptsForm = (showDrawer) => {
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
          <Header title={"List Receipts"} route={routePaths.Admin.login} />
        )}
      </div>
      <div className="container-fluid pb-0">
        <div className="d-flex flex-row col-md-12 border-top border-bottom pt-4 pb-5 align-items-end">
          <div class="form-group d-flex flex-column me-2">
            <label for="buidlingCode" className="fw-bold col-md-4">
              Voucher #
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
            <label for="buidlingCode" className="fw-bold col-md-4">
              Account #
            </label>
            <input type="text" class="form-control" id="buidlingCode" />
          </div>
          <div class="form-group d-flex flex-column me-2">
            <label for="buidlingCode" className="fw-bold col-md-4">
              Date
            </label>
            <input type="text" class="form-control" id="buidlingCode" />
          </div>
          <div class="form-group d-flex flex-column me-5">
            <label for="buidlingCode" className="fw-bold col-md-4">
              Amount
            </label>
            <input type="text" class="form-control" id="buidlingCode" />
          </div>
          <CustomButton
            className="col-md-6"
            // disabled={loginOrCrm === 0 ? true : false}
            // handleClick={handleClick}
            bgColor={"#4A0D37"}
            color={"#F8F8F8"}
            buttonName={"Search"}
          />
        </div>
        <div>
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
                <th scope="col">Building Code</th>
                <th scope="col">Building Name</th>
                <th scope="col">Amount</th>
                <th scope="col">Active/Closed</th>
                <th scope="col">Narration</th>
                <th scope="col">Flat #</th>
                <th scope="col">
                  <CustomButton
                    className="col-md-6"
                    // disabled={loginOrCrm === 0 ? true : false}
                    // handleClick={handleClick}
                    bgColor={"#4A0D37"}
                    color={"#F8F8F8"}
                    buttonName={"Bulk Actions"}
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">03</th>
                <td>2023000713</td>
                <td>12-SEP-2023</td>
                <td>4210</td>
                <td>Emirates Tower Secured</td>
                <td>2,000,000</td>
                <td>C</td>
                <td>Emirates Tower 1712</td>
                <td></td>
                <td>
                  <MdOutlineLocalPrintshop className="me-2" />
                  <FaRegEye className="me-2" />
                  <FiEdit className="me-2" />
                  <MdDelete />
                </td>
              </tr>
              <tr>
                <th scope="row">03</th>
                <td>2023000713</td>
                <td>12-SEP-2023</td>
                <td>4210</td>
                <td>Emirates Tower Secured</td>
                <td>2,000,000</td>
                <td>C</td>
                <td>Emirates Tower 1712</td>
                <td></td>
                <td>
                  <MdOutlineLocalPrintshop className="me-2" />
                  <FaRegEye className="me-2" />
                  <FiEdit className="me-2" />
                  <MdDelete />
                </td>
              </tr>
              <tr>
                <th scope="row">03</th>
                <td>2023000713</td>
                <td>12-SEP-2023</td>
                <td>4210</td>
                <td>Emirates Tower Secured</td>
                <td>2,000,000</td>
                <td>C</td>
                <td>Emirates Tower 1712</td>
                <td></td>
                <td>
                  <MdOutlineLocalPrintshop className="me-2" />
                  <FaRegEye className="me-2" />
                  <FiEdit className="me-2" />
                  <MdDelete />
                </td>
              </tr>
              <tr>
                <th scope="row">03</th>
                <td>2023000713</td>
                <td>12-SEP-2023</td>
                <td>4210</td>
                <td>Emirates Tower Secured</td>
                <td>2,000,000</td>
                <td>C</td>
                <td>Emirates Tower 1712</td>
                <td></td>
                <td>
                  <MdOutlineLocalPrintshop className="me-2" />
                  <FaRegEye className="me-2" />
                  <FiEdit className="me-2" />
                  <MdDelete />
                </td>
              </tr>
              <tr>
                <th scope="row">03</th>
                <td>2023000713</td>
                <td>12-SEP-2023</td>
                <td>4210</td>
                <td>Emirates Tower Secured</td>
                <td>2,000,000</td>
                <td>C</td>
                <td>Emirates Tower 1712</td>
                <td></td>
                <td>
                  <MdOutlineLocalPrintshop className="me-2" />
                  <FaRegEye className="me-2" />
                  <FiEdit className="me-2" />
                  <MdDelete />
                </td>
              </tr>
              <tr>
                <th scope="row">03</th>
                <td>2023000713</td>
                <td>12-SEP-2023</td>
                <td>4210</td>
                <td>Emirates Tower Secured</td>
                <td>2,000,000</td>
                <td>C</td>
                <td>Emirates Tower 1712</td>
                <td></td>
                <td>
                  <MdOutlineLocalPrintshop className="me-2" />
                  <FaRegEye className="me-2" />
                  <FiEdit className="me-2" />
                  <MdDelete />
                </td>
              </tr>
              <tr>
                <th scope="row">03</th>
                <td>2023000713</td>
                <td>12-SEP-2023</td>
                <td>4210</td>
                <td>Emirates Tower Secured</td>
                <td>2,000,000</td>
                <td>C</td>
                <td>Emirates Tower 1712</td>
                <td></td>
                <td>
                  <MdOutlineLocalPrintshop className="me-2" />
                  <FaRegEye className="me-2" />
                  <FiEdit className="me-2" />
                  <MdDelete />
                </td>
              </tr>
              <tr>
                <th scope="row">03</th>
                <td>2023000713</td>
                <td>12-SEP-2023</td>
                <td>4210</td>
                <td>Emirates Tower Secured</td>
                <td>2,000,000</td>
                <td>C</td>
                <td>Emirates Tower 1712</td>
                <td></td>
                <td>
                  <MdOutlineLocalPrintshop className="me-2" />
                  <FaRegEye className="me-2" />
                  <FiEdit className="me-2" />
                  <MdDelete />
                </td>
              </tr>
              <tr>
                <th scope="row">03</th>
                <td>2023000713</td>
                <td>12-SEP-2023</td>
                <td>4210</td>
                <td>Emirates Tower Secured</td>
                <td>2,000,000</td>
                <td>C</td>
                <td>Emirates Tower 1712</td>
                <td></td>
                <td>
                  <MdOutlineLocalPrintshop className="me-2" />
                  <FaRegEye className="me-2" />
                  <FiEdit className="me-2" />
                  <MdDelete />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ListReceiptsForm;
