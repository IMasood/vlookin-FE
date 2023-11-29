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

const ListVisitor = () => {
  const [visitor, setVisitor] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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
    navigate(`/visitor/edit/${record._id}`);
    localStorage.setItem("visitorData", record);
  };

  const handleDelete = async (record) => {
    try {
      const url = `http://195.35.45.131:4000/visitor?id=${record._id}`;
      const response = await fetch(url, {
        method: "DELETE",
      });
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
          <EditOutlined onClick={() => handleEdit(record)} />
          <DeleteModal handleDelete={() => handleDelete(record)} />
        </div>
      ),
    },
  ];

  useEffect(() => {
    setLoading(true);
    axios
      .get(apiRoutes.getVisitor)
      .then((res) => {
        setVisitor(res.data.data);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);

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
          />
        }
        items={items}
        showDrawer={showDrawer}
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
};

export default ListVisitor;
