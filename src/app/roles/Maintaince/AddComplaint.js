import React from 'react'
import Dashboard from '../../roles/Maintaince/Dashboard';
import ComplaintForm from '../../components/Form/ComplaintForm';

const AddComplaint = () => {

    return (
        <div>
            <Dashboard data = {<ComplaintForm />} />
        </div>
    )
}

export default AddComplaint
