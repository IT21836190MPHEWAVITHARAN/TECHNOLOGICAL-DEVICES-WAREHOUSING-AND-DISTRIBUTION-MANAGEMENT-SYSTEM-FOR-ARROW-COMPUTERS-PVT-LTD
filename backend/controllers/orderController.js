const asyncHandler = require("express-async-handler")
const Order = require("../models/orderModel");
const CancelledOrder = require("../models/CanceledOrder");

// const getAllCancelOrders=asyncHandler((req,res) =>{
//   try{
//     const canceledOrders = await CancelledOrder.find();
//     res.status(200).json(canceledOrders);
//   }catch(error){
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
// }
// });


const getAllCancellOrders =asyncHandler( async(req, res) => {
  try{
      const canceledOrders = await CancelOrder.find(); 
      res.status(200).json(canceledOrders);

  }catch(error){
      console.error(error);
      res.status(500).json({ message: "Server error" });

  }
  
});

const getAllOrders =asyncHandler( async(req, res) => {
    try{
        const orders = await Order.find(); 
        res.status(200).json(orders);

    }catch(error){
        console.error(error);
        res.status(500).json({ message: "Server error" });

    }
    
  });



  const updateDeliveryStatus = async (req, res) => {
    try{
        const orderId = req.parms.orderId;
        const isDelivered = req.body.isDelivered;

        const order = await Order.findbyId(orderId);

         if (!order){
            return res.status(404).json({message:"order not found"});
         }
       //cheak if isDelivered is set to true
       if(isDelivered){
        order.isDelivered = true;
        order.OrderStatus = "processing";
       }else{
        order.isDelivered=false;
       }

       // save update order
       await order.save();
       res.status(200).json(order);

    }catch (error) {
        console.error(error);
        res.status(500).json({message:"Server error"})
       
    }
  };



  //get order by id 
const getorderByid = asyncHandler(async(req,res)=>{
  try{
      const orderId= req.params.orderId;
      const order = await Order.findById(orderId)

      res.json(order)

  }catch(error){
      res.status(500).json({message:"Does not have details"})
  }
})


//Change Active status
const ChangeOrderStatus = asyncHandler(async (req, res) => {
  const orderId = req.params.orderId;

  try {
    const order = await Order.findById(orderId);
    
    if (!order) {
      return res.status(404).json({ message: 'User not found' });
    }

    order.OrderStatus = "Processing"; // Toggle ActiveStatus

    await order.save();

    res.status(200).json({ message: 'ActiveStatus toggled successfully', order });
  } catch (error) {
    res.status(500).json({ message: 'Error toggling ActiveStatus' });
  }

});


//cancel order
const CancelOrder = asyncHandler(async (req, res) => {
  const orderId = req.params.orderId;
  const orderToCancel = await Order.findById(orderId);

  try {
    // Find the order to be cancelled
    

    if (!orderToCancel) {
      return res.status(404).json({ message: "Order not found" });
    }

    const cancelledOrder = new CancelledOrder({
      user: orderToCancel.user,
      orderItems: orderToCancel.orderItems,
      shippingAddress: orderToCancel.shippingAddress,
      paymentMethod: orderToCancel.paymentMethod,
      paymentResult: orderToCancel.paymentResult,
      itemsPrice: orderToCancel.itemsPrice,
      taxPrice: orderToCancel.taxPrice,
      shippingPrice: orderToCancel.shippingPrice,
      totalPrice: orderToCancel.totalPrice,
      paidAt: orderToCancel.paidAt,
      deliveredAt: orderToCancel.deliveredAt,
      
    });

    // Save the cancelled order
    await cancelledOrder.save();

    await Order.findByIdAndRemove(orderId)


  } catch (error) {
    res.status(500).json({ message: "Can not delete" });
  }

});




  module.exports ={
    getAllOrders,
    getAllCancellOrders,
    updateDeliveryStatus,
    getorderByid,
    ChangeOrderStatus,
    CancelOrder
  };
