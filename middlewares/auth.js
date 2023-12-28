const jwt = require('jsonwebtoken')
//const { model } = require('mongoose')
const secretKey = 'Khan@123'


async function getToken(req, res){
    const user = req.body;
    const token = await jwt.sign({ user }, secretKey, { expiresIn: '500s'});
    console.log(token);
    return token;
}

async function verifyToken(req, res, next) {
  const token = req.cookies.token // Assuming the token is stored in a cookie named 'token'

  try {
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized: Token not provided',
      })
    }

    const decoded = await jwt.verify(token, secretKey)
    req.user = decoded.user // You can access the user data in your routes

    next()
  } catch (error) {
    console.error('Error verifying token:', error)
    return res.status(401).json({
      success: false,
      message: 'Unauthorized: Invalid token',
    })
  }
}

module.exports = {
    getToken,
    verifyToken,
}