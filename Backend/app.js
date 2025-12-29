// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const Stripe = require('stripe');

// // dotenv midleware
// dotenv.config();
// const app = express();
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// //Aloow frontend  origin 
// app.use(cors({ origin : process.env.CLIENT_URL,}))

// app.use(express.json());

// //Checkout api
// app.post('/create-checkout-session', async(req,res)=>{
//  try{
//  const { product } = req.body;
//  const session =  await stripe.checkout.sessions.create({
//    payment_method_types : ['card'],
//    line_items: [ {
//  price_data:{
//     currency: 'usd',
//     product_data :{
//         name : product.name,
//         images: [product.image],
//     },
//     unit_amount :  product.price * 100,
//  },
// quantity: 1,


//    } ],
//    mode : 'payment',
//    success_url: `${process.env.CLIENT_URL}/success`,
//    cancel_url:  `${process.env.CLIENT_URL}/cancel`

//  })
// res.json({ url: session.url});
//  }catch(error){
//     res.status(500).json({ error: error.message})
//  }
// })
// app.listen(4000,()=>{
//     console.log("BAckend is running succesfully");
    
// })



const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const Stripe = require("stripe");

// Load env variables
dotenv.config();

const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Middleware
app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(express.json());

// Checkout API
app.post("/create-checkout-session", async (req, res) => {
  try {
    const { product } = req.body;
    if (!product) return res.status(400).json({ error: "Product info required" });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: product.name,
              images: [product.img],
            },
            unit_amount: Math.round(product.price * 100),
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}/success`,
      cancel_url: `${process.env.CLIENT_URL}/cancel`,
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("Stripe Checkout Error:", error);
    res.status(500).json({ error: error.message });
  }
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));

