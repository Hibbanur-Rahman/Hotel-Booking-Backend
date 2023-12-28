const { json } = require('body-parser')
const httpStatusCodes = require('../constants/httpStatusCodes')
const userCollection = require('../models/userModel')
const { getToken } = require('../middlewares/auth')
const bcrypt = require('bcrypt')

module.exports.login = async (req, res) => {
  try {
    if (!req.body) {
      return json({ message: 'Enter the password and email' })
    }

    const data = {
      email: req.body.email,
      password: req.body.password,
    }
    const user = await userCollection.findOne({ email: data.email })

    if (user && (await bcrypt.compare(data.password, user.password))) {
      try {
        const token = await getToken(req, res)
        //console.log(token) // Token is available here

        // Send the token as a cookie and as part of the response
        res.cookie('token', token, { httpOnly: true })

        return res.render('./userDashboard/dashboard',{user});
    
      } catch (error) {
        console.error('Error generating token:', error)
        res.status(500).json({
          success: false,
          message: 'Internal Server Error',
          error: error.message,
        })
      }
    } else {
      // Handle invalid credentials
      res.status(httpStatusCodes.UNAUTHORIZED).json({
        success: false,
        message: 'Invalid email or password',
      })
    }
  } catch (error) {
    console.error('Something went wrong!', error)
    // Respond with an internal server error message
    res.status(httpStatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: 'Internal Server Error',
      error: error.message,
    })
  }
}
