import React from 'react'
import AdminDashboard from './dashboard'
import NotificationForm from '../../components/Form/NotificationForm'


const NotifyTenant = () => {
    return(
        <div>
            <AdminDashboard data = {<NotificationForm title={''} />} />
        </div>        
    )
}

export default NotifyTenant