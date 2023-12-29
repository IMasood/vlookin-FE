import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import MobileHeader from "../../../../components/Header/MobileHeader";
import { apiRoutes, routePaths } from "../../../../routes/config";
import { Header } from "../../../../components/Header";
import { CustomButton } from "../../../../components/Button";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import {
  PagingState,
  IntegratedPaging,
  FilteringState,
  IntegratedFiltering,
} from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableFilterRow,
  PagingPanel,
} from "@devexpress/dx-react-grid-material-ui";
const AddReceiptsForm = (showDrawer) => {
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });
  const [tableValues, setTableValues] = useState(0);

  const handleChange = (event, newValue) => {
    setTableValues(newValue);
  };

  const [columns, setColumns] = useState([
    { name: "serialNumber", title: "Sr #" },
    { name: "chequeDate", title: "Cheque Date" },
    { name: "details", title: "Details" },
    { name: "drAc", title: "Dr.A/c" },
    { name: "bankName", title: "Bank Name" },
    { name: "depositBank", title: "Deposit Bank" },
    { name: "drawnBank", title: "Drawn Bank" },
    { name: "chequeNumber", title: "Cheque #" },
    { name: "amount", title: "Amount" },
  ]);

  const [rows, setrows] = useState([
    {
      serialNumber: "4120",
      chequeDate: "21/3/2012",
      details: "50000",
      drAc: "243242",
      bankName: "Al Salam Un Earned Revenue",
      depositBank: "Al Salam",
      drawnBank: "Al Salam",
      chequeNumber: "3423424242424242",
      amount: 50000,
    },
    {
      serialNumber: "4120",
      chequeDate: "21/3/2012",
      details: "50000",
      drAc: "243242",
      bankName: "Al Salam Un Earned Revenue",
      depositBank: "Al Salam",
      drawnBank: "Al Salam",
      chequeNumber: "3423424242424242",
      amount: 50000,
    },
    {
      serialNumber: "4120",
      chequeDate: "21/3/2012",
      details: "50000",
      drAc: "243242",
      bankName: "Al Salam Un Earned Revenue",
      depositBank: "Al Salam",
      drawnBank: "Al Salam",
      chequeNumber: "3423424242424242",
      amount: 50000,
    },
    {
      serialNumber: "4120",
      chequeDate: "21/3/2012",
      details: "50000",
      drAc: "243242",
      bankName: "Al Salam Un Earned Revenue",
      depositBank: "Al Salam",
      drawnBank: "Al Salam",
      chequeNumber: "3423424242424242",
      amount: 50000,
    },
    {
      serialNumber: "4120",
      chequeDate: "21/3/2012",
      details: "50000",
      drAc: "243242",
      bankName: "Al Salam Un Earned Revenue",
      depositBank: "Al Salam",
      drawnBank: "Al Salam",
      chequeNumber: "3423424242424242",
      amount: 50000,
    },
    {
      serialNumber: "4121",
      chequeDate: "21/3/2012",
      details: "50000",
      drAc: "243242",
      bankName: "Al Salam Un Earned Revenue",
      depositBank: "Al Salam",
      drawnBank: "Al Salam",
      chequeNumber: "3423424242424242",
      amount: 50000,
    },
  ]);
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
            <div class="form-group d-flex flex-row pb-2">
              <label for="buidlingCode" className="fw-bold col-md-4">
                Building Code
              </label>
              <input type="text" class="form-control" id="buidlingCode" />
            </div>
            <div class="form-group d-flex flex-row pb-2">
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
        <div className="border-top pt-1 d-flex flex-column mt-3">
          <TabContext value={tableValues}>
            <Box>
              <TabList onChange={handleChange}>
                <Tab label="Tenant Details" value={0}></Tab>
                <Tab label="Cheques" value={1}></Tab>
              </TabList>
            </Box>
            <TabPanel value={0}>
              <div className="d-flex flex-row">
                {/* left */}
                <div className="col-md-6 pe-3">
                  <div className="col-md-10">
                    <h5>Tenant Account</h5>
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
                  <div className="mt-2 col-md-10 border border-bottom-0 mb-3">
                    <table class="table mb-0">
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
                  <div className="col-md-10">
                    <h5>Additional Information</h5>
                    <div class="form-group d-flex flex-column mb-1">
                      <label
                        for="buidlingCode"
                        className="fw-bold col-md-4 pb-3"
                      >
                        Receipt Description
                      </label>
                      <textarea
                        className="form-control"
                        type="text"
                        id="buidlingCode"
                        style={{ minHeight: "120px " }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 ps-3">
                  <h5>Contract Details</h5>
                  <div>
                    <div class="form-group d-flex flex-row mb-1 col-md-10">
                      <label for="buidlingCode" className="fw-bold col-md-4">
                        Period Of Contract
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="buidlingCode"
                      />
                    </div>
                    <div class="form-group d-flex flex-row mb-1 col-md-10">
                      <label for="buidlingCode" className="fw-bold  col-md-4">
                        Total Rent
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="buidlingCode"
                      />
                    </div>
                    <div class="form-group d-flex flex-row mb-1 col-md-10">
                      <label for="buidlingCode" className="fw-bold col-md-4">
                        F.A.S Date
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="buidlingCode"
                      />
                    </div>
                    <div class="form-group d-flex flex-row mb-1 col-md-10">
                      <label for="buidlingCode" className="fw-bold  col-md-4">
                        Parking Charges 1
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="buidlingCode"
                      />
                    </div>
                    <div class="form-group d-flex flex-row mb-1 col-md-10">
                      <label for="buidlingCode" className="fw-bold col-md-4">
                        Parking Charges 2
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="buidlingCode"
                      />
                    </div>
                    <div class="form-group d-flex flex-column mb-1 col-md-10">
                      <label
                        for="buidlingCode"
                        className="col-md-5 pb-3"
                        style={{ fontSize: "1.2rem" }}
                      >
                        Period Range
                      </label>
                      <div className="d-flex flex-row pb-2">
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
              </div>
              <CustomButton
                className="col-md-6"
                // disabled={loginOrCrm === 0 ? true : false}
                // handleClick={handleClick}
                bgColor={"#4A0D37"}
                color={"#F8F8F8"}
                buttonName={"Save"}
              />
            </TabPanel>
            <TabPanel value={1}>
              <div
                className="col-md-12 border rounded p-3 d-flex flex-column justify-content-between"
                style={{ marginLeft: "10px" }}
              >
                <Grid rows={rows} columns={columns}>
                  <FilteringState defaultFilters={[]} />
                  <IntegratedFiltering />
                  <PagingState defaultCurrentPage={0} pageSize={5} />
                  <IntegratedPaging />
                  <Table />
                  <TableHeaderRow />
                  <TableFilterRow />
                  <PagingPanel />
                </Grid>
                {/* <table class="table">
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
                </table> */}
                <div>
                  {/* <CustomButton
                    className="col-md-6"
                    // disabled={loginOrCrm === 0 ? true : false}
                    // handleClick={handleClick}
                    bgColor={"#4A0D37"}
                    color={"#F8F8F8"}
                    buttonName={"Save"}
                  /> */}
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
            </TabPanel>
          </TabContext>
        </div>
      </div>
    </>
  );
};

export default AddReceiptsForm;
