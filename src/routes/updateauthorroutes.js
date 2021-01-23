const express = require('express');
const addauthorRouter = express.Router();
const authordata = require('../model/authordata');
//  addbooksRouter.get(`${API}/updatebooks`)

function router(nav)
{
   

     addauthorRouter.get('/:i',function(req,res){
             var id = req.params.i
             res.render("updateauthor",{
             nav,
             title:'Library',
             id
         });
     });
     addauthorRouter.post('/updateauthors/:i', function(req,res){
       var id = req.params.i
       var item = { $set : req.body }
       authordata.updateOne({_id:id}, item,{ strict:false }, function(err,result) {
           if (err) {
               console.log(err);
           } else {
               res.redirect('/authors');
           }
       });
   });
//    addbooksRouter.post('/updatebooks/:title', function(req,res){
//        var t = req.body.title
//        var item = { $set : req.body }
//        bookdata.updateOne({_title:t}, item,{ strict:false }, function(err,result) {
//            if (err) {
//                console.log(err);
//            } else {
//                res.redirect('/books');
//            }
//        });
//    });
   
   

  
   

   return addauthorRouter;
   
}


module.exports = router;