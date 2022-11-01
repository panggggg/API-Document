const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const express = require('express')
const helloRoute = require('./routes/hello.js')
const addUser = require('./routes/hello.js')
const redocs = require('./routes/docs')

const app = express()

const swaggerDefinition = {
  "openapi": "3.0.0",
  "schemes": [
    "http",
    "https"
  ],
  "produces": [
    "application/json",
    "text/plain"
  ],
  "consumes": [
    "application/json",
    "text/plain"
  ],
  "info": {
    "title": "Social API",
    "version": "v0.1",
    "description": "The Social API is an HTTP API served by S* Team. เป็น API ที่ไว้ใช้สำหรับเชื่อมต่อกับ Social Network ต่าง ๆ โดยมีการ Format เพื่อป้องกันไม่ให้เกิดความเสียหายของข้อมูล เมื่อทาง Provider เปลี่ยนแปลงข้อมูลโดยไม่แจ้งเตือนล่วงหน้า\n",
    "x-logo": {
      "url": "https://i.pinimg.com/originals/c5/a9/b8/c5a9b84ff1e453186a57b2a493964064.jpg",
      "backgroundColor": "#FFFFFF",
      "altText": "Spider"
    }
  },
  };

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options); // Returns validated Swagger specification in JSON format
console.log(swaggerSpec)

app.get("/hello", (req, res) => {
    res.send("Hello World")
})

app.use('/', helloRoute)
//app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec)); // swagger-ui
app.use('/docs', redocs) // redoc


app.listen(3000, () => {
    console.log("Starting server...")
})