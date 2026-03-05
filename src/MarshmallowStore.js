import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Truck, Store, MessageCircle } from "lucide-react";

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
  const [delivery, setDelivery] = useState("delivery");

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-pink-50 p-6">

      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">
          The Marshmallow Sweet Store
        </h1>

        <Button
          onClick={() => setShowCheckout(true)}
          className="flex gap-2 items-center"
        >
          <ShoppingCart size={18}/> ({cart.length}) Cart
        </Button>
      </header>

      {/* Hero Image */}
      <div className="mb-10 rounded-2xl overflow-hidden shadow-lg">
        <img
          src="/images/marshmallows.jpg"
          alt="Marshmallow sweets"
          className="w-full h-[320px] object-cover"
        />
      </div>

      {/* Store Intro */}
      <section className="text-center mb-10">
        <h2 className="text-2xl font-semibold">
          Handmade Marshmallows & Homemade Sweets
        </h2>
        <p className="text-gray-600">
          Fresh fluffy marshmallows and delicious treats made with love.
        </p>
      </section>

      {/* Product Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="rounded-2xl shadow-md">
            <CardContent className="p-5">
              <h3 className="text-lg font-semibold">
                {product.name}
              </h3>

              <p className="text-pink-600 font-bold">
                R{product.price}
              </p>

              <Button
                className="mt-3 w-full"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* WhatsApp Order Button */}
      <div className="fixed bottom-6 right-6">
        <a href="https://wa.me/27000000000" target="_blank">
          <Button className="rounded-full shadow-lg flex gap-2">
            <MessageCircle size={18}/>
            Order on WhatsApp
          </Button>
        </a>
      </div>

      {/* Checkout */}
      {showCheckout && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-6">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">

            <h2 className="text-xl font-bold mb-4">
              Checkout
            </h2>

            {/* Delivery Options */}
            <div className="mb-4">
              <h3 className="font-semibold mb-2">
                Delivery Option
              </h3>

              <div className="flex gap-3">

                <Button
                  variant={delivery === "delivery" ? "default" : "outline"}
                  onClick={() => setDelivery("delivery")}
                  className="flex gap-2"
                >
                  <Truck size={16}/>
                  Delivery
                </Button>

                <Button
                  variant={delivery === "pickup" ? "default" : "outline"}
                  onClick={() => setDelivery("pickup")}
                  className="flex gap-2"
                >
                  <Store size={16}/>
                  Pickup
                </Button>

              </div>
            </div>

            {/* Total */}
            <div className="mb-4">
              <p className="font-semibold">
                Total: R{total}
              </p>
            </div>

            {/* Payment Buttons */}
            <div className="space-y-2">
              <Button className="w-full">
                Pay with PayFast
              </Button>

              <Button className="w-full">
                Pay with PayPal
              </Button>

              <Button className="w-full">
                Pay with Stripe
              </Button>
            </div>

            <Button
              variant="outline"
              className="w-full mt-4"
              onClick={() => setShowCheckout(false)}
            >
              Close
            </Button>

          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="text-center mt-16 text-gray-500">
        <p>
          © {new Date().getFullYear()} The Marshmallow Sweet Store
        </p>

        <p>
          Homemade sweets • Order online • Delivery or pickup
        </p>
      </footer>

    </div>
  );
}
