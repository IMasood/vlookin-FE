import React from 'react'
import { Header } from '../Header'
import { Input, Table } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import './style.css'
import { Oval } from 'react-loader-spinner'
import { useMediaQuery } from 'react-responsive'
import MobileHeader from '../Header/MobileHeader'
import BuildingDropDown from '../DropDown'
import { Cookies } from 'react-cookie'
import { routePaths } from '../../routes/config'
import { useLocation } from 'react-router'
import RealEstateDropDown from '../DropDown/RealEstateDropDown'
import { blackColor, grayColor } from '../../../assets/colors'

const CusTable = ({ columns, data, heading, subHeading, route, loading, showDrawer, searchQuery, setSearchQuery, setSelectedBuilding, setSelectedRealEstate }) => {
  const cookies = new Cookies();
  const role = cookies.get("role").toLowerCase();
  const isMobile = useMediaQuery({ query: '(max-width: 700px)' })
  let location = useLocation()
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  return (
    <div>
      {isMobile ?
          <MobileHeader route={route} showDrawer={showDrawer}/>
      : <Header title={heading} subtitle={subHeading} route={route ? route  : routePaths.Admin.login} />}
        <div className='mb_table_heading'>
            <h2>{heading}</h2>
            <p className='headerText'>{subHeading}</p>
        </div>
      <div className='container'>
      <Input size="large" className='search_bar' placeholder="Search" value={searchQuery}
          onChange={handleSearchChange} prefix={<SearchOutlined />} />   
          <br/>
          {location.pathname != routePaths.Admin.listBuilding && role == 'admin' && <BuildingDropDown  className={'search_bar'} setSelectedBuilding={setSelectedBuilding}/>}
          {location.pathname != routePaths.SuperAdmin.building && role == 'superadmin' && <BuildingDropDown  className={'search_bar'} setSelectedBuilding={setSelectedBuilding}/>}            
          {location.pathname == routePaths.SuperAdmin.building && role == 'superadmin' && <RealEstateDropDown className={'search_bar'} setSelectedRealEstate={setSelectedRealEstate} />}
        {loading ? 
          <div className='loader'>
            <Oval
              height={50}
              width={50}
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel='oval-loading'
              strokeWidth={5}
              strokeWidthSecondary={5}
              color={grayColor}
              secondaryColor={blackColor}
  
            />
          </div> : 
            <Table className='table' columns={columns} dataSource={data} style={{ color: '#4A0D37' }} />
        }
      </div>
      <br />
    </div>
  )
}

export default CusTable
