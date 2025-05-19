import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Header from "../../02-Components/Header/Header";

const ProductCard = ({
  name,
  description,
  price,
  quantity,
  image,
  onIncrease,
  onDecrease,
}) => {
  return (
    <Card
      sx={{
        backgroundColor: "black",
        color: "white",
        my: 2,
        p: 2,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <CardContent sx={{ flex: 1 }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", textTransform: "uppercase" }}
        >
          {name}
        </Typography>
        <Typography sx={{ color: "red", fontWeight: "bold", mt: 2 }}>
          DESCRIPTION:
        </Typography>
        <Typography variant="body2" sx={{ color: "gray", mb: 4 }}>
          {description}
        </Typography>
        <Typography sx={{ color: "red", fontWeight: "bold" }}>
          PRICE:
        </Typography>
        <Typography variant="h6">
          {price.toLocaleString()}€ x {quantity} ={" "}
          {(price * quantity).toLocaleString()}€
        </Typography>
      </CardContent>
      <div
        style={{
          textAlign: "center",
          flexDirection: "column",
          alignItems: "center",
          display: "flex",
        }}
      >
        <img
          src={image}
          alt={name}
          style={{
            width: "128px",
            height: "128px",
            objectFit: "contain",
            marginBottom: "16px",
          }}
        />
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <IconButton color="error" onClick={onIncrease}>
            <AddIcon />
          </IconButton>
          <Typography variant="h6">{quantity}</Typography>
          <IconButton color="error" onClick={onDecrease}>
            <RemoveIcon />
          </IconButton>
        </div>
      </div>
    </Card>
  );
};

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const token = localStorage.getItem("accessToken");

        if (!token) {
          throw new Error("No auth token found. Please log in.");
        }

        const response = await fetch("http://127.0.0.1:8000/cart/my-cart/", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();

        console.log("Cart API response:", data);
        if (!response.ok) {
          throw new Error(data.detail || "Failed to fetch cart");
        }

        setCartItems(data.items);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchCart();
  }, []);

  const handleIncrease = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === id
          ? { ...item, quantity: Math.max(0, item.quantity - 1) }
          : item
      )
    );
  };

  const total = Array.isArray(cartItems)
    ? cartItems.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
      )
    : 0;

  return (
    <div
      style={{
        backgroundColor: "#212121",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <Header />

      {cartItems.map((item) => (
        <ProductCard
          key={item.product.id}
          name={item.product.name}
          description={item.product.description}
          price={item.product.price}
          quantity={item.quantity}
          image={`http://127.0.0.1:8000${item.product.image}`}
          onIncrease={() => handleIncrease(item.product.id)}
          onDecrease={() => handleDecrease(item.product.id)}
        />
      ))}

      <Card sx={{ backgroundColor: "black", p: 4, color: "white", mt: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
          TOTAL:
        </Typography>
        {cartItems.map((item) => (
          <div
            key={item.product.id}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography>{item.product.name.toUpperCase()}:</Typography>
            <Typography>
              {(item.product.price * item.quantity).toLocaleString()}€
            </Typography>
          </div>
        ))}
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            backgroundColor: "red",
            borderRadius: "12px",
            mt: 4,
            padding: "16px",
          }}
        >
          {total.toLocaleString()}€
        </Typography>
        <div style={{ textAlign: "center", marginTop: "16px" }}>
          <Button
            variant="contained"
            color="error"
            sx={{ padding: "10px 20px" }}
          >
            BUY
          </Button>
        </div>
      </Card>
    </div>
  );
}
