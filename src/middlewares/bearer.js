'use strict';

const {Users} = require("../module/Users");

async function bearer(req, res, next) {
    if (req.headers.authorization) {
        console.log(req.headers.authorization);
        // Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNoaWhhYiIsImlhdCI6MTY1NTA0ODcxMX0.ZEiWN5JiWGvGFr4s3Q6NRLGMHahoTOV3OkiXLfJTvhk
        const bearerToken = req.headers.authorization.split(" ")[1];
        Users.authenticateBearer(bearerToken)
            .then((userData) => {
                req.user = userData;
                next();
            })
            .catch(() => {
                res.status(403);
                res.send("Invalid Signin");
            })
    }
    else{
        res.send('plz enter token');
    }
}

module.exports = bearer;