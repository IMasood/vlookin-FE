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
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
const BankPaymentVoucherForm = (props) => {
  const { showDrawer } = props;
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });
  const [tableValues, setTableValues] = useState(0);

  const handleChange = (event, newValue) => {
    setTableValues(newValue);
  };

  const [prefix, setPrefix] = useState("");

  const handlePrefixChange = (event) => {
    setPrefix(event.target.value);
  };
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
      <div className="border-top pt-1 d-flex flex-column mt-3">
        <TabContext value={tableValues}>
          <Box>
            <TabList onChange={handleChange}>
              <Tab label="Credit Account(s)" value={0} disabled></Tab>
              <Tab label="Debit Account(s)" value={1} disabled></Tab>
            </TabList>
          </Box>
          <TabPanel value={0}>
            <div className="container-fluid d-flex flex-column">
              <h5>Credit Details</h5>
              <div className="mt-3">
                <Box sx={{ maxWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="prefix-label">Prefix</InputLabel>
                    <Select
                      labelId="prefix"
                      id="prefix"
                      value={prefix}
                      label="Age"
                      onChange={handlePrefixChange}
                    >
                      <MenuItem value={"mr"}>Mr.</MenuItem>
                      <MenuItem value={"mrs"}>Mrs.</MenuItem>
                      <MenuItem value={"miss"}>Miss</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>
              <div className="col-md-4 my-3">
                <label className="fw-bold pb-2">Paid To</label>
                <input className="form-control " />
              </div>
              <div className="col-md-4 mb-3">
                <label className="fw-bold pb-2">Particulars</label>
                <input className="form-control " />
              </div>
              <div>
                <label className="fw-bold pb-2">Credit Amount</label>
              </div>
              {/* will need to make a function to return the divs inside to increase them  */}
              <div>
                <div className="col-md-12 mb-3">
                  <div className="d-flex flex-row">
                    <div className="col-md-1">
                      <label className="fw-bold">Credit A/c 1</label>
                    </div>
                    <div className="col-md-1 mx-2">
                      <input className="form-control" />
                    </div>
                    <div className="col-md-4 mx-2">
                      <input className="form-control" />
                    </div>
                    <div className="col-md-2 mx-2">
                      <input
                        className="form-control text-end"
                        value={"7350.00"}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mb-3">
                  <div className="d-flex flex-row">
                    <div className="col-md-1">
                      <label className="fw-bold">Credit A/c 1</label>
                    </div>
                    <div className="col-md-1 mx-2">
                      <input className="form-control" />
                    </div>
                    <div className="col-md-4 mx-2">
                      <input className="form-control" />
                    </div>
                    <div className="col-md-2 mx-2 ">
                      <input className="form-control text-end" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <CustomButton
                  className="col-md-6"
                  // disabled={loginOrCrm === 0 ? true : false}
                  // handleClick={handleClick}
                  bgColor={"#4A0D37"}
                  color={"#F8F8F8"}
                  buttonName={"Add More"}
                />
              </div>
              <div className="col-md-12 border-top d-flex flex-row pt-2">
                <div className="fw-bold me-1">Total Amount:</div>
                <div>$7,350.00</div>
              </div>
              <div className="d-flex flex-row align-items-end">
                <div className="col-md-8 mt-3">
                  <h5 className="mb-3">Credit Details</h5>
                  <table className="table table-bordered col-md-6 mb-0">
                    <thead>
                      <tr>
                        <th className="col-md-1" scope="col">
                          Cheque #
                        </th>
                        <th className="col-md-1" scope="col">
                          Cheque Date
                        </th>
                        <th className="col-md-1" scope="col" colSpan="2">
                          Withdrawn Bank
                        </th>
                        <th className="col-md-1" scope="col">
                          Total Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="col-md-1">504612</td>
                        <td className="col-md-1">17/10/23</td>
                        <td className="col-md-1">2131</td>
                        <td className="col-md-2">ADIB AL NOMAN HOLD</td>
                        <td className="col-md-1">7,350.00</td>
                      </tr>
                      {/* <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td colspan="2">Larry the Bird</td>
                      <td>@twitter</td>
                    </tr> */}
                    </tbody>
                  </table>
                </div>
                <div className="col-md-4">
                  <CustomButton
                    className="col-md-6"
                    // disabled={loginOrCrm === 0 ? true : false}
                    // handleClick={handleClick}
                    bgColor={"#4A0D37"}
                    color={"#F8F8F8"}
                    buttonName={"Add More"}
                  />
                </div>
              </div>
              <div className="col-md-12 border-top d-flex flex-row pt-2 mt-3">
                <div className="fw-bold me-1">Total Amount:</div>
                <div>$7,350.00</div>
              </div>
              <div className="col-md-12 mt-4">
                <CustomButton
                  className="col-md-6"
                  // disabled={loginOrCrm === 0 ? true : false}
                  handleClick={() => {
                    setTableValues(1);
                  }}
                  bgColor={"#4A0D37"}
                  color={"#F8F8F8"}
                  buttonName={"Next"}
                />
              </div>
            </div>
          </TabPanel>
          <TabPanel value={1}>
            <div className="col-md-12">
              <div className="d-flex flex-row align-items-end">
                <div className="col-md-8 mt-3">
                  <h5 className="mb-3">Debit Details</h5>
                  <table className="table table-bordered col-md-6 mb-0">
                    <thead>
                      <tr>
                        <th className="col-md-2" scope="col">
                          Debit Account
                        </th>
                        <th className="col-md-4" scope="col">
                          Account Head
                        </th>
                        <th className="col-md-4" scope="col">
                          Narration
                        </th>
                        <th className="col-md-2" scope="col">
                          Dr.Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="col-md-2">7211-307-A</td>
                        <td className="col-md-4">AL Mubarak 307 - A</td>
                        <td className="col-md-4">
                          Supply and refixing of out door unit condencer
                        </td>
                        <td className="col-md-2">1,470.00</td>
                      </tr>
                      <tr>
                        <td className="col-md-2">7211-307-A</td>
                        <td className="col-md-4">AL Mubarak 307 - A</td>
                        <td className="col-md-4">
                          Supply and refixing of out door unit condencer
                        </td>
                        <td className="col-md-2">1,470.00</td>
                      </tr>
                      <tr>
                        <td className="col-md-2">7211-307-A</td>
                        <td className="col-md-4">AL Mubarak 307 - A</td>
                        <td className="col-md-4">
                          Supply and refixing of out door unit condencer
                        </td>
                        <td className="col-md-2">1,470.00</td>
                      </tr>
                      <tr>
                        <td className="col-md-2">7211-307-A</td>
                        <td className="col-md-4">AL Mubarak 307 - A</td>
                        <td className="col-md-4">
                          Supply and refixing of out door unit condencer
                        </td>
                        <td className="col-md-2">1,470.00</td>
                      </tr>

                      {/* <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td colspan="2">Larry the Bird</td>
                      <td>@twitter</td>
                    </tr> */}
                    </tbody>
                  </table>
                </div>
                <div className="col-md-4">
                  <CustomButton
                    className="col-md-6"
                    // disabled={loginOrCrm === 0 ? true : false}
                    // handleClick={handleClick}
                    bgColor={"#4A0D37"}
                    color={"#F8F8F8"}
                    buttonName={"Add More"}
                  />
                </div>
              </div>
              <div className="col-md-12 border-top d-flex flex-row pt-2 mt-3">
                <div className="fw-bold me-1">Total Amount:</div>
                <div>$31231.30</div>
              </div>
              <div className="col-md-12 mt-4">
                <CustomButton
                  className="col-md-6"
                  // disabled={loginOrCrm === 0 ? true : false}
                  // handleClick={() => {
                  //   setTableValues(1);
                  // }}
                  bgColor={"#4A0D37"}
                  color={"#F8F8F8"}
                  buttonName={"Submit"}
                />
                <CustomButton
                  className="col-md-6"
                  // disabled={loginOrCrm === 0 ? true : false}
                  handleClick={() => {
                    setTableValues(0);
                  }}
                  bgColor={"#4A0D37"}
                  color={"#F8F8F8"}
                  buttonName={"Back"}
                />
              </div>
            </div>
          </TabPanel>
        </TabContext>
      </div>
    </>
  );
};

export default BankPaymentVoucherForm;
