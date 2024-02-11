import React, { useState, useEffect } from "react";
import { apiRoutes, routePaths } from "../../routes/config";
import CusTable from "../../components/Table/Table";
import axios from "axios";
import { toast } from "react-toastify";
import { CustomAlert } from "../../components/Alert";
import SideBar from "../../components/Layouts/SideBar";
import { FaEye } from "react-icons/fa";
import { adminSidebar } from "../../utils/roleSidebar";
import ViewCompliantModal from "../../components/Modal/ViewCompliantModal";
import { DeleteModal } from "../../components/Modal";
import { Cookies } from "react-cookie";

export const AdminListComplaint = () => {
  const cookies = new Cookies();
  const role = cookies.get("role"); 
  const userName = cookies.get('name');
  
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [visibleModal, setVisibleModal] = useState(false);
  const [complaints, setComplaint] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBuilding, setSelectedBuilding] = useState('')

  const showDrawer = () => {
    setOpen(true);
  };


  const handleDelete = async (record) => {
    try {
      const url = `http://195.35.45.131:4000/maintenance/deleteComplaint?id=${record.ID}`;
      const response = await fetch(url, {
        method: "DELETE",
      });
      if(response){
        setData(data.filter((data) => {
          return(
            data.ID !== record.ID
          )          
        }))
        toast.success("Complaint Deleted Successfully");
      }
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
      filters: [
        {
          text: 'CLOSED',
          value: 'CLOSED',
        },
        {
          text: 'SUBMITTED',
          value: 'SUBMITTED',
        },
        {
          text: '	IN PROGRESS',
          value: '	IN PROGRESS',
        },
        {
          text: 'HOLD',
          value: 'HOLD',
        },
      ],

      ellipsis: true,
      onFilter: (value, record) => record.status.indexOf(value) === 0,
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
    const url = `${apiRoutes.getComplaints}?buildingId=${selectedBuilding}`
    axios
      .get(url)
      .then((response) => {
        if(response?.data.data.length > 0){
          const data = response?.data.data;
          setData(data.map((row,id ) => (
            { 
                key:id,
                complaintId: row.complaintId,
                description: row.description, 
                createdBy:row.createdBy,
                category: row.category,
                status:row.status,
                images:row.images,
                ID: row._id,
              }
            )));
          setLoading(false);
        }else{
          setLoading(false);
          setData([]);
        }
        setLoading(false);

      })
      .catch((e) => {
        setLoading(false);
        setData([]);
      });
  }, [selectedBuilding]);

  const filteredData = data?.filter((item) =>
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
            subHeading={"admin panel"}
            loading={loading}
            route={routePaths.Admin.login}
            showDrawer={showDrawer}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setSelectedBuilding={setSelectedBuilding}
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
      <ViewCompliantModal
        visibleModal={visibleModal}
        setVisibleModal={setVisibleModal}
        data={complaints}
        selectedBuilding={selectedBuilding}
        userName = {userName}
      />
    </div>
  );
};
