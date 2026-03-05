import React, { useState } from "react";

const products = [
  { id: 1, name: "Classic Vanilla Marshmallows", price: 50 },
  { id: 2, name: "Chocolate Dipped Marshmallows", price: 65 },
  { id: 3, name: "Strawberry Marshmallows", price: 60 },
  { id: 4, name: "Homemade Fudge", price: 70 },
  { id: 5, name: "Caramel Toffee Bites", price: 55 }
];

export default function MarshmallowStore() {
  const [cart, setCart] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{fontFamily:"Arial", padding:"20px", background:"#ffe4f0", minHeight:"100vh"}}>

      <header style={{display:"flex", justifyContent:"space-between"}}>
        <h1>The Marshmallow Sweet Store</h1>

        <button onClick={()=>setShowCheckout(true)}>
          Cart ({cart.length})
        </button>
      </header>

      <img
        src="marshmallows.jpg"
        alt="marshmallows"
        style={{width:"100%", maxHeight:"300px", objectFit:"cover", marginTop:"20px"}}
      />

      <h2 style={{marginTop:"30px"}}>
        Handmade Marshmallows & Homemade Sweets
      </h2>

      <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"20px"}}>

        {products.map((product)=>(
          <div key={product.id}
            style={{background:"white", padding:"15px", borderRadius:"10px"}}
          >

            <h3>{product.name}</h3>
            <p>R{product.price}</p>

            <button onClick={()=>addToCart(product)}>
              Add to Cart
            </button>

          </div>
        ))}

      </div>

      {showCheckout && (

        <div style={{
          position:"fixed",
          top:0,
          left:0,
          right:0,
          bottom:0,
          background:"rgba(0,0,0,0.5)",
          display:"flex",
          justifyContent:"center",
          alignItems:"center"
        }}>

          <div style={{background:"white", padding:"30px", borderRadius:"10px"}}>

            <h2>Checkout</h2>

            <p>Total: R{total}</p>

            <button>Pay with PayFast</button>
            <br/><br/>

            <button>Pay with PayPal</button>
            <br/><br/>

            <button>Pay with Stripe</button>
            <br/><br/>

            <button onClick={()=>setShowCheckout(false)}>
              Close
            </button>

          </div>

        </div>

      )}

      <a
        href="https://wa.me/27000000000"
        style={{
          position:"fixed",
          bottom:"20px",
          right:"20px",
          background:"green",
          color:"white",
          padding:"15px",
          borderRadius:"50px",
          textDecoration:"none"
        }}
      >
        Order on WhatsApp
      </a>

      <footer style={{marginTop:"60px"}}>
        <p>© 2026 The Marshmallow Sweet Store</p>
      </footer>

    </div>
  );
}