import axios from "axios";
import { toast } from "react-toastify";

export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const getAllOrder = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/orders/AllOrder`);
      return response.data;
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      toast.error(message);
    }
  };
  
  export const getAllCancelledOrders = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/orders/cancelled`); // Make sure this matches your backend route
      return response.data;
    } catch (error) {
      console.error(error);
      throw error; // Handle the error in your component
    }
  };

  //get order by id
  export const OrderById = async (orderId) =>{
    try {
        const response = await axios.get(`${BACKEND_URL}/api/orders/getOrderDetail/${orderId}`)
        return response.data
    }catch(error){
        const message = (error.response && error.response.data && error.response.data.message
            ) || error.message || error.toString()
            toast.error(message)

    }
};

//update order status

// Import axios or your preferred HTTP client library here

// export async function updateOrderStatus(orderId) {
//   try {
//     const response = await axios.put(`/api/orders/${orderId}/status`, {
//       status: "Processing", // Update to your desired status
//     });
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// }


export const ConformOrder = async (orderId) => {
  try {
    const response = await axios.patch(`${BACKEND_URL}/api/orders/Conform/${orderId}`);
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};


export const deleteOrder = async (orderId) =>{
  try {
       await axios.delete(`${BACKEND_URL}/api/orders/removeOrder/${orderId}`)

  }catch(error){
      throw error

  }
};

