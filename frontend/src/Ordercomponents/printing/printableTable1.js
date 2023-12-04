import React from "react";
import { Link } from "react-router-dom";
import { FaTimes } from 'react-icons/fa';

const PrintableTable = ({ orders, appName }) => {
  return (
    <div className="printable-table">
      <h2>{appName}</h2>
      <table>
      <thead>
              <tr>
                <th>ID</th>
                <th>USER</th>
                <th>DATE</th>
                <th>ORDER ITEMS</th>
                <th>TOTAL</th>
                <th>PAID</th>
                <th>Order State</th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 ? (
                orders.map((order) => (
                  <tr key={order._id}>
                    <td>{order._id}</td>
                    <td>{order.user.name}</td>
                    <td>{order.createdAt.substring(0, 10)}</td>
                    <td>
                      {order.orderItems.map((item, index) => (
                        <div key={index}>{item.name}</div>
                      ))}
                    </td>
                    <td>Rs.{order.totalPrice}</td>
                    <td>
                      {order.isPaid ? (
                        order.paidAt.substring(0, 10)
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
    </div>
  );
};

export default PrintableTable;
