import React, { useState } from "react";
import {
  Card,
  CardContent,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

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

const productsData = [
  {
    id: "erizo",
    name: "Erizo",
    description: "Strange look...",
    price: 298,
    image: "/images/erizo.png",
  },
  {
    id: "canario",
    name: "Canario",
    description: "Strange look...",
    price: 298,
    image: "/images/canario.png",
  },
];

export default function Cart() {
  const [cart, setCart] = useState({
    erizo: 3,
    canario: 2,
  });

  const handleIncrease = (id) => {
    setCart((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const handleDecrease = (id) => {
    setCart((prev) => ({ ...prev, [id]: Math.max(0, prev[id] - 1) }));
  };

  const total = productsData.reduce(
    (sum, product) => sum + product.price * (cart[product.id] || 0),
    0
  );

  return (
    <div
      style={{
        backgroundColor: "#212121",
        minHeight: "100vh",
        padding: "32px",
        color: "white",
      }}
    >
      {productsData.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
          quantity={cart[product.id] || 0}
          onIncrease={() => handleIncrease(product.id)}
          onDecrease={() => handleDecrease(product.id)}
        />
      ))}

      <Card sx={{ backgroundColor: "black", p: 4, color: "white", mt: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
          TOTAL:
        </Typography>
        {productsData.map((product) => (
          <div
            key={product.id}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography>{product.name.toUpperCase()}:</Typography>
            <Typography>
              {(product.price * (cart[product.id] || 0)).toLocaleString()}€
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
