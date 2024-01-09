import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT || 5000
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api',taskRoutes)


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})