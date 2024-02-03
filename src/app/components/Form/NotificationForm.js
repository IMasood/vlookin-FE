import React, { useEffect, useState } from 'react'
import { Form, Col, Input, Row, Select, Upload, Button, Dropdown, Checkbox } from "antd";
import { CustomButton } from '../Button';
import './style.css';
import { Header } from '../Header';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { CustomAlert } from '../Alert';
import axios from 'axios';
import { useMediaQuery } from 'react-responsive';
import MobileHeader from '../Header/MobileHeader';
import { UploadOutlined } from '@ant-design/icons';
import { apiRoutes, routePaths } from '../../routes/config';
import { IoMdArrowDropdown } from 'react-icons/io';
import { Cookies } from 'react-cookie';
import BuildingDropDown from '../DropDown';
import UserDropDown from '../DropDown/UserDropDown';
import RealEstateDropDown from '../DropDown/RealEstateDropDown';
import { FaBell } from 'react-icons/fa';
import { redColor } from '../../../assets/colors';

const NotificationForm = ({ showDrawer }) => {
    const cookie = new Cookies();
    const role = cookie.get('role')
    const { TextArea } = Input;
    const isMobile = useMediaQuery({ query: '(max-width: 700px)' })
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        title: '',
        desc: '',
    });
    const [notifyeeAll, setNotifyeeAll] = useState(false)
    const [selectedBuilding, setSelectedBuilding] = useState('');
    const [ user, setSelectedUser] = useState('')
    const [showLoader, setShowLoader] = useState(false)

    const handleChange = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value });
    };

    const handleNotifyeeChange = (e) => {
        if (e.target.checked) {
            setNotifyeeAll(true);
        } else {
            setNotifyeeAll(false);
        }
    }

    const handleSave = (e) => {
        e.preventDefault();
        try {
            if (inputs.desc) {
                submitForm(inputs);
            } else {
                toast.error('Complete Form')
            }
        } catch (error) {
            // toast.error(error?.response?.data?.message)
        }
    }


    const submitForm = async () => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
        };
        let url = apiRoutes.notifyTenant;
        try {
            setShowLoader(true)
            await axios
                .post(url,
                    {
                        title: inputs.title, 
                        description:inputs.desc, 
                        buildingId:selectedBuilding, 
                        notifyee: user ?? 'tenant',
                        all: notifyeeAll, 
                        actionBy: 'admin'
                    }
                    , config)
                .then((response) => {
                    setShowLoader(false);
                    navigate(routePaths.Tenant.listTenant)
                    // console.log(response)
                });
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }

    return (
        <>
            <div>
                {isMobile ? <MobileHeader route={routePaths.Admin.login} showDrawer={showDrawer} /> :
                    <Header title={'Notification Center'} route={routePaths.Admin.login} />
                }
                <div className='mb_form_heading'>
                    <h2>Notify Users <FaBell  style={{ color: "#4A0D37" }}/> </h2>
                </div>
            </div>
            <div className="body">
                <Row >
                    <Col md={10} sm={16}>
                        <div style={{ marginTop: '15px' }}>
                        <Form>
                            <Form.Item
                                rules={
                                    [{ required: true, message: "Please enter title" }]
                                }
                            >
                                <Input
                                    placeholder="Title"
                                    className="form_input"
                                    name='title'
                                    value={inputs.title}
                                    onChange={handleChange}
                                />
                            </Form.Item>
                            <TextArea
                                showCount
                                maxLength={100}
                                style={{
                                    height: 120,
                                    marginBottom: 24,
                                }}
                                name='desc'
                                value={inputs.desc}
                                onChange={handleChange}
                                placeholder="Add Description"
                                className="apartment_form_input"
                            /> 
                        </Form>
                        </div>
                    </Col>
                    <Col offset={isMobile ? 0 : 4} md={10} sm={16}>
                        <div style={{ marginTop: '15px' }}>
                            {role == 'superadmin' ? <RealEstateDropDown setSelectedRealEstate={setSelectedBuilding} />
                             : 
                                <BuildingDropDown setSelectedBuilding={setSelectedBuilding} />
                            }
                            <Form>
                                <Form.Item 
                                    label='Notifyee All'
                                    name="notifyeeAll"
                                    valuePropName="checked"
                                    >
                                    <Checkbox onChange={handleNotifyeeChange} value={notifyeeAll} style={{ color: '#ffffff', marginLeft: "12px" }}></Checkbox>
                                </Form.Item>
                            </Form>

                            {
                                notifyeeAll ? '' : 
                                <div>
                                    <UserDropDown role={role} buildingId={selectedBuilding} setSelectedUser={setSelectedUser}/>
                                </div>
                            }                            

                        </div>
                    </Col>
                </Row>
                <div className='addform_btn'>
                    <CustomButton handleClick={handleSave} buttonName={<FaBell  style={{ color: "white" }}/> } bgColor={redColor} color={'#F8F8F8'} 
                      loading={showLoader} disabled={showLoader} />
                    <CustomAlert />
                </div>
            </div>
        </>
    )
}

export default NotificationForm
