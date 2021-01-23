const express = require('express');
const addbooksRouter = express.Router();
const bookdata = require('../model/bookdata');
//  addbooksRouter.get(`${API}/updatebooks`)

function router(nav)
{
   

     addbooksRouter.get('/',function(req,res){
             res.render("updateform",{
             nav,
             title:'Library',
             
         });
     });
    
   addbooksRouter.post('/updateforms', function(req,res){
       var t = req.body.title
       var item = { $set : req.body }
       bookdata.updateOne({_title:t}, item,{ strict:false }, function(err,result) {
           if (err) {
               console.log(err);
           } else {
               res.redirect('/books');
           }
       });
   });
   
   

  
   

   return addbooksRouter;
   
}
module.exports = router;