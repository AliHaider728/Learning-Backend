import express from 'express'

import path from 'path'

// Making Server in Express js 
const app =express()
const port = 5000 
app.listen(port,()=>{
console.log(`Server  is running on port ${port}`)
})
// Routeing in Express js 
//CURD in node js 

// Create = POST (METHOD)
// READ = GET (METHOS)
// UPDATE = PUT (METHOD)
// DELETE = DELETE (METHOD)
// jaab ap data recive kr rahy ho tu get method use kry gy aghr bhjna ha tu Post method use kry gy 
// app.get('/',(req,res)=>{
// //    res.send("<h1>This Is Home Route</h1>")
// //   res.json({
// //   "users": [
// //     {
// //       "id": 1,
// //       "name": "Ali Haider",
// //       "email": "alihaider@example.com",
// //       "age": 24,
// //       "country": "Pakistan",
// //       "isActive": true
// //     },
// //     {
// //       "id": 2,
// //       "name": "Sarah Khan",
// //       "email": "sarah.khan@example.com",
// //       "age": 27,
// //       "country": "UAE",
// //       "isActive": false
// //     },
// //     {
// //       "id": 3,
// //       "name": "John Smith",
// //       "email": "john.smith@example.com",
// //       "age": 31,
// //       "country": "USA",
// //       "isActive": true
// //     },
// //     {
// //       "id": 4,
// //       "name": "Fatima Noor",
// //       "email": "fatima.noor@example.com",
// //       "age": 29,
// //       "country": "Pakistan",
// //       "isActive": true
// //     },
// //     {
// //       "id": 5,
// //       "name": "David Lee",
// //       "email": "david.lee@example.com",
// //       "age": 22,
// //       "country": "Canada",
// //       "isActive": false
// //     }
// //   ]
// // }
// // )
// // res.json({author: "Ali Haider",license: "ISC",})
// // console.log(path.resolve())

// })
// remember jab ma data json ma bhjty ha tu wo convert ho jata ha api ma ab ya route ni raha ha ab ya ak api ha 

// app.get('/about',(req,res)=>{
//     res.send("<h1>This Is About Page </h1>")
// })

// also remeber k ham res.json ya res.send etc ak time ma ak hi chala sakty ha 
// aghr 2/3 chalny ha tu simple ya ha os ka alda route bana ly 

// path module in express 
// path ma method hoty ha 
app.get('/',  (req,res)=>{
const dir = path.resolve()
const url = path.join(dir,"./randomContent.html")
res.sendFile(url)
 
})