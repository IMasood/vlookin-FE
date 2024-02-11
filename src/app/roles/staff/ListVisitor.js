import React, { useEffect, useState } from "react";
import { getItem } from "../../utils/functions";
import { FaThList } from "react-icons/fa";
import { HiUserAdd } from "react-icons/hi";
import { RiWalkFill } from "react-icons/ri";
import SideBar from "../../components/Layouts/SideBar";
import CusTable from "../../components/Table/Table";
import { apiRoutes, routePaths } from "../../routes/config";
import axios from "axios";
import { useNavigate } from "react-router";
import { DeleteModal } from "../../components/Modal";
import { EditOutlined } from "@ant-design/icons";
import { Cookies } from "react-cookie";

const ListVisitor = () => {
  const cookies = new Cookies();
  const role = cookies.get("role"); 
  const userName = cookies.get('name');
  const [visitor, setVisitor] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBuilding, setSelectedBuilding] = useState('')

  const showDrawer = () => {
    setOpen(true);
  };

  const navigate = useNavigate();

  const items = [
    getItem("Visitor", "1", <RiWalkFill />, [
      getItem("Add Visitor", "add_visitor", <HiUserAdd />),
      getItem("List Visitor", "list_visitor", <FaThList />),
    ]),
  ];

  const handleEdit = (record) => {
    navigate(`/visitor/edit/${record.ID}`);
    localStorage.setItem("visitorData", record);
  };

  const handleDelete = async (record) => {
    try {
      const url = `http://195.35.45.131:4000/visitor?id=${record.ID}`;
      const response = await fetch(url, {
        method: "DELETE",
      });
      if(response){
        setVisitor(visitor.filter((data) => {
          return(
            data.ID !== record.ID
          )          
        }))
      }
    } catch (error) {}
  };

  const columns = [
    {
      title: "Visitor Name",
      dataIndex: "visitorName",
      key: "visitorName",
    },
    {
      title: "Building",
      dataIndex: "buildingName",
      key: "buildingName",
    },
    {
      title: "Date",
      dataIndex: "visitDate",
      key: "visitDate",
    },
    {
      title: "Flat No",
      dataIndex: "flatNo",
      key: "flatNo",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Update",
      key: "Update",
      render: (_, record) => (
        <div className="icon">
          <EditOutlined style={{paddingTop:'10px'}} onClick={() => handleEdit(record)} />
          <DeleteModal handleDelete={() => handleDelete(record)} />
        </div>
      ),
    },
  ];

  useEffect(() => {
    setLoading(true);
    const url = `${apiRoutes.getVisitor}buildingId=${selectedBuilding}`
    axios
      .get(url)
      .then((response) => {
        if(response?.data.data.length > 0){
          const data = response?.data.data;
          setVisitor(data.map((row,id ) => (
            { 
                key:id,
                visitorName: row.visitorName,
                buildingName: row.buildingName, 
                visitDate:row.visitDate,
                flatNo: row.flatNo,
                email:row.email,
                ID: row._id,
              }
            )));
          setLoading(false);
        }else{
          setLoading(false);
          setVisitor([]);
        }
        setLoading(false);
        })
      .catch((e) => {
        setLoading(false);
        setVisitor([]);      
      });
  }, [selectedBuilding]);


  const filteredData = visitor.filter((item) =>
    item?.email?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <SideBar
        children={
          <CusTable
            columns={columns}
            data={filteredData ? filteredData : visitor}
            heading={"View Visitors"}
            subHeading={"welcome to admin panel"}
            route={routePaths.Visitor.login}
            loading={loading}
            showDrawer={showDrawer}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setSelectedBuilding={setSelectedBuilding}
          />
        }
        items={items}
        showDrawer={showDrawer}
        open={open}
        setOpen={setOpen}
        role = {role}
        userName = {userName}

      />
    </div>
  );
};

export default ListVisitor;
