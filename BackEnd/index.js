const express = require("express");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/userRoutes");
require("dotenv").config();

const app = express();

// regular middleware
//  Middleware này sẽ phân tích cú pháp (parse) cơ thể của các yêu cầu HTTP
//có định dạng JSON và chuyển nó thành một đối tượng JavaScript
app.use(express.json());
// Middleware này sẽ phân tích cú pháp cơ thể của các yêu cầu HTTP
//được mã hóa dưới dạng "x-www-form-urlencoded" (đây là dạng mặc định khi gửi dữ liệu từ một biểu mẫu HTML)
app.use(express.urlencoded({ extended: true }));

// cookie middleware
app.use(cookieParser());
app.use("/api", userRouter);

app.get("/", (req, res) => {
  res.send("Hi from youtube live");
});

app.listen(3000, () => {
  console.log("server is running on port 3000 ");
});
