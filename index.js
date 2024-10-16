const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')

const app=express()
const productRoutes=require('./productRoutes.js')
const port=8080
app.use(cors())
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/')
.then(()=> console.log("mongodb connected successfully"))
.catch(()=> console.log("error connecting to mongodb"))

app.use('/products',productRoutes)
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});