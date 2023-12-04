import {BrowserRouter,Routes,Route} from "react-router-dom"
import Dashboard from "./Orderpages/dashboard/dashboard"
import ManageOrders from "./Orderpages/ManageOrders/ManageOrder";
import OrderDetails from "./Orderpages/Order/OrderDetails";
//import'boostrap/dist/css/bootstrap.min.css';
import CancelledOrders from "./Orderpages/cancelOrder/cancelOrder";


function App() {
  return (
   < BrowserRouter>
     <Routes>
      <Route path="/" element={<Dashboard />}/>
      <Route path="/Manage-Orders" element={<ManageOrders/>}/>
      <Route path="/OrderDetails/:orderId" element={<OrderDetails/>}/>
      <Route path="/Cancel-Orders" element={<CancelledOrders/>}/>

    
     </Routes>
   </BrowserRouter>
  );
}

export default App;
