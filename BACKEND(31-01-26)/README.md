1.Generate package.js
      npm init -y
2. create server.js

3.install,import "express" and create HTTP server.Assign port

### coonect MongoDB database


    REST API ----->mongodb native driver -----> mongoDB server
    REST API ----->mongodb ODM tool(mongoose) -----> mongoDB server
         mongoose----> instead of native driver
         1.install  mongoose and connect to mongodb sever
             npm i mongoose
         2.create schema of resoures
         3.create model of that schema
         4.perform DB operations on that model    

### create Product Api
 product obj schema : {pid,producctName,price}
 1.POST  /products
 2.GET   /products
 3.GET   /products/<pid>
 4.PUT   /products/<pid>