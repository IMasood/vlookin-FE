import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import SideBar from "../../../components/Layouts/SideBar";
import { FaEye } from "react-icons/fa";
import ViewCompliantModal from "../../../components/Modal/ViewCompliantModal";
import { DeleteModal } from "../../../components/Modal";
import CusTable from "../../../components/Table/Table";
import { CustomAlert } from "../../../components/Alert";
import { superAdminSidebar } from "../../../utils/superAdminSideBar";
import { apiRoutes, routePaths } from "../../../routes/config";
import SuperAdminCompliantModal from "../../../components/Modal/SuperAdminComplaintModal";

export const Maintenance = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([
    {
      complaintTitle: "",
      fullName: "",
      description: "",
    },
  ]);
  const [open, setOpen] = useState(false);
  const [visibleModal, setVisibleModal] = useState(false);
  const [complaints, setComplaint] = useState([]);
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
      const url = `http://195.35.45.131:4000/maintenance/deleteComplaint?id=${record._id}`;
      const response = await fetch(url, {
        method: "DELETE",
      });
      toast.success("Complaint Deleted Successfully");
    } catch (error) {
      toast.error(error);
    }
  };

  const handleView = (record) => {
    setVisibleModal(true);
    setComplaint(record);
  };

  const columns = [
    {
      title: "Complaint Id",
      dataIndex: "complaintId",
      key: "complaintId",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Name",
      dataIndex: "createdBy",
      key: "createdBy",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div className="icon">
          <FaEye onClick={() => handleView(record)} />
          <DeleteModal handleDelete={() => handleDelete(record)} />
        </div>
      ),
    },
  ];

  useEffect(() => {
    setLoading(true);
    axios
      .get(apiRoutes.getComplaints)
      .then((res) => {
        setData(res.data.data);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);

  const filteredData = data.filter((item) =>
    item?.complaintId?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <SideBar
        children={
          <CusTable
            columns={columns}
            data={filteredData ? filteredData : data}
            heading={"Complaint List"}
            subHeading={"Super Admin Panel"}
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
        items={superAdminSidebar}
      />
      <CustomAlert />
      <SuperAdminCompliantModal
        visibleModal={visibleModal}
        setVisibleModal={setVisibleModal}
        data={complaints}
      />
    </div>
  );
};
