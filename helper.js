const swaggerJSDoc = require("swagger-jsdoc");
const YAML = require('yaml')
const fs = require("fs");

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

const swaggerSpec = swaggerJSDoc(options);


fs.writeFile("swagger.json", JSON.stringify(swaggerSpec), () => {
    console.log("Save .json");
});

const doc = new YAML.Document()
doc.contents = swaggerSpec
fs.writeFile("swaggerDefinition.yml", doc.toString(), () => {
  console.log("Save .yml");
});
