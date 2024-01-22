import { Button } from "antd";
import React from "react";
import './style.css'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';


export const CustomButton = ({ buttonName, handleClick, bgColor, color, loading, disabled }) => {

    return (
        <div>
            <Button
                type="submit"
                variant='contained'
                onClick={handleClick}
                style={{ backgroundColor: bgColor, color, color }}
                className='button'
                disabled={disabled}
            >
                { !loading ? buttonName : 
                    <Spin
                        indicator={
                        <LoadingOutlined
                            style={{
                            fontSize: 24,
                            color:'white'
                            }}
                            spin
                        />
                        }
                    /> 
                    }
            </Button>
        </div>
    )

}