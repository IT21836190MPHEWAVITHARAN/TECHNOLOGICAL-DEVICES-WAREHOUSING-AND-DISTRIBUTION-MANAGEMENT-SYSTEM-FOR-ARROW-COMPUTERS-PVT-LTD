import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ConformOrder, OrderById, deleteOrder } from "../../OrderServices/orderServices";
import { toast } from "react-toastify";
import "./OrderDetails.scss";
import AdminLayout from "../../Ordercomponents/layout/AdminLayout";


const OrderDetails = () => {
  const { orderId } = useParams();
  const navigate = useNavigate()
  const [order, setOrder] = useState(null);
  const [orderConform, setOrderConform] = useState("");
  
  useEffect(() => {
    async function fetchOrderDetails() {
      try {
        const orderData = await OrderById(orderId);
        setOrder(orderData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchOrderDetails();
  }, [orderId]);

  const Conform = async () => {
    try {
      const response = await ConformOrder(orderId);
      setOrderConform(response.order.OrderStatus);
      window.location.reload();
      toast.success("Order confirmed")
    } catch (error) {
      console.error('Error confirming Order:', error);
    }
  };

  const handleRemoveOrder = async () => {
    const confirmDelete = window.confirm('Are you sure you want to remove this Order?');
    if (confirmDelete) {
      try {
        await deleteOrder(orderId);
        toast.success('Order removed successfully!');
        navigate("/Manage-Orders")
      } catch (error) {
        console.log(error);
        toast.error('Failed to remove Order.');
      }
    }
  };

  return (
    <AdminLayout>
   
        <div className="order-details">
        <h2 className="order-details-heading">Order Details</h2>

          {order ? (
            <div >
              <p><strong>Order ID:</strong> {order._id}</p>


              <h3>Order Items:</h3>
              <ul>
                {order.orderItems.map((item, index) => (
                  <li key={index}>
                    <p><strong>Name:</strong> {item.name}</p>
                    <p><strong>Quantity:</strong> {item.qty}</p>
                    
                    <p><strong>Price:</strong> {item.price}</p>
                  </li>
                ))}
              </ul>

              <p><strong>Shipping Address:</strong></p>
              <p><strong>Address: </strong>{order.shippingAddress.address}</p>
              <p><strong>City: </strong>{order.shippingAddress.city}</p>
              <p><strong>District:</strong> {order.shippingAddress.distric}</p>
              <p><strong>Postal Code:</strong> {order.shippingAddress.postalCode}</p>

              <p><strong>Payment Method:</strong> {order.paymentMethod}</p>

              <p><strong>Order Status: </strong>{order.OrderStatus}</p>
              <button onClick={Conform} style={{ backgroundColor: 'green', color: 'white' }}>
               Confirm
              </button>
              <button onClick={handleRemoveOrder} style={{ backgroundColor: 'red', color: 'white' }}>
               Cancel Order
              </button>

            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      
   
    </AdminLayout>
  );
};

export default OrderDetails;
