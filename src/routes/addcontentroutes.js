const express = require('express');
const contentRouter = express.Router();
function router(nav)
{
    contentRouter.get('/',function(req,res){
        res.render("addcontent",{
            nav,
            title:'Add Content'
        });
    });
    return contentRouter;   
}
module.exports = router;