import React, { useState } from 'react'
import './profile.css';
import { useNavigate } from 'react-router';
import { useMediaQuery } from 'react-responsive';
import { RiMailFill, RiUser2Line, RiDragMove2Fill } from 'react-icons/ri';
import { Col } from 'antd';

const Profile = ({ title, showDrawer, data }) => {
    const navigate = useNavigate()
    const isMobile = useMediaQuery({ query: '(max-width: 700px)' })

    return (
        <>
            <div class="container">
                <div className='profileHeader'>
                    <h1>Profile</h1>
                </div>
                <div  class="profile">
                        <header class="header">
                            <div class="details">
                                <img src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=b38c22a46932485790a3f52c61fcbe5a" alt="John Doe" class="profile-pic"/>
                                <h1 class="heading">{data.userName}</h1>
                                <div class="location">       
                                    <p>{data.userId}</p>
                                </div>
                                <div class="stats">
                                    <Col
                                        // span={10}
                                        offset={isMobile ? 0 : 4}
                                        md={10} sm={16}>
                                        <div class="col-4">
                                            <h4><RiUser2Line/></h4>
                                            <p>{data.role}</p>
                                        </div>

                                        <div class="col-4">
                                            <h4><RiMailFill /></h4>
                                            <p>{data.email}</p>
                                        </div>
                                        </Col>
                                </div>
                            </div>
                        </header>
                </div>
            </div>
        </>
    )
}

export default Profile
