const express = require('express');
const userRouter = express.Router();
function router(nav3)
{
    userRouter.get('/',function(req,res){
        res.render("user",{
            nav3,
            title: 'Library'
        });
    });
    
     
    
    return userRouter;
    
}


module.exports = router;