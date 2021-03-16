import { StockOutlined } from '@ant-design/icons';
import { AutoComplete, Input, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import allStocks from "../constants/allStocks";
import ProfileActions from './ProfileActions';

const { Title } = Typography;
const { Search } = Input;

const CustomHeader = (props) => {

  const onSelect = (value) => {
    let URL = "/stocks/" + value;
    window.location.href = URL;
  };

  return (
    <div style={{ padding: '5px', margin: "0 25%", display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '5px' }}>
        <Link to='/'>
          <Title level={3} style={{ color: '#52c41a' }} >iStocks<StockOutlined /></Title>
        </Link>
      </div>
      <AutoComplete
        options={allStocks}
        onSelect={onSelect}
        filterOption={(inputValue, option) =>
          option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
      >
        <Search style={{ maxWidth: '400px' }} placeholder="input search text" onSearch={onSelect} enterButton />
      </AutoComplete>
      <ProfileActions></ProfileActions>
    </div >
  );
};

export default CustomHeader;
