import React, { useState } from 'react'
import { Form, Col, Input, Row, Select, Upload, Button, Dropdown } from "antd";
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
import { redColor, whiteColor } from '../../../assets/colors';
import UploadImage from './upload';

const ComplaintForm = ({ showDrawer }) => {
    const cookie = new Cookies();
    const tenantName = cookie.get('name')
    const { TextArea } = Input;
    const isMobile = useMediaQuery({ query: '(max-width: 700px)' })
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        userName: '',
        desc: '',
    });
    const [fileList, setFileList] = useState([])
    const [category, setCategory] = useState('Electrician')
    const [showLoader, setShowLoader] = useState(false)

    const handleChange = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value });
    };

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

    const items = [
        {
            label: 'Electrician',
            key: 'Electrician',
        },
        {
            label: 'Plumber',
            key: 'Plumber',
        },
        {
            label: 'Insulation',
            key: 'Insulation',
        },
        {
            label: 'Glass Replacement',
            key: 'Glass Replacement',
        },

    ]

    const handleMenuClick = (e) => {
        setCategory(e.key)
    };

    const menuProps = {
        items,
        onClick: handleMenuClick,
    };


    const submitForm = async () => {
        const tenantId = cookie.get('userId')
        const buildingId = cookie.get('buildingId'); //will update it later by using redux
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
        };
        let url = apiRoutes.createComplaints;

        let imageList = fileList.map((items) => (
            {
                imageId:items.response.data[0].imageId,
                url:items.response.data[0].url
            }            
          ))
        try {
            setShowLoader(true)
            await axios
                .post(url,
                    {
                        images: imageList,
                        createdBy: tenantName,
                        description: inputs.desc,
                        tenantId: tenantId ,
                        category: category,
                        buildingId:buildingId
                    }
                    , config)
                .then((response) => {
                    if (response.data.message == "Successfully added complaint.") {
                        setShowLoader(false)
                        navigate(routePaths.User.complaintList)
                    } 
                });
        } catch (error) {
            setShowLoader(false)
            toast.error(error?.response?.data?.message)
        }
    }

    return (
        <>
            <div>
                {isMobile ? <MobileHeader route={routePaths.Admin.login} showDrawer={showDrawer} /> :
                    <Header title={'Add Complaint'} subtitle={'welcome to Tenant panel'} route={routePaths.Admin.login} />
                }
                <div className='mb_form_heading'>
                    <h2>Add Complaint</h2>
                    <p className='headerText'>welcome to admin panel</p>
                </div>
            </div>
            <div className="body">
                <Row >
                    <Col md={10} sm={16}>
                        <div style={{ marginTop: '15px' }}>
                            <p className='form_label'>Category</p>
                            <Form>
                                <Form.Item name='category' rules={[ {required:true, message:'Choose category'} ]}>
                                    <Dropdown.Button menu={menuProps} trigger={['click']} icon={<IoMdArrowDropdown />}>
                                        {category}
                                    </Dropdown.Button>
                                </Form.Item>
                                <Form.Item
                                    name='userName'
                                    rules={
                                        [{ required: true, message: "Please enter Name" }]
                                    }
                                >
                                    <Input
                                        placeholder="User name"
                                        className="form_input"
                                        name='userName'
                                        value={tenantName}
                                        disabled={true}
                                    />
                                </Form.Item>
                                <Form.Item 
                                    name='desc'
                                    rules={[
                                        {required:true, message:'Please write description of complain'}
                                    ]}>
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
                                </Form.Item>
                            </Form>
                        </div>
                    </Col>
                    <Col offset={isMobile ? 0 : 4} md={10} sm={16}>
                        <div style={{ marginTop: '15px' }}>
                            <UploadImage fileList={fileList} setFileList={setFileList}/>
                            {/* <Form>
                                <Form.Item
                                    name="upload"
                                    label="Upload Picture"
                                    valuePropName="fileList"
                                    getValueFromEvent={normFile}
                                    rules={[
                                        {required:'true', message:'Please upload picture of complaint'}
                                    ]}
                                >
                                    <Upload
                                        name="logo"
                                        listType="picture"
                                        beforeUpload={(file) => {
                                            return false;
                                        }}
                                        onChange={onChange} // Use the onChange callback to manage fileList state
                                        fileList={fileList} // Pass the fileList state to the Upload component
                                    >
                                        <Button icon={<UploadOutlined />}>Click to upload</Button>
                                    </Upload>
                                </Form.Item>
                            </Form> */}
                        </div>
                    </Col>
                </Row>
                <div className='addform_btn'>
                    <CustomButton handleClick={handleSave} buttonName={'Save'} bgColor={redColor} color={whiteColor} loading={showLoader} disabled={showLoader} />
                    <CustomAlert />
                </div>
            </div>
        </>
    )
}

export default ComplaintForm
