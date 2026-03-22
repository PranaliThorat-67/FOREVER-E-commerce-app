import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

//place order using cash on delivery
const placeOrder = async (req, res) => {
    try {

        const {userId, items, amount, address} = req.body;

        const orderData = new orderModel({
            userId,
            items,
            amount,
            address,
            paymentMethod: 'cod',
            paymentStatus: false,
            date: Date.now()
        })

        const newOrder = orderModel(orderData);
        await newOrder.save();

        await userModel.findByIdAndUpdate(userId, {cartData: {}});

        res.json({success: true, message: "Order placed successfully"});
        
    }   catch (error) { 
        res.status(500).json({success: false, message: error.message});
    }
}

//place order using stripe payment
const placeOrderStripe = async (req, res) => {         


}

//place order using razorpay payment
const placeOrderRazorpay = async (req, res) => {         

}


//all orders data for admin panel
const allOrders = async (req, res) => {         
    try {
        const orders = await orderModel.find({})
        res.json({success: true, orders});  
        
    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
}

//user orders data for frontend
const userOrders = async (req, res) => {         

    try {

        const { userId } = req.body;

        const orders = await orderModel.find({userId})
        res.json({success: true, orders});

    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
}

//update order status by admin
const updateOrderStatus = async (req, res) => { 

}

//list orders for admin panel
const listOrders = async (req, res) => {    

}


export {placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateOrderStatus, listOrders};