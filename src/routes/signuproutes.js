const express = require('express');
const signupRouter = express.Router();
function router(nav3)
{
    signupRouter.get('/',function(req,res){
        res.render("signup",{
            nav3,
            
        });
    });
    return signupRouter;
    
}


module.exports = router;