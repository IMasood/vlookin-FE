import React, { useState, useEffect } from "react";
import { apiRoutes, routePaths } from "../../../routes/config";
import CusTable from "../../../components/Table/Table";
import axios from "axios";
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
  const [building, setBuilding] = useState({
    name :'',
    code:''
  });

  const [apartments, setApartments] = [{
    flatNo:'',
    floorNo:''
  }]


  const showDrawer = () => {
    setOpen(true);
  };

  const columns = [
    {
      title: "Apartments",
      children : [
        {
          title: 'Flat No',
          dataIndex: "flatNo",
          width:50
        },
        {
          title: 'Floor No',
          dataIndex: "floorNo",
          // key: "floorNo",
          width:50
        }
      ]
    },
    {
      title: "Tenants",
      dataIndex: "tenants",
      // key: "tenants",
      children : [
        {
          title: 'Name',
          dataIndex: "tenantName",
          // key: "tenantName",
          width:50
        },
        {
          title: 'Email',
          dataIndex: "email",
          // key: "email",
          width:50
        },
        {
          title: 'Contact',
          dataIndex: "contact",
          // key: "contact",
          width:50
        }
      ]
    },

    {
      title: "Comaplaints",
      dataIndex: "complaints",
      key: "buildingcomplaints",
      children : [
        {
          title: 'Id',
          dataIndex: "complaintId",
          key: "buildingcomplaintId",
          width:50
        },
        {
          title: 'Category',
          dataIndex: "category",
          key: "buildingcategory",
          width:50
        },
        {
          title: 'Status',
          dataIndex: "status",
          key: "buildingstatus",
          width:50
        }
      ]
    },
  ];

  const getBuildingDetails = () => {
    axios
      .get(`${apiRoutes.getSelectedBuilding}?buildingId=${buildingId}`)
      .then((res) => {
        setBuilding({
          name: res.data.data.buildingName,
          code:res.data.data.buildingCode
        });
        setLoading(false);
      })
      .catch((e) => console.log(e));

  }

  const getMyBuildings = ()=> {
    axios
    .get(`${apiRoutes.myBuilding}?buildingId=${buildingId}`)
    .then((res) => {
      setData(res.data)
      setLoading(false);
    })
    .catch((e) => console.log(e));

  }; 

  useEffect(() => {
    setLoading(true);
    getBuildingDetails()
    getMyBuildings()
  }, []);


  return (
    <div>
      <SideBar
        children={
          <CusTable
            columns={columns}
            heading={"My Buildings"}
            subHeading={`${building.name} - ${building.code}`}
            loading={loading}
            route={routePaths.Admin.login}
            showDrawer={showDrawer}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            data = {data.apartments}
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
