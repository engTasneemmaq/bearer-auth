'use strict';
const express = require('express');
const signInRouter=express.Router();
const basicAuth=require('../middlewares/basicAuth');
const logger=require("../middlewares/logger");

signInRouter.post('/signin',basicAuth,(req,res)=>{
res.status(200).json(req.user);

})

signInRouter.use(logger);

module.exports= signInRouter;