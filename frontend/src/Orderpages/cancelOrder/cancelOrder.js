// import React,{useEffect,useState} from "react";
// // import { getAllCancelOrders } from "../../Services/orderServices";
// import { getAllCancelledOrders } from "../../OrderServices/orderServices";

// import "./cancelOrder.scss";
// import AdminLayout from "../../Ordercomponents/layout/AdminLayout";


// const CancelledOrders = () => {
//   const [orders, setOrders] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");
//   const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
//     const timeOptions = { hour: '2-digit', minute: '2-digit' };

//   useEffect(() => {
//     async function getOrders() {
//       const data = await getAllCancelledOrders();
//       setOrders(data);
//     }

//     getOrders();
//   }, []);


//   const filteredOrders = orders !== null
//     ? orders.filter((order) =>
//       order._id.toLowerCase().includes(searchQuery.toLowerCase())
//     )
//     : [];

//   return (
//     <AdminLayout>
//       <h1>Cancel Orders </h1>
//     <div>
     
//       <div><br/>
     
//         <input
//           className="search-input"
//           type="text"
//           placeholder="Search Order"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <div>
//           <br/>
          
//           <table className="t2">
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>DATE</th>
//                 <th>ORDER ITEMS</th>
//                 <th>TOTAL</th>
//               </tr>
//             </thead>
//             <tbody>
//             {filteredOrders.length > 0 ? (
//               filteredOrders.map((order) => (
//                 <tr key={order._id}>
//                   <td>{order._id}</td>
//                   <td>{order.dltDate}</td>
//                   <td>
//                     {order.orderItems.map((item, index) => (
//                       <div key={index}>Item name:{item.name}<br/>
//                      <b> Quantity:{item.qty}</b></div>
                      
//                     ))}
//                   </td>
//                   <td>Rs.{order.totalPrice}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5">No matching orders found.</td>
//               </tr>
//             )}
//             </tbody>
//           </table>
//           <br/><br/><br/>
//         </div>
//       </div>
      
//     </div>
//     </AdminLayout>
//   );




// }
// export default CancelledOrders;
import React, { useEffect, useState } from "react";
import { getAllCancelledOrders } from "../../OrderServices/orderServices";
import "./cancelOrder.scss";
import AdminLayout from "../../Ordercomponents/layout/AdminLayout";

const CancelledOrders = () => {
  const [orders, setOrders] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function getOrders() {
      try {
        const data = await getAllCancelledOrders();
        setOrders(data);
      } catch (error) {
        console.error("Error fetching cancelled orders:", error);
      }
    }

    getOrders();
  }, []);

  const filteredOrders = orders !== null
    ? orders.filter((order) =>
      order._id.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : [];

  return (
    <AdminLayout>
      <h1>Cancel Orders</h1>
      <div>
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
                </tr>
              </thead>
              <tbody>
                {filteredOrders.length > 0 ? (
                  filteredOrders.map((order) => (
                    <tr key={order._id}>
                      <td>{order._id}</td>
                      <td>{order.dltDate}</td>
                      <td>
                        {order.orderItems.map((item, index) => (
                          <div key={index}>Item name: {item.name}<br/>
                            <b> Quantity: {item.qty}</b>
                          </div>
                        ))}
                      </td>
                      <td>Rs.{order.totalPrice}</td>
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
      </div>
    </AdminLayout>
  );
}

export default CancelledOrders;
