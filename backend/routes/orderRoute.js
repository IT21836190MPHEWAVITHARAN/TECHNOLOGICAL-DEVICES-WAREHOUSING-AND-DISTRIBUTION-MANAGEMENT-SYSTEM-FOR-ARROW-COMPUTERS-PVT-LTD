const express = require("express");
const router = express.Router();
const {  getAllOrders,getAllCancellOrders, updateDeliveryStatus, deleteOrder,getorderByid, ChangeOrderStatus , CancelOrder} = require("../controllers/orderController");




// Route for retrieving all orders
router.get("/AllOrder", getAllOrders);
router.get("/AllCancelOrders",getAllCancellOrders)


// Register the middleware for handling order update (PUT)
router.put("/:orderId", updateDeliveryStatus);

// Register the middleware for handling order deletion (DELETE)
router.get("/getOrderDetail/:orderId",getorderByid)
router.patch("/Conform/:orderId",ChangeOrderStatus);
router.delete("/removeOrder/:orderId",CancelOrder)

module.exports = router;
