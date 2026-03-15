import orderModel from "../models/orderModel";

//place order using cash on delivery
const PlaceOrder = async (req, res) => {
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

}

//user orders data for frontend
const userOrders = async (req, res) => {         

}