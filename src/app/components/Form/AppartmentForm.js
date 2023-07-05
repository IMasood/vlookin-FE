import React, { useState } from 'react'
import { Button, Col, Form, Input, Radio, Row } from "antd";
import { CustomButton, CustomOutlineButton } from '../Button';
import './style.css';
import { Header } from '../Header';
import { routePaths } from '../../routes/config';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { MdCloudUpload } from 'react-icons/md'
import CounterBtn from '../CounterBtn/CounterBtn';
import { useMediaQuery } from 'react-responsive';
import MobileHeader from '../Header/MobileHeader';

const AppartmentForm = ({ title, showDrawer }) => {
    const isMobile = useMediaQuery({ query: '(max-width: 700px)' })
    const { TextArea } = Input;
    const [inputs, setInputs] = React.useState({
        apartmentType: '',
        email: '',
        buildingNo: 0,
        flatNo: 0,
        mobileNo: 0,
        officeNo: 0,
        nationality: ''
    });
    const [bed, setBed] = useState('')
    const [pantry, setPantry] = useState('')
    const [laundry, setLaundry] = useState('')
    const [bathroom, setBathroom] = useState('')
    const [dining, setDining] = useState('')
    const [living, setLiving] = useState('')

    const handleRadioChange = (e) => {
        console.log(e.target.value)
    };


    const handleChange = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value });
    };

    return (
        <>
            <div>
                {isMobile ? <MobileHeader route={routePaths.Visitor.login} showDrawer={showDrawer} /> :
                    <Header title={'Add Appartment Details'} subtitle={'welcome to admin panel'} route={routePaths.Tenant.login} />
                }
                <div className='mb_form_heading'>
                    <h2>Add Appartment Details</h2>
                    <p className='headerText'>welcome to visitor panel</p>
                </div>
            </div>
            <div className="body">
                <Row >
                    <Col md={10} sm={16}>
                        <div style={{ marginTop: '15px' }}>

                            <p className='form_label'>Appartment Type</p>
                            <Form.Item
                                name="radio-button"
                                className='form_radio_inputs'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please pick an item!',
                                    },
                                ]}
                            >
                                <Radio.Group defaultValue="Residential" buttonStyle="solid"></Radio.Group>
                                <Radio.Group onChange={handleRadioChange} defaultValue='Residential'>
                                    <Radio.Button className="radio_btn" value='Residential'>Residential</Radio.Button>
                                    <Radio.Button className="radio_btn" value='Commercial'>Commercial</Radio.Button>
                                </Radio.Group>
                            </Form.Item>
                        </div>
                        <div className='btn_grp_container'>
                            <p className='form_label'>Type Of Appartment</p>
                            <div className='appart_form_counter_group'>
                                <CounterBtn placeholder='Bed' state={bed} setState={setBed} />
                                <CounterBtn placeholder='Living' state={living} setState={setLiving} />
                            </div>
                            <div className='appart_form_counter_group'>
                                <CounterBtn placeholder='Pantry' state={pantry} setState={setPantry} />
                                <CounterBtn placeholder='Laundry' state={laundry} setState={setLaundry} />

                            </div>
                            <div className='appart_form_counter_group'>
                                <CounterBtn placeholder='Dining' state={dining} setState={setDining} />
                                <CounterBtn placeholder='Bathroom' state={bathroom} setState={setBathroom} />
                            </div>
                        </div>
                        <div>
                            <TextArea rows={4} placeholder="Comment" maxLength={6} />
                        </div>
                    </Col>
                    <Col offset={isMobile ? 0 : 4} md={10} sm={16}>
                        <Input
                            placeholder="Area"
                            className="form_input"
                            name='buildingNo'
                            onChange={handleChange}
                        />
                        <div style={{ marginTop: '15px' }}>

                            <p className='form_label'>Furnished</p>
                            <Form.Item
                                name="radio-button"
                                className='form_radio_inputs'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please pick an item!',
                                    },
                                ]}
                            >
                                <Radio.Group>
                                    <Radio.Button className='radio_btn' value="a">Semi-Furnished</Radio.Button>
                                    <Radio.Button className='radio_btn' value="b">Not Furnished</Radio.Button>
                                    <Radio.Button className='radio_btn' value="b">Fully-Furnished</Radio.Button>
                                </Radio.Group>
                            </Form.Item>
                        </div>
                        <div style={{ marginTop: '15px' }}>

                            <p className='form_label'>Balcony</p>
                            <Form.Item
                                name="radio-button"
                                className='form_radio_inputs'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please pick an item!',
                                    },
                                ]}
                            >
                                <Radio.Group>
                                    <Radio.Button className='radio_btn' value="a">Yes</Radio.Button>
                                    <Radio.Button className='radio_btn' value="b">No</Radio.Button>
                                </Radio.Group>
                            </Form.Item>
                        </div>
                        <Input
                            placeholder="Rent"
                            className="form_input"
                            name='mobileNo'
                            onChange={handleChange}
                        />
                        <div className='uploadbtn'>
                            <p>File Upload</p>
                            <MdCloudUpload style={{ fontSize: '30px' }} />
                        </div>

                    </Col>
                </Row>
                <div>
                    <CustomButton buttonName={'Save'} bgColor={'#4A0D37'} color={'#F8F8F8'} />
                    <CustomButton buttonName={'Cancel'} bgColor={'#F8F8FF'} color={'#00000'} />
                </div>
            </div>
        </>
    )
}

export default AppartmentForm
