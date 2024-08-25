const jwt = require("jsonwebtoken");

const verifytoken = async (req, res, next) => {
  const token = req.headers("Authorization").replace("Bearer ", "");
  if (!token) return res.status(403).json({ message: "Token is required" });

  try {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ sucess: false, message: "forbidden" });
      }
      req.id = user.id;
      req.author = user.author , 
      req.accountType = user.accountType ,
      next();
    });
  } catch (error) {
    return res.status(403).json({ message: "internal server error" });
  }
};
