import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import MobileHeader from "../../../../components/Header/MobileHeader";
import { apiRoutes, routePaths } from "../../../../routes/config";
import { Header } from "../../../../components/Header";
import { CustomButton } from "../../../../components/Button";
import { MdOutlineLocalPrintshop } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import ListReceipt from "../../../../utils/services/ListReceipt.service";
import { TableCell } from "@mui/material";
import DeleteModal from "./Modals/DeleteModal";
import {
  PagingState,
  IntegratedPaging,
  FilteringState,
  IntegratedFiltering,
  DataTypeProvider,
} from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableFilterRow,
  PagingPanel,
} from "@devexpress/dx-react-grid-material-ui";
const ListReceiptsForm = (showDrawer) => {
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });
  useEffect(() => {
    ListReceipt.getList(0, 2).then((response) => {
      if (response.status) {
        console.log(response);
      }
    });
  }, []);

  const [deleteModals, setDeleteModals] = useState(false);

  // Grid States

  const [columns, setColumns] = useState([
    { name: "type", title: "Type" },
    { name: "voucherNumber", title: "Voucher #" },
    { name: "date", title: "Date" },
    { name: "buildingCode", title: "Building Code" },
    { name: "buildingName", title: "Building Name" },
    { name: "amount", title: "Amount" },
    { name: "activeClosed", title: "Active/Closed" },
    { name: "narration", title: "Narration" },
    { name: "flat", title: "Flat" },
    {
      name: "actions",
      title: "Actions",
      allowFiltering: false,
      filterOperations: [],
    },
  ]);

  const [rows, setRows] = useState([
    {
      type: "4120",
      voucherNumber: "21/3/2012",
      date: "50000",
      buildingCode: "243242",
      buildingName: "Al Salam Un Earned Revenue",
      amount: "Al Salam",
      activeClosed: "Al Salam",
      narration: "3423424242424242",
      flat: 50000,
      actions: "ajlaksj1312s3421",
    },
    {
      type: "4120",
      voucherNumber: "21/3/2012",
      date: "50000",
      buildingCode: "243242",
      buildingName: "Al Salam Un Earned Revenue",
      amount: "Al Salam",
      activeClosed: "Al Salam",
      narration: "3423424242424242",
      flat: 50000,
      actions: "ajlaksj1312s3421",
    },
    {
      type: "4120",
      voucherNumber: "21/3/2012",
      date: "50000",
      buildingCode: "243242",
      buildingName: "Al Salam Un Earned Revenue",
      amount: "Al Salam",
      activeClosed: "Al Salam",
      narration: "3423424242424242",
      flat: 50000,
      actions: "ajlaksj1312s3421",
    },
    {
      type: "4120",
      voucherNumber: "21/3/2012",
      date: "50000",
      buildingCode: "243242",
      buildingName: "Al Salam Un Earned Revenue",
      amount: "Al Salam",
      activeClosed: "Al Salam",
      narration: "3423424242424242",
      flat: 50000,
      actions: "ajlaksj1312s3421",
    },
    {
      type: "4120",
      voucherNumber: "21/3/2012",
      date: "50000",
      buildingCode: "243242",
      buildingName: "Al Salam Un Earned Revenue",
      amount: "Al Salam",
      activeClosed: "Al Salam",
      narration: "3423424242424242",
      flat: 50000,
      actions: "ajlaksj1312s3421",
    },
    {
      type: "4120",
      voucherNumber: "21/3/2012",
      date: "50000",
      buildingCode: "243242",
      buildingName: "Al Salam Un Earned Revenue",
      amount: "Al Salam",
      activeClosed: "Al Salam",
      narration: "3423424242424242",
      flat: 50000,
      actions: "ajlaksj1312s3421",
    },
  ]);

  const actionFormatter = ({ value, row }) => (
    <div>
      <MdOutlineLocalPrintshop className="me-2" />
      <FaRegEye className="me-2" />
      <FiEdit className="me-2" />
      <MdDelete
        style={{ cursor: "pointer" }}
        onClick={() => {
          setDeleteModals(true);
        }}
      />
    </div>
  );

  const Cell = (props) => {
    if (props.column.name === "actions") {
      return <TableCell className={props.className} />; // Empty cell for 'name' column
    }
    return <TableFilterRow.Cell {...props} />; // Default filter cell for others
  };

  const ActionTypeProvider = (props) => (
    <DataTypeProvider formatterComponent={actionFormatter} {...props} />
  );
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
        <div className="d-flex flex-row col-md-12 pt-3 border-top align-items-end">
          {/* <div className="form-group d-flex flex-column me-2">
            <label htmlFor="buidlingCode" className="fw-bold col-md-4">
              Voucher #
            </label>
            <input
              type="text"
              className="form-control col-md-4"
              id="buidlingCode"
            />
          </div>
          <div className="form-group d-flex flex-column me-2">
            <label htmlFor="buidlingCode" className="fw-bold col-md-4">
              Flat #
            </label>
            <input type="text" className="form-control" id="buidlingCode" />
          </div>
          <div className="form-group d-flex flex-column me-2">
            <label htmlFor="buidlingCode" className="fw-bold col-md-4">
              Account #
            </label>
            <input type="text" className="form-control" id="buidlingCode" />
          </div>
          <div className="form-group d-flex flex-column me-2">
            <label htmlFor="buidlingCode" className="fw-bold col-md-4">
              Date
            </label>
            <input type="text" className="form-control" id="buidlingCode" />
          </div>
          <div className="form-group d-flex flex-column me-5">
            <label htmlFor="buidlingCode" className="fw-bold col-md-4">
              Amount
            </label>
            <input type="text" className="form-control" id="buidlingCode" />
          </div>
          <CustomButton
            className="col-md-6"
            // disabled={loginOrCrm === 0 ? true : false}
            // handleClick={handleClick}
            bgColor={"#4A0D37"}
            color={"#F8F8F8"}
            buttonName={"Search"}
          /> */}
        </div>
        <div>
          <Grid rows={rows} columns={columns}>
            <ActionTypeProvider for={["actions"]} />
            <FilteringState defaultFilters={[]} />
            <IntegratedFiltering />
            <PagingState defaultCurrentPage={0} pageSize={5} />
            <IntegratedPaging />
            <Table />
            <TableHeaderRow />
            <TableFilterRow cellComponent={Cell} />
            <PagingPanel />
          </Grid>
          {/* <table className="table">
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
          </table> */}
        </div>
      </div>
      <DeleteModal
        show={deleteModals}
        onHide={() => {
          setDeleteModals(false);
        }}
      />
    </>
  );
};

export default ListReceiptsForm;
