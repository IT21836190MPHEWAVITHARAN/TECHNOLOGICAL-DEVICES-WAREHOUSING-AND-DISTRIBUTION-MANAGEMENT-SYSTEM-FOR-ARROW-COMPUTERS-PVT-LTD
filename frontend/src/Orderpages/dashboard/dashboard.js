


import React, { useEffect, useState } from "react";
import { getAllOrder } from "../../OrderServices/orderServices";
import "./dashboard.scss";
import AdminLayout from "../../Ordercomponents/layout/AdminLayout";

// const Dashboard = () => {
//   const [orders, setOrders] = useState(null);
//   const [totalOrders, setTotalOrders] = useState(0); // State to store total orders
//   const [pendingOrders, setPendingOrders] = useState(0);
//   const [processingOrders, setProcessingOrders] = useState(0);

//   useEffect(() => {
//     async function getOrders() {
//       const data = await getAllOrder();
//       setOrders(data);
//       setTotalOrders(data.length); // Calculate total orders

//       // Filter orders based on their order state
//       const pendingOrdersCount = data.filter(
//         (order) => order.OrderStatus === "Pending"
//       ).length;
//       setPendingOrders(pendingOrdersCount);

//       const processingOrdersCount = data.filter(
//         (order) => order.OrderStatus === "Processing"
//       ).length;
//       setProcessingOrders(processingOrdersCount);

//     }

//     getOrders();
//   }, []);

//   return (
//     <AdminLayout>
//        <h1>ORDER DASHBOARD</h1>
//        <br/>
//        <br/>
       
  
//        <div className="c1">
//        <div className="total-orders-box">
//     <h2>Total Orders</h2>
//     <p>{totalOrders}</p>

//   </div>
//   <div className="pending-orders-box">
//   <h2>Pending Orders</h2>
//     <p>{pendingOrders}</p>
//     </div>
//     <div className="processing-orders-box">
//     <h2>Processing Orders</h2>
//     <p>{processingOrders}</p>
//     </div>
//   </div>



    
        
//       <table className="t1" >
//         <thead>
//           <tr>
//           <th className="table-header">Order ID</th>
// <th className="table-header">DATE</th>
// <th className="table-header">Order State:</th>
// <th className="table-header">TOTAL PRICE</th>

//           </tr>
//         </thead>
//         <tbody>
//           {orders !== null ? (
//             orders.map((order) => (
//               <tr key={order._id}>
//                 <td>{order._id}</td>
//                 <td>{order.createdAt.substring(0, 10)}</td>
//                 <td>{order.OrderStatus}</td>
//                 <td>{order.totalPrice}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="5">Loading...</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
   
    
      
//       </AdminLayout>
   
//   );
// };

// export default Dashboard;
const Dashboard = () => {
  const [orders, setOrders] = useState(null);
  const [totalOrders, setTotalOrders] = useState(0); // State to store total orders
  const [pendingOrders, setPendingOrders] = useState(0);
  const [processingOrders, setProcessingOrders] = useState(0);

  useEffect(() => {
    async function getOrders() {
      const data = await getAllOrder();
      setOrders(data);
      setTotalOrders(data.length); // Calculate total orders

      // Filter orders based on their order state
      const pendingOrdersCount = data.filter(
        (order) => order.OrderStatus === "pending"
      ).length;
      setPendingOrders(pendingOrdersCount);

      const processingOrdersCount = data.filter(
        (order) => order.OrderStatus === "Processing"
      ).length;
      setProcessingOrders(processingOrdersCount);

    }

    getOrders();
  }, []);

  return (
    <AdminLayout>
       <h1>ORDER DASHBOARD</h1>
       <br/>
       <br/>
       
  
       <div className="c1">
       <div className="total-orders-box">
    <h2>Total Orders</h2>
    <p>{totalOrders}</p>

  </div>
  <div className="pending-orders-box">
  <h2>Pending Orders</h2>
    <p>{pendingOrders}</p>
    </div>
    <div className="processing-orders-box">
    <h2>Processing Orders</h2>
    <p>{processingOrders}</p>
    </div>
  </div>



    
        
      <table className="t1" >
        <thead>
          <tr>
          <th className="table-header">Order ID</th>
<th className="table-header">DATE</th>
<th className="table-header">Order State:</th>
<th className="table-header">TOTAL PRICE</th>

          </tr>
        </thead>
        <tbody>
          {orders !== null ? (
            orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>{order.OrderStatus}</td>
                <td>{order.totalPrice}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">Loading...</td>
            </tr>
          )}
        </tbody>
      </table>
   
    
      
      </AdminLayout>
   
  );
};

export default Dashboard;
