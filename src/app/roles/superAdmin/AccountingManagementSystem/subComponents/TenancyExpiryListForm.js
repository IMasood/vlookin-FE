import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import MobileHeader from "../../../../components/Header/MobileHeader";
import { apiRoutes, routePaths } from "../../../../routes/config";
import { Header } from "../../../../components/Header";
import { CustomButton } from "../../../../components/Button";
import { Button } from "antd";
import { FaBell } from "react-icons/fa";
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

const TenancyExpiryListForm = (props) => {
  const { showDrawer } = props;
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });

  // Grid States

  const [columns, setColumns] = useState([
    {
      name: "voucherNumber",
      title: "Voucher #",
    },
    {
      name: "tenantId",
      title: "Tenant ID",
    },
    {
      name: "tenantName",
      title: "Tenant Name",
    },
    {
      name: "buildingCode",
      title: "Building Code",
    },
    {
      name: "buildingName",
      title: "Building Name",
    },
    {
      name: "amount",
      title: "Amount",
    },
    {
      name: "narration",
      title: "Narration",
    },
    {
      name: "chequeNumber",
      title: "Cheque #",
    },
    {
      name: "contractExpiry",
      title: "Contract Expiry",
    },
  ]);

  const [rows, setRows] = useState([
    {
      voucherNumber: "03",
      tenantId: "33231231231",
      tenantName: "Mr. Hamza",
      buildingCode: "4310",
      buildingName: "Emirates Tower Second",
      amount: "2,000,00",
      narration: "Emirates Tower 1712",
      chequeNumber: "10223312",
      contractExpiry: "01-01-2024",
    },
    {
      voucherNumber: "03",
      tenantId: "33231231231",
      tenantName: "Mr. Hamza",
      buildingCode: "4310",
      buildingName: "Emirates Tower Second",
      amount: "2,000,00",
      narration: "Emirates Tower 1712",
      chequeNumber: "10223312",
      contractExpiry: "01-01-2024",
    },
    {
      voucherNumber: "03",
      tenantId: "33231231231",
      tenantName: "Mr. Hamza",
      buildingCode: "4310",
      buildingName: "Emirates Tower Second",
      amount: "2,000,00",
      narration: "Emirates Tower 1712",
      chequeNumber: "10223312",
      contractExpiry: "01-01-2024",
    },
    {
      voucherNumber: "03",
      tenantId: "33231231231",
      tenantName: "Mr. Hamza",
      buildingCode: "4310",
      buildingName: "Emirates Tower Second",
      amount: "2,000,00",
      narration: "Emirates Tower 1712",
      chequeNumber: "10223312",
      contractExpiry: "01-01-2024",
    },
    {
      voucherNumber: "03",
      tenantId: "33231231231",
      tenantName: "Mr. Hamza",
      buildingCode: "4310",
      buildingName: "Emirates Tower Second",
      amount: "2,000,00",
      narration: "Emirates Tower 1712",
      chequeNumber: "10223312",
      contractExpiry: "01-01-2024",
    },
  ]);

  // Grid States

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
          <Header
            title={"Tenancy Expiry List"}
            route={routePaths.Admin.login}
          />
        )}
      </div>
      <div className="container-fluid">
        <div className="d-flex flex-row col-md-12 border-top pt-4 align-items-end">
          <div className="align-self-end ms-auto">
            <Button
              type="submit"
              variant="contained"
              // onClick={handleClick}
              style={{ backgroundColor: "#4A0D37", color: "white" }}
              className="button"
            >
              Notify <FaBell />
            </Button>
          </div>
        </div>
        {/* Grid will be added later */}
        <div className="d-flex flex-row col-md-12 my-3 border rounded ">
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
    </>
  );
};

export default TenancyExpiryListForm;
