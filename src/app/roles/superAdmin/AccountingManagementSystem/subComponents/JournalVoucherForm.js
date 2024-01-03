import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import MobileHeader from "../../../../components/Header/MobileHeader";
import { apiRoutes, routePaths } from "../../../../routes/config";
import { Header } from "../../../../components/Header";
import { CustomButton } from "../../../../components/Button";
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
import AddVoucherModal from "./Modals/AddVoucherModal";
const JournalVoucherForm = (props) => {
  const { showDrawer } = props;
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });

  const [voucherModal, setVoucherModal] = useState(false);
  const [columns, setColumns] = useState([
    { name: "serialNumber", title: "Sr #" },
    { name: "tenantId", title: "Tenant ID" },
    { name: "flatNumber", title: "Flat #" },
    { name: "accountCode", title: "Account Code" },
    { name: "accountHead", title: "Account Head" },
    { name: "ledgerNarration", title: "Ledger Narration" },
  ]);
  const [rows, setRows] = useState([
    {
      serialNumber: "03",
      tenantId: "531231123",
      accountCode: "43212",
      flatNumber: "543",
      accountHead: "Mr. Ali Abbas",
      ledgerNarration: "Water Leak",
    },
    {
      serialNumber: "03",
      tenantId: "531231123",
      accountCode: "43212",
      flatNumber: "543",
      accountHead: "Mr. Ali Abbas",
      ledgerNarration: "Water Leak",
    },
    {
      serialNumber: "03",
      tenantId: "531231123",
      accountCode: "43212",
      flatNumber: "543",
      accountHead: "Mr. Ali Abbas",
      ledgerNarration: "Water Leak",
    },
    {
      serialNumber: "03",
      tenantId: "531231123",
      accountCode: "43212",
      flatNumber: "543",
      accountHead: "Mr. Ali Abbas",
      ledgerNarration: "Water Leak",
    },
    {
      serialNumber: "03",
      tenantId: "531231123",
      accountCode: "43212",
      flatNumber: "543",
      accountHead: "Mr. Ali Abbas",
      ledgerNarration: "Water Leak",
    },
    // add another row with empty other values and
    //  add it to the array with array push with summed values to show total
  ]);
  // Formatter
  const CustomHeaderCell = (props) => {
    return (
      <TableHeaderRow.Cell {...props}>
        <div>
          <div style={{ fontWeight: "700" }}>{props.column.title}</div>
        </div>
      </TableHeaderRow.Cell>
    );
  };
  //Formatter
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
            <div className="ms-auto">
              <CustomButton
                className="col-md-6"
                // disabled={loginOrCrm === 0 ? true : false}
                handleClick={() => {
                  setVoucherModal(true);
                }}
                bgColor={"#4A0D37"}
                color={"#F8F8F8"}
                buttonName={"Add"}
              />
            </div>
          </div>
        </div>
        <div className="pb-3">
          <Grid rows={rows} columns={columns}>
            <FilteringState defaultFilters={[]} />
            <IntegratedFiltering />
            <PagingState defaultCurrentPage={0} pageSize={5} />
            <IntegratedPaging />
            <Table />
            <TableHeaderRow cellComponent={CustomHeaderCell} />
            <TableFilterRow />
            <PagingPanel />
          </Grid>
        </div>
      </div>
      <AddVoucherModal
        show={voucherModal}
        onHide={() => {
          setVoucherModal(false);
        }}
      />
    </>
  );
};

export default JournalVoucherForm;
