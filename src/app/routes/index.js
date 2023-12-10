import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Login } from "../components/Login";
import { routePaths } from "./config";
import SideBar from "../components/Layouts/SideBar";
import { AddUser } from "../roles/superAdmin/AddUser";
import { ListUser } from "../roles/superAdmin/ListUser";
import LoginScr from "../roles/Tenant/LoginScr";
import DashboardScr from "../roles/Tenant/DashboardScr";
import VisitorDashboard from "../roles/staff/dashboard";
import ListVisitor from "../roles/staff/ListVisitor";
import ListTenant from "../roles/Tenant/ListTenant";
import EditVisitor from "../roles/staff/editVisitor";
import { ListAppartment } from "../roles/admin/ListApartment";
import { ListBuilding } from "../roles/admin/ListBuilding";
import AdminDashboard from "../roles/admin/dashboard";
import AddAppartment from "../roles/admin/AddAppartment";
import EditTenantForm from "../components/Form/EditTenantForm";
import { EditTenant } from "../roles/Tenant/EditTenant";
import AddBuilding from "../roles/admin/AddBuilding";
import AddUsers from "../roles/admin/AddUser";
import EditBuilding from "../roles/admin/EditBuilding";
import Receipt from "../roles/staff/Receipt";
import EditApartment from "../roles/admin/EditApartment";
import Dashboard from "../roles/User/Dashboard";
import AddComplaint from "../roles/User/AddComplaint";
import { ListComplaint } from "../roles/User/ListComplaint";
import MaintanceDashboard from "../roles/Maintenance/Dashboard";
import { AdminListComplaint } from "../roles/admin/AdminListComplaint";
import { ListReceipts } from "../roles/User/ListReceipts";
import { MaintenanceListComplaint } from "../roles/Maintenance/MaintenanceListComplaint";
import SuperAdminDashboard from "../roles/superAdmin/dashboard";
import { Maintenance } from "../roles/superAdmin/Maintenance";
import SuperAdminListVisitor from "../roles/superAdmin/Visitor";
import { Building } from "../roles/superAdmin/building";
import { EditSuperAdminUser } from "../components/Form/EditSuperAdminUserForm";
import EditSuperAdmin from "../roles/superAdmin/editUser";
import UserProfile from "../roles/User/UserProfile";
import { LoginForm } from "../components/Login/form";
import { Cookies } from "react-cookie";
import AddReceipt from "../roles/superAdmin/AccountingManagementSystem/AddReceipt";
import ListReceipt from "../roles/superAdmin/AccountingManagementSystem/ListReceipt";
import AuthenticatedRoute from "./authenticate";
const Authetication = () => {
  // const { cookies } = LoginForm;
  const cookies = new Cookies();
  const token = cookies.get("token");

  console.log(token, 'cookies in route file debugging')

  return (    
    <Router>
      <Routes>
        <Route path={routePaths.Admin.login} exact element={<Login />} />
        <Route
          path={routePaths.Admin.dashboard}
          exact
          element={token ? <AdminDashboard /> : <Navigate to="/login" exact />}
        />
        <Route
          path={routePaths.Admin.addUser}
          exact
          element={token ? <AddUsers /> : <Navigate to="/login" exact />}
        />
        <Route
          path={routePaths.Admin.listUser}
          exact
          element={token ? <ListUser /> : <Navigate to="/login" exact />}
        />
        <Route
          path={routePaths.Admin.listAppartment}
          exact
          element={token ? <ListAppartment /> : <Navigate to="/login" exact />}
        />
        <Route
          path={routePaths.Admin.listBuilding}
          exact
          element={token ? <ListBuilding /> : <Navigate to="/login" exact />}
        />
        <Route
          path={routePaths.Admin.addAppartment}
          exact
          element={token ? <AddAppartment /> : <Navigate to="/login" exact />}
        />
        <Route
          path={routePaths.Admin.addbuilding}
          exact
          element={token ? <AddBuilding /> : <Navigate to="/login" exact />}
        />
        <Route
          path={routePaths.Admin.editBuilding}
          exact
          element={token ? <EditBuilding /> : <Navigate to="/login" exact />}
        />
        <Route
          path={routePaths.Admin.editApartment}
          exact
          element={token ? <EditApartment /> : <Navigate to="/login" exact />}
        />
        <Route
          path={routePaths.Admin.adminListComplaint}
          exact
          element={
            token ? <AdminListComplaint /> : <Navigate to="/login" exact />
          }
        />

        {/* Tenant Routes */}

        <Route
          path={routePaths.Tenant.dashboard}
          exact
          element={token ? <DashboardScr /> : <Navigate to="/login" exact />}
        />
        {/* <Route path={routePaths.Tenant.login} exact element={<LoginScr />} /> */}
        <Route
          path={routePaths.Tenant.listTenant}
          exact
          element={token ? <ListTenant /> : <Navigate to="/login" exact />}
        />
        <Route
          path={routePaths.Tenant.editTenant}
          exact
          element={token ? <EditTenant /> : <Navigate to="/login" exact />}
        />

        {/* User  Route*/}

        <Route
          path={routePaths.User.dashboard}
          exact
          element={token ? <UserProfile /> : <Navigate to="/login" exact />}
        />
        <Route
          path={routePaths.User.complaintForm}
          exact
          element={token ? <AddComplaint /> : <Navigate to="/login" exact />}
        />
        <Route
          path={routePaths.User.complaintList}
          exact
          element={token ? <ListComplaint /> : <Navigate to="/login" exact />}
        />
        <Route
          path={routePaths.User.receiptList}
          exact
          element={token ? <ListReceipts /> : <Navigate to="/login" exact />}
        />

        {/* Maintenance  Route*/}

        <Route
          path={routePaths.Maintenance.dashboard}
          exact
          element={
            token ? <MaintanceDashboard /> : <Navigate to="/login" exact />
          }
        />
        <Route
          path={routePaths.Maintenance.complaintList}
          exact
          element={
            token ? (
              <MaintenanceListComplaint />
            ) : (
              <Navigate to="/login" exact />
            )
          }
        />

        {/* SuperAdmin  Route*/}

        <Route
          path={routePaths.SuperAdmin.addUser}
          exact
          element={
            token ? <SuperAdminDashboard /> : <Navigate to="/login" exact />
          }
        />
        <Route
          path={routePaths.SuperAdmin.maintenance}
          exact
          element={token ? <Maintenance /> : <Navigate to="/login" exact />}
        />
        <Route
          path={routePaths.SuperAdmin.visitor}
          exact
          element={
            token ? <SuperAdminListVisitor /> : <Navigate to="/login" exact />
          }
        />
        <Route
          path={routePaths.SuperAdmin.listUser}
          exact
          element={token ? <ListUser /> : <Navigate to="/login" exact />}
        />
        <Route
          path={routePaths.SuperAdmin.editUser}
          exact
          element={token ? <EditSuperAdmin /> : <Navigate to="/login" exact />}
        />
        <Route
          path={routePaths.SuperAdmin.building}
          exact
          element={token ? <Building /> : <Navigate to="/login" exact />}
        />
        <Route
          path={routePaths.SuperAdmin.addReceipt}
          exact
          element={token ? <AddReceipt /> : <Navigate to="/login" exact />}
        />
        <Route
          path={routePaths.SuperAdmin.listReceipt}
          exact
          element={
            // token ?
            <ListReceipt />
            // : <Navigate to="/login" exact />
          }
        />

        {/* Visitor Routes */}

        <Route
          path={routePaths.Visitor.dashboard}
          exact
          element={
            token ? <VisitorDashboard /> : <Navigate to="/login" exact />
          }
        />
        <Route
          path={routePaths.Visitor.listVisitor}
          exact
          element={token ? <ListVisitor /> : <Navigate to="/login" exact />}
        />
        <Route path={routePaths.Visitor.login} exact element={<Login />} />
        <Route
          path={routePaths.Visitor.editVisitor}
          exact
          element={token ? <EditVisitor /> : <Navigate to="/login" exact />}
        />
        <Route
          path={routePaths.Visitor.receipt}
          exact
          element={token ? <Receipt /> : <Navigate to="/login" exact />}
        />
      </Routes>
    </Router>
  );
};

export default Authetication;
