 const express = require('express');
 const addbooksRouter = express.Router();
 const bookdata = require('../model/bookdata');
//  addbooksRouter.get(`${API}/updatebooks`)

 function router(nav)
 {
    

      addbooksRouter.get('/:i',function(req,res){
              var id = req.params.i
              res.render("updatebook",{
              nav,
              title:'Library',
              id
          });
      });
      addbooksRouter.post('/updatebooks/:i', function(req,res){
        var id = req.params.i
        var item = { $set : req.body }
        bookdata.updateOne({_id:id}, item,{ strict:false }, function(err,result) {
            if (err) {
                console.log(err);
            } else {
                res.redirect('/books');
            }
        });
    });
    addbooksRouter.post('/updatebooks/:title', function(req,res){
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