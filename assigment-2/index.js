const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());   


const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 799,
    stock: 25,
    rating: 4.3
  },
  {
    id: 2,
    name: "Running Shoes",
    category: "Footwear",
    price: 2499,
    stock: 40,
    rating: 4.5
  },
  {
    id: 3,
    name: "Laptop Stand",
    category: "Accessories",
    price: 999,
    stock: 30,
    rating: 4.2
  },
  {
    id: 4,
    name: "Smart Watch",
    category: "Electronics",
    price: 4999,
    stock: 12,
    rating: 4.4
  },
  {
    id: 5,
    name: "Backpack",
    category: "Fashion",
    price: 1599,
    stock: 50,
    rating: 4.1
  }
];


app.get("/products", (req, res) => {
  res.status(200).json(products);
});

app.get("/products/:id",(req, res)=>{
    const id = products.find(s=>s.id == req.params.id);
    if(!id){
        res.status(404).json({message:"No product found"});
    }
    res.status(200).json(id);
})

app.get("/products/category/:categoryName",(req, res)=>{
    const category = products.find(s=>s.category.toLocaleLowerCase() == req.params.categoryName.toLocaleLowerCase());
    if(!category){
        res.status(404).json({message:"No product found"});
    }
    res.status(200).json(category);
})

app.post("/products", (req, res) => {
  const { id,name, category, price, stock, rating } = req.body;
  if ( !id || !name || !category || !price || !stock || !rating ) {
    return res.status(400).json({ message: "All fields required" });
  }
  products.push({ id, name, category, price, stock, rating });
  res.status(201).json({
    message: "product added successfully",
    products: req.body
  });
});


app.put("/products/:id", (req, res) => {

    const index = products.findIndex(p => p.id == req.params.id);

    if (index === -1) {
        return res.status(404).json({ message: "No product found" });
    }
    products[index] = {...products[index],...req.body};
    res.status(200).json({
        message: "Product changed successfully",
        product: products[index]
    });
});

app.put("/products/:id/stock", (req, res) => {

    const index = products.findIndex(p => p.id == req.params.id);
    if (index == -1) {
        return res.status(404).json({ message: "No product found" });
    }
    const { stock } = req.body;
    if (stock == undefined) {
        return res.status(400).json({ message: "Stock value is required" });
    }
    products[index].stock = stock;
    res.status(200).json({
        message: "Stock updated successfully",
        product: products[index]
    });
});

app.put("/products/:id/price", (req, res) => {

    const index = products.findIndex(p => p.id == req.params.id);
    if (index == -1) {
        return res.status(404).json({ message: "No product found" });
    }
    const { price } = req.body;
    if (price == undefined) {
        return res.status(400).json({ message: "price value is required" });
    }
    products[index].price = price;
    res.status(200).json({
        message: "price updated successfully",
        product: products[index]
    });
});




app.listen(5000, () => {
  console.log("Server started on port 5000");
});