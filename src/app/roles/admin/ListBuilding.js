import React, { useState, useEffect } from "react";
import { apiRoutes, routePaths } from "../../routes/config";
import CusTable from "../../components/Table/Table";
import axios from "axios";
import { DeleteModal } from "../../components/Modal";
import { EditOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import { CustomAlert } from "../../components/Alert";
import { useNavigate } from "react-router";
import SideBar from "../../components/Layouts/SideBar";
import { adminSidebar } from "../../utils/roleSidebar";

export const ListBuilding = () => {
  const navigate = useNavigate();
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
      title: "Owner Name",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Building Name",
      dataIndex: "buildingName",
      key: "buildingName",
    },
    {
      title: "Building Code",
      dataIndex: "buildingCode",
      key: "buildingCode",
    },
    {
      title: "Landmark",
      dataIndex: "landmark",
      key: "landmark",
    },
    {
      title: "Floors",
      dataIndex: "floorCount",
      key: "floorCount",
    },
    {
      title: "Parkings",
      dataIndex: "parkingCount",
      key: "parkingCount",
    },
    {
      title: "Update",
      key: "Update",
      render: (_, record) => (
        <div className="icon">
          <EditOutlined onClick={() => handleEdit(record)} />
          <DeleteModal handleDelete={() => handleDelete(record)} />
        </div>
      ),
    },
  ];

  useEffect(() => {
    setLoading(true);
    axios
      .get(apiRoutes.getBuilding)
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
            heading={"View Buildings"}
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
      />
      <CustomAlert />
    </div>
  );
};
