import React, { useState, useEffect } from "react";
import { apiRoutes, routePaths } from "../../routes/config";
import CusTable from "../../components/Table/Table";
import axios from "axios";
import { CustomAlert } from "../../components/Alert";
import { useNavigate } from "react-router";
import SideBar from "../../components/Layouts/SideBar";
import { FaThList, FaWarehouse, FaBuilding } from "react-icons/fa";
import { HiUserAdd } from "react-icons/hi";
import { getItem } from "../../utils/functions";
import { BiMessageError } from "react-icons/bi";
import { MdOutlineDomainDisabled } from "react-icons/md";

// Action changes need to be done

export const ListReceipts = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [visibleModal, setVisibleModal] = useState(false);
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const columns = [
    {
      title: "Receipt",
      dataIndex: "receiptDetails",
      key: "receiptDetails",
    },
    {
      title: "Parking Price",
      dataIndex: "parkingPrice",
      key: "parkingPrice",
    },
    {
      title: "Period Of Contract",
      dataIndex: "periodOfContract",
      key: "periodOfContract",
    },
  ];

  useEffect(() => {
    setLoading(true);
    axios
      .get(apiRoutes.getReceipts)
      .then((res) => {
        const data = res?.data.data;
        setData(data.map((row,id ) => (
          { 
              key:id,
              receiptDetails: row.receiptDetails,
              parkingPrice: row.parkingPrice, 
              periodOfContract:row.periodOfContract,
              ID: row._id,
            }
          )));        
          setLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);

  // const filteredData = data.filter((item) =>
  //     item?.complaintId?.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  const items = [
    getItem("Maintance", "1", <FaWarehouse />, [
      getItem("Add Complaint", "addcomplaint", <HiUserAdd />),
      getItem("List Complaint", "complaintlist", <FaThList />),
    ]),
    getItem("Receipts", "2", <MdOutlineDomainDisabled />, [
      getItem("List Receipts", "receiptList", <BiMessageError />),
    ]),
  ];

  return (
    <div>
      <SideBar
        children={
          <CusTable
            columns={columns}
            data={data}
            heading={"View Receipts"}
            subHeading={"tenant panel"}
            loading={loading}
            route={routePaths.Admin.login}
            showDrawer={showDrawer}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        }
        showDrawer={showDrawer}
        open={open}
        setOpen={setOpen}
        items={items}
      />
      <CustomAlert />
    </div>
  );
};
