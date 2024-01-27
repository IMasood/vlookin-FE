import React, {useState} from 'react'
import { Modal, Input } from 'antd'
import './style.css'
import { CustomButton } from '../Button'
import BuildingDropDown from '../DropDown'
import { redColor, whiteColor } from '../../../assets/colors'

export const ApartmentModal = ({open, onCancel, setSelectedBuilding, handleBuildingChange, handleChange, handleSave, data, loading}) => {

    return(
        <div>
            <Modal
                centered
                open={open}
                onCancel={onCancel}
                okButtonProps={{
                style: {
                    display: "none",
                },
                }}
                cancelButtonProps={{
                style: {
                    display: "none",
                },
                }}
            >
                <div className='building_modal'>
                    <h5>Name of Building</h5>
                    <BuildingDropDown setSelectedBuilding={setSelectedBuilding}/>
                    <br/>
                    <h5>Floor Number</h5>
                    <Input name='floorNo' onChange={handleChange} value={data.floorNo} style={{width:'50%'}}/>
                    <br/>
                    <h5>Number of Apartments</h5>
                    <Input name='apartmentNo' onChange={handleChange} value={data.apartmentNo} style={{width:'50%'}}/>                    
                    <br/>
                    <h5>Name of Apartments</h5>
                    <Input name='apartmentName' onChange={handleChange} value={data.apartmentName} style={{width:'50%'}}/>                    
                    <CustomButton handleClick={handleSave} buttonName={'Add'} bgColor={redColor} color={whiteColor} loading={loading}/>                    
                </div>
            </Modal>
        </div>
    )
}