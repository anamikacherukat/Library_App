const express = require('express');
const addauthorRouter = express.Router();
const authordata = require('../model/authordata');

function router(nav)
{
    
    addauthorRouter.get('/',function(req,res){
        res.render("addauthor",{
            nav,
            title:'Library'
        });
    });
   
    addauthorRouter.post('/addauthors',function(req,res){
         var item={
       title:  req.body.title,
       origin: req.body.origin,
       Best_known_for:  req.body.Best_known_for,
       image:  req.body.image,
       desc: req.body.desc
         }
        var Author = authordata(item);
        Author.save();//saving to the database
        res.redirect('/authors');
    });


    addauthorRouter.get('/delete/:i', function(req,res){
        const id = req.params.i
        authordata.deleteOne({_id:id})
        .then(function(){
            res.redirect('/authors');
        })
    
    });


    return addauthorRouter;
    
}


module.exports = router;