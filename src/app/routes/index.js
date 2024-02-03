import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Login } from "../components/Login";
import { routePaths } from "./config";
import { ListUser } from "../roles/superAdmin/ListUser";
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
import EditSuperAdmin from "../roles/superAdmin/editUser";
import UserProfile from "../roles/User/UserProfile";
import { LoginForm } from "../components/Login/form";
import { Cookies } from "react-cookie";
import AddReceipt from "../roles/superAdmin/AccountingManagementSystem/AddReceipt";
import ListReceipt from "../roles/superAdmin/AccountingManagementSystem/ListReceipt";
import JournalVoucher from "../roles/superAdmin/AccountingManagementSystem/JournalVoucher";
import AccountsDirectory from "../roles/superAdmin/AccountingManagementSystem/AccountsDirectory";
import TenancyExpiryList from "../roles/superAdmin/AccountingManagementSystem/TenancyExpiryList";
import BankPaymentVoucher from "../roles/superAdmin/AccountingManagementSystem/BankPaymentVoucher";
import NotifyTenant from "../roles/admin/NotifyTenant";
import NotifyAdmin from "../roles/superAdmin/NotifyAdmin";
import { ProtectRoutes } from "../hooks/protectRoutes";

const WebRoutes = () => {
  const cookies = new Cookies();
  const token = cookies.get("token");


  return (
    <>
      <Router>
        <Routes>
          <Route path={routePaths.Admin.login} exact element={<Login />} />
          <Route element={ <ProtectRoutes /> }>
            <Route path={routePaths.Admin.dashboard} exact element={<AdminDashboard /> }/>
            {/* <Route path='/home' element={ <Home /> } /> */}
          </Route>
          <Route  path={routePaths.Admin.addUser} exact element={ <AddUsers /> }/>
          <Route path={routePaths.Admin.listUser} exact element={ <ListUser /> }/>
          <Route path={routePaths.Admin.listAppartment} exact element={<ListAppartment /> }/>
          <Route path={routePaths.Admin.listBuilding} exact element={ <ListBuilding /> }/>
          <Route path={routePaths.Admin.addAppartment} exact element={ <AddAppartment /> } />
          <Route  path={routePaths.Admin.addbuilding} exact element={ <AddBuilding /> }/>
          <Route path={routePaths.Admin.editBuilding} exact element={ <EditBuilding /> }/>
          <Route path={routePaths.Admin.editApartment} exact element={ <EditApartment /> }/>
          <Route path={routePaths.Admin.adminListComplaint} exact element={ <AdminListComplaint /> }/>
          <Route path={routePaths.Tenant.dashboard} exact element={ <DashboardScr /> }/>
          {/* <Route path={routePaths.Admin.login} exact element={<LoginScr />} /> */}
          <Route path={routePaths.Tenant.listTenant} exact element={ <ListTenant /> }/>
          <Route path={routePaths.Tenant.editTenant} exact element={ <EditTenant /> }/>
          <Route path={routePaths.Admin.notifyTenant} exact element={ <NotifyTenant /> }/>

          {/* User  Route*/}

          <Route path={routePaths.User.dashboard} exact element={ <UserProfile /> }/>
          <Route path={routePaths.User.complaintForm} exact element={ <AddComplaint /> }/>
          <Route path={routePaths.User.complaintList} exact element={ <ListComplaint /> } />
          <Route path={routePaths.User.receiptList} exact element={ <ListReceipts /> }/>

          {/* Maintenance  Route*/}

          <Route  path={routePaths.Maintenance.dashboard} exact  element={<MaintanceDashboard />}  />
          <Route  path={routePaths.Maintenance.complaintList} exact element={<MaintenanceListComplaint /> }/>

          {/* SuperAdmin  Route*/}

          <Route  path={routePaths.SuperAdmin.addUser} exact  element={    <SuperAdminDashboard />  } />
          <Route  path={routePaths.SuperAdmin.maintenance} exact element={ <Maintenance /> }/>
          <Route  path={routePaths.SuperAdmin.visitor} exact  element={    <SuperAdminListVisitor />  }/>
          <Route
            path={routePaths.SuperAdmin.listUser} exact
            element={ <ListUser /> }
          />
          <Route
            path={routePaths.SuperAdmin.editUser} exact
            element={    <EditSuperAdmin />  }
          />
          <Route
            path={routePaths.SuperAdmin.building} exact
            element={ <Building /> }
          />
          <Route
            path={routePaths.SuperAdmin.addReceipt} exact
            element={ <AddReceipt /> }
          />
          <Route
            path={routePaths.SuperAdmin.listReceipt} exact
            element={ <ListReceipt /> }
          />
          {/* <Route
            path={routePaths.SuperAdmin.listReceipt} exact
            element={   //    <ListReceipt />   //  }
          /> */}
          <Route
            path={routePaths.SuperAdmin.accountsDirectory} exact
            element={<AccountsDirectory />}
          />
          <Route
            path={routePaths.SuperAdmin.journalVoucher} exact
            element={    <JournalVoucher />  }
          />
          {/* Routes Present */}
          <Route
            path={routePaths.SuperAdmin.tenancyExpiryList} exact
            element={<TenancyExpiryList />}
          />
          <Route
            path={routePaths.SuperAdmin.bankPaymentVoucher} exact
            element={<BankPaymentVoucher />}
          />
          <Route path={routePaths.SuperAdmin.notifyAdmin} exact element={ <NotifyAdmin /> }/>

          {/* Visitor Routes */}

          <Route
            path={routePaths.Visitor.dashboard} exact
            element={    <VisitorDashboard />  }
          />
          <Route
            path={routePaths.Visitor.listVisitor} exact
            element={ <ListVisitor /> }
          />
          <Route path={routePaths.Visitor.login} exact element={<Login />} />
          <Route
            path={routePaths.Visitor.editVisitor} exact
            element={ <EditVisitor /> }
          />
          <Route
            path={routePaths.Visitor.receipt} exact
            element={ <Receipt /> }
          />
        </Routes>
      </Router>
    </>
  );
};

export default WebRoutes;
