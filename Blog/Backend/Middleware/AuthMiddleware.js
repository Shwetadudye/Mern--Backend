import jwt from 'jsonwebtoken';

export const auth = (req, res, next) => {
  const token = req.headers.token.split(' ')[1];
  console.log(`🚀 ~ token:`, token);

  if (token) {
    jwt.verify(token, process.env.PrivateKey, async function (err, decoded) {
      if (err) {
        res.send(`error in token verification ${err}`);
      }

      console.log(`🚀 ~ decoded:`, decoded);
      if (decoded) {
        await (req.userCode = decoded);
        next();
      }
      // res.send({ msg: 'decode Data', data: decoded });
    });
  }
};