// console.log("hello world ")
// const http = require("http")
import http from 'http'
//import export
import { minas, Multiply, sum } from './app.js'
//fs module file system in nodejs
import fs from 'fs'
// path moduls in node js 
import path from 'path'
//  Creating Server in node js  basic 
//  const server = http.createServer()
//  server.listen(1000, ()=>{
//     console.log("server is running ")
//  })

// Creating Server in node js  ES6

const Server = http.createServer()
const port = 2000
Server.listen(port , ()=>{
   console.log( `Server Is Runing on Port  ${port}`)
})


// sum (100 , 30)
// Multiply (100 , 30)
// minas (100 , 30)

// console.log(fs)
// fs read file
// const fileRead = fs.readFileSync("./index.py" , "utf-8")
// console.log(fileRead)
// fs create file 
// const content =  "this is new file content"
// fs.writeFile('index.java',content, ()=>{
//    console.log("file created succesfully")
// } )