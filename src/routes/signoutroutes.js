const express = require('express');
const signoutRouter = express.Router();
function router(nav)
{
    signoutRouter.get('/',function(req,res){
        res.render("signout",{
            nav,
            
        });
    });
    
     
    
    return signoutRouter;
    
}


module.exports = router;