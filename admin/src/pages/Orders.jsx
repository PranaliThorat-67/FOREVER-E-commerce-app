import React from 'react'
import { useEffect } from 'react';
import { backendUrl } from '../App';
import axios from 'axios';
import { useState } from 'react';
import { useContext } from 'react';

const orders = ({token}) => {
  const [orders, setOrders] = useState([]);


  const fetchAllOrders = async () => {
    if(!token) {
      return null;
    }

    try {

      const response = await axios.post(backendUrl + '/api/order/admin/listOrders')
      console.log(response.data);

    } catch(error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, [token])

}



const Orders = () => {
  return (
    <div>
      
    </div>
  )
}

export default Orders
