import React, { useState, useEffect } from "react";
import { apiRoutes, routePaths } from "../../../routes/config";
import CusTable from "../../../components/Table/Table";
import axios from "axios";
import { toast } from "react-toastify";
import { CustomAlert } from "../../../components/Alert";
import { useNavigate } from "react-router";
import SideBar from "../../../components/Layouts/SideBar";
import { adminSidebar } from "../../../utils/roleSidebar";
import { Cookies } from "react-cookie";

export const MyBuildings = () => {
  const navigate = useNavigate();

  const cookies = new Cookies();

  const role = cookies.get("role"); 
  const userName = cookies.get('name');
  const buildingId = cookies.get('buildingId');

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const showDrawer = () => {
    setOpen(true);
  };

  const handleEdit = (record) => {
    navigate(`/admin/editBuilding/${record._id}`);
    localStorage.setItem("buildingData", record);
  };

  const handleDelete = async (record) => {
    try {
      const url = `http://195.35.45.131:4000/building?id=${record._id}`;
      const response = await fetch(url, {
        method: "DELETE",
      });
      toast.success("Building Deleted Successfully");
    } catch (error) {
      toast.error(error);
    }
  };

  const columns = [
    {
      title: "Apartments",
      dataIndex: "apartments",
      key: "apartments",
    },
    {
      title: "Tenants",
      dataIndex: "tenants",
      key: "tenants",
    },
    {
      title: "Visitors",
      dataIndex: "visitors",
      key: "visitors",
    },
    {
      title: "Comaplaints",
      dataIndex: "complaints",
      key: "complaints",
    },
    {
      title: "Maintenance",
      dataIndex: "maintenance",
      key: "maintenance",
    },
    // {
    //   title: "Update",
    //   key: "Update",
    //   render: (_, record) => (
    //     <div className="icon">
    //       <EditOutlined onClick={() => handleEdit(record)} />
    //       <DeleteModal handleDelete={() => handleDelete(record)} />
    //     </div>
    //   ),
    // },
  ];


  useEffect(() => {
    setLoading(true);
    const getSelectedBuildingDetails = `http://195.35.45.131:4000/building/details?buildingId=${buildingId}`
    axios
      .get(apiRoutes.getSelectedBuildingDetails)
      .then((res) => {
        setData(res.data.data);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);
  const filteredData = data.filter((item) =>
    item?.buildingName?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <SideBar
        children={
          <CusTable
            columns={columns}
            data={filteredData ? filteredData : data}
            heading={"My BUildings"}
            subHeading={"admin panel"}
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
        items={adminSidebar}
        role = {role}
        userName = {userName}
      />
      <CustomAlert />
    </div>
  );
};
