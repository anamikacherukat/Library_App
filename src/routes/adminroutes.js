const express = require('express');
const adminRouter = express.Router();
function router(nav)
{
    adminRouter.get('/',function(req,res){
        res.render("admin",{
            nav,
            title: 'Library'
        });
    });
    
     
    
    return adminRouter;
    
}


module.exports = router;