require("dotenv").config();

module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: null,
  DB: "dicedreams",
  // dialect: "mysql",
  dialect: "mysql",
  pool: {
    max: 5, // จำนวนสูงสุดของ connection ใน pool
    min: 0, // จำนวนต่ำสุดของ connection ใน pool
    acquire: 30000, // ระยะเวลาสูงสุดในการพยายามเชื่อมต่อก่อนจะขึ้นข้อผิดพลาด
    idle: 10000 // ระยะเวลาสูงสุดที่ connection สามารถว่างได้ก่อนจะถูกปิด
  },
};