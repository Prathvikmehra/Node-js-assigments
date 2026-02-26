# Node-js-assigments

# Student CGPA API

## Objective
This API manages student CGPA records using an in-memory JSON database.

---

## Implemented Routes

GET /students  
GET /students/topper  
GET /students/average  
GET /students/count  
GET /students/:id  
GET /students/branch/:branchName  

---

## Sample Live URLs

https://node-js-assigments.onrender.com/students  
https://node-js-assigments.onrender.com/students/topper  

---

## Steps to Run Locally

1. Clone repository
2. npm install
3. node server.js

---

## Deployment & Documentation

### 🌐 Render Deployment:
https://node-js-assigments.onrender.com/students

### 📬 Postman Documentation:
https://documenter.getpostman.com/view/50841552/2sBXcGCeJU

///ASSIGMENT-2 overview

E-Commerce Product API
Objective

This API manages e-commerce product records using an in-memory JSON database.

It supports retrieving products, adding new products, and updating product details using REST principles.

Implemented Routes

GET /products
GET /products/:id
GET /products/category/:categoryName

POST /products

PUT /products/:id
PUT /products/:id/stock
PUT /products/:id/price

Sample Live URLs

https://node-js-assigments-2.onrender.com/products

https://node-js-assigments-2.onrender.com/products/1

Steps to Run Locally

Clone repository

npm install

node server.js

Deployment & Documentation

🌐 Render Deployment:
https://node-js-assigments-2.onrender.com/products

📬 Postman Documentation:
https://documenter.getpostman.com/view/50841552/2sBXcGFfiG

If you want, I can also give you a slightly more professional README version (for placements + portfolio) while still keeping your format.

make it same as i showed you i cant even tell teh diffrenece 

Got it ✅
Here is your README written exactly in the same structure and wording style as your first assignment:

E-Commerce Product API
Objective

This API manages product records using an in-memory JSON database.

Implemented Routes

GET /products
GET /products/:id
GET /products/category/:categoryName
POST /products
PUT /products/:id
PUT /products/:id/stock
PUT /products/:id/price

Sample Live URLs

https://node-js-assigments-2.onrender.com/products

https://node-js-assigments-2.onrender.com/products/1

Steps to Run Locally

Clone repository
npm install
node server.js

Deployment & Documentation

🌐 Render Deployment:
https://node-js-assigments-2.onrender.com/products

📬 Postman Documentation:
https://documenter.getpostman.com/view/50841552/2sBXcGFfiG


///ASSIGMENT-3 Overview

State Statistics Management API

This is a RESTful API built with Node.js and Express to manage statistical data of Indian states using an in-memory JSON array (no database). All CRUD operations are implemented including full and partial updates, filtering logic, and multiple delete endpoints.

🚀 Live API

🔗 https://node-js-assigments-4.onrender.com/states

📘 API Documentation

Complete route documentation with sample requests and responses:

🔗 https://documenter.getpostman.com/view/50841552/2sBXcHgxzR

✅ Features

GET all states or by ID

GET state with highest GDP

POST to add a new state

PUT to replace full state or specific fields

PATCH for partial updates

DELETE by ID, name, or low-literacy threshold

Proper use of HTTP status codes

CORS and JSON middleware enabled

This project demonstrates understanding of Express routing, RESTful design, dynamic array manipulation, and correct handling of different HTTP methods.