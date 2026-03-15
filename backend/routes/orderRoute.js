import express from 'express';
import adminAuth from '../middleware/adminAuth.js';
import authUser from '../middleware/auth.js';
import { listOrders, updateOrderStatus, placeOrder, placeOrderStripe, placeOrderRazorpay, userOrders, allOrders } from '../controllers/orderController.js';

const orderRouter = express.Router();

//admin routes
orderRouter.post('/admin/list', adminAuth, listOrders);
orderRouter.post('/admin/status', adminAuth, updateOrderStatus);

//payment routes
orderRouter.post('/place', authUser, placeOrder);
orderRouter.post('/stripe', authUser, placeOrderStripe);
orderRouter.post('/razorpay', authUser, placeOrderRazorpay);

//user routes
orderRouter.post('/userOrders', authUser, userOrders);

export default orderRouter;