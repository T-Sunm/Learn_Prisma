const getJwtToken = require("../helpers/get_JwtToken");
const cookieToken = (user, res) => {
  const token = getJwtToken(user.id);
  const options = {
    expires: new Date(Date.now() + 60 * 60 * 1000),
    // httpOnly: Đặt cookie ở chế độ "chỉ HTTP",
    //điều này ngăn cookie không được truy cập qua JavaScript trên trình duyệt.
    httpOnly: true,
  };
  //   set pass của user là undifined cả gửi lên client là bị lộ
  user.password = undefined;
  // set coookie
  res
    .status(200)
    .cookie("token", token, options)
    .json({ success: true, token, user });
};
module.exports = cookieToken;
