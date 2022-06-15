'use strict';
const express = require('express');
const getUsersRouter=express.Router();
const {Users}=require('../module/Users');
const bearer = require('../middlewares/bearer');
const logger = require("../middlewares/logger");

getUsersRouter.get('/users', bearer ,async(req,res,next)=>{
    try {
        const userRecords = await Users.findAll({});
        const UserNameOnly = userRecords.map(user => user.username);
        res.status(200).json(UserNameOnly);
      } catch (e) {
        console.error(e);
        next(e);
      }
})

getUsersRouter.use(logger);
module.exports= getUsersRouter;