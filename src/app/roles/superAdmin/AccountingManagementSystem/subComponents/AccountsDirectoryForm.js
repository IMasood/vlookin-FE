import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import MobileHeader from "../../../../components/Header/MobileHeader";
import { apiRoutes, routePaths } from "../../../../routes/config";
import { Header } from "../../../../components/Header";
import { CustomButton } from "../../../../components/Button";
import { MdDelete } from "react-icons/md";
import { FaRegEye } from "react-icons/fa6";
import { TableCell } from "@mui/material";
import DeleteModal from "./Modals/DeleteModal";
import AddAccountModal from "./Modals/AddAccountModal";
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
const AccountsDirectoryForm = (props) => {
  const { showDrawer } = props;
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });

  const [addAccountsModal, setAddAccountsModal] = useState(false);
  const [deleteModals, setDeleteModals] = useState(false);

  // Grid States
  const [columns, setColumns] = useState([
    { name: "masterAccount", title: "Master Acc #" },
    { name: "creditCode", title: "Credit Code" },
    { name: "creditHead", title: "Credit Head" },
    {
      name: "actions",
      title: "Actions",
      allowFiltering: false,
      filterOperations: [],
    },
  ]);

  const [rows, setRows] = useState([
    {
      masterAccount: "100",
      creditCode: "111",
      creditHead: "Cash",
      actions: "4535214fdsfsf",
    },
    {
      masterAccount: "100",
      creditCode: "111",
      creditHead: "Cash",
      actions: "4535214fdsfsf",
    },
    {
      masterAccount: "100",
      creditCode: "111",
      creditHead: "Cash",
      actions: "4535214fdsfsf",
    },
    {
      masterAccount: "100",
      creditCode: "111",
      creditHead: "Cash",
      actions: "4535214fdsfsf",
    },
    {
      masterAccount: "100",
      creditCode: "111",
      creditHead: "Cash",
      actions: "4535214fdsfsf",
    },
  ]);
  // Grid States

  // formatter
  const actionFormatter = ({ value, row }) => (
    <div className="d-flex flex-row">
      <div className="pe-5">
        <FaRegEye
          style={{ cursor: "pointer" }}
          onClick={() => {
            // setDeleteModals(true);
          }}
        />
      </div>
      <div>
        <MdDelete
          style={{ cursor: "pointer" }}
          onClick={() => {
            setDeleteModals(true);
          }}
        />
      </div>
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

  const CustomHeaderCell = (props) => {
    return (
      <TableHeaderRow.Cell {...props}>
        <div>
          <div style={{ fontWeight: "700" }}>{props.column.title}</div>
        </div>
      </TableHeaderRow.Cell>
    );
  };
  // formatter
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
        <div className="d-flex flex-row-reverse col-md-12 border-top  pt-2 pb-2 align-items-end">
          <CustomButton
            className="col-md-6"
            bgColor={"#4A0D37"}
            color={"#F8F8F8"}
            buttonName={"Add"}
            handleClick={() => {
              setAddAccountsModal(true);
            }}
          />
        </div>
        <div className="d-flex flex-row col-md-12 pt-3 border rounded align-items-end">
          <Grid rows={rows} columns={columns}>
            <ActionTypeProvider for={["actions"]} />
            <FilteringState defaultFilters={[]} />
            <IntegratedFiltering />
            <PagingState defaultCurrentPage={0} pageSize={5} />
            <IntegratedPaging />
            <Table />
            <TableHeaderRow cellComponent={CustomHeaderCell} />
            <TableFilterRow cellComponent={Cell} />
            <PagingPanel />
          </Grid>
        </div>
        {/* <div className="pb-4">
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
        </div> */}
      </div>
      <DeleteModal
        show={deleteModals}
        onHide={() => {
          setDeleteModals(false);
        }}
      />
      <AddAccountModal
        show={addAccountsModal}
        onHide={() => {
          setAddAccountsModal(false);
        }}
      />
    </>
  );
};

export default AccountsDirectoryForm;
