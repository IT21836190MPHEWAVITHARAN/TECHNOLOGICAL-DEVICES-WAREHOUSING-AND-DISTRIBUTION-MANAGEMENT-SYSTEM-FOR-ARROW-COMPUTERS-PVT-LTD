import React, { useEffect, useState } from "react";
import { getAllOrder } from "../../OrderServices/orderServices";
import { Link } from "react-router-dom";
import { FaTimes } from 'react-icons/fa';
import "./ManageOrder.scss";
// import Search from "../../components/search/Search";
import PrintableTable from "../../Ordercomponents/printing/printableTable1";
import ReactToPrint from 'react-to-print';
import AdminLayout from "../../Ordercomponents/layout/AdminLayout";


const ManageOrders = () => {
  const [orders, setOrders] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function getOrders() {
      const data = await getAllOrder();
      setOrders(data);
    }

    getOrders();
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const filteredOrders = orders !== null
    ? orders.filter(order =>
      order._id && order._id.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : [];

  return (
    <AdminLayout>
      <h1>Manage Orders </h1>
    <div>
      <ReactToPrint
        content={() => <PrintableTable orders={filteredOrders} />}
      />
      <div><br/>
     
        <input
          className="search-input"
          type="text"
          placeholder="Search Order"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div>
          <br/>
          
          <table className="t2">
            <thead>
              <tr>
                <th>ID</th>
                <th>DATE</th>
                <th>ORDER ITEMS</th>
                <th>TOTAL</th>
                <th>PAID</th>
                <th>Order State</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => (
                  <tr key={order._id}>
                    <td>{order._id}</td>
                    <td>{order.createdAt.substring(0, 10)}</td>
                    <td>
                      {order.orderItems.map((item, index) => (
                        <div key={index}>{item.name}</div>
                      ))}
                    </td>
                    <td>Rs.{order.totalPrice}</td>
                    <td>
                      {order.isPaid ? (
                        <FaTimes style={{ color: 'green' }}/>
                      ) : (
                        <FaTimes style={{ color: 'red' }} />
                      )}
                    </td>
                    <td>{order.OrderStatus}</td>
                    <td>
                      <Link to={`/OrderDetails/${order._id}`}>
                        <button className="ew">VIEW</button>
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">No matching orders found.</td>
                </tr>
              )}
            </tbody>
          </table>
          <br/><br/><br/>
        </div>
      </div>
      <button  className="b4" onClick={handlePrint}>Print Table</button>
    </div>
    </AdminLayout>
  );
};

export default ManageOrders;
