require("dotenv").config()
const app = require('./app')
const dbConnect=require('./config/mongo')

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server running. Use our API on port: ${port}`)
})
dbConnect()
