import jwt from 'jsonwebtoken';

export const auth = (req, res, next) => {
  const token = req.headers.token.split(' ')[1];

  jwt.verify(token, process.env.PrivateKey, function (err, decoded) {
    if (err) {
      res.send(`error in token verification ${err}`);
    }
    console.log(`🚀 ~ decoded:`, decoded);
    res.userCode = decoded.userID;

    if (decoded) {
      next();
    }
    // res.send({ msg: 'decode Data', data: decoded });
  });
};