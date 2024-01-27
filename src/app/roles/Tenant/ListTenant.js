import React, { useEffect, useState } from "react";
import { getItem } from "../../utils/functions";
import SideBar from "../../components/Layouts/SideBar";
import CusTable from "../../components/Table/Table";
import { FaBuilding, FaThList, FaWarehouse } from "react-icons/fa";
import { HiUserAdd } from "react-icons/hi";
import { MdApartment } from "react-icons/md";
import { RiWalkFill } from "react-icons/ri";
import { BsBuildingFillAdd } from "react-icons/bs";
import axios from "axios";
import { apiRoutes, routePaths } from "../../routes/config";
import { DeleteModal } from "../../components/Modal";
import { EditOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";
import { CustomAlert } from "../../components/Alert";
import { toast } from "react-toastify";
import { Cookies } from "react-cookie";
import { adminSidebar } from "../../utils/roleSidebar";
import { superAdminSidebar } from "../../utils/superAdminSideBar";

const ListTenant = () => {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const role = cookies.get("role"); 
  const userName = cookies.get('name');
  const buildingId = cookies.get('buildingId');

  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedBuilding, setSelectedBuilding] = useState('')
  const [searchQuery, setSearchQuery] = useState("");

  const showDrawer = () => {
    setOpen(true);
  };

  const handleEdit = (record) => {
    navigate(`/tenant/edit/${record._id}`);
    localStorage.setItem("tenantData", record);
  };

  const handleDelete = async (record) => {
    try {
      const url = `http://195.35.45.131:4000/tenant?id=${record._id}`;
      await fetch(url, {
        method: "DELETE",
      });
      toast.success("Tenant Deleted Successfully");
    } catch (error) {
      toast.error(error);
    }
  };

  const columns = [
    {
      title: "Full Name",
      dataIndex: "tenantName",
    },
    {
        title: 'Building Name',
        dataIndex: 'buildingName',
    },
    {
      title: "Email",
      dataIndex: "email",
      
    },
    {
      title: "MobileNo",
      dataIndex: "contact",

    },
    {
      title: "Flat No",
      dataIndex: "flatNo",
    },
    {
      title: "Office No",
      dataIndex: "officeNo",
    },
    {
      title: "Nationality",
      dataIndex: "nationality",
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
    const url = selectedBuilding ? `${apiRoutes.getTenant}buildingId=${selectedBuilding}` : `${apiRoutes.getTenant}buildingId=${buildingId}`
    axios
      .get(url)
      .then((res) => {
        setListData(res?.data.data.map((row,id ) => (
          { 
              tenantName: row.tenantName,
              email: row.email, 
              contact: row.contact,
              flatNo:row.flatNo,
              officeNo:row.officeNo,
              nationality:row.nationality,
              buildingName:row.buildingId?.buildingName,
              flatNo:row.apartmentId?.flatNo,
              _id: row._id,
              key:row.id
            }
          )));
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false)
      });
  }, [selectedBuilding]);

  const filteredData = listData.filter((item) =>
    item?.email?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <SideBar
        children={
          <CusTable
            columns={columns}
            data={filteredData ? filteredData : listData}
            heading={"View Tenant"}
            subHeading={"Welcome to Tenant panel"}
            loading={loading}
            showDrawer={showDrawer}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setSelectedBuilding={setSelectedBuilding}
          />
        }
        items={role == 'admin' ? adminSidebar : superAdminSidebar}
        showDrawer={showDrawer}
        open={open}
        setOpen={setOpen}
        role={role ? role : ''} 
        userName={userName ? userName : ''}
      />
      <CustomAlert />
    </div>
  );
};

export default ListTenant;
