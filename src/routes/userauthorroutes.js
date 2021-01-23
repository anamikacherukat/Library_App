const express = require('express');
const userauthorRouter = express.Router();
const authordata = require('../model/authordata');

function router(nav3)
{
userauthorRouter.get('/',function(req,res){
    authordata.find()
    .then(function(authors){
        res.render("userauthors",{
            nav3,
            title: 'Library',
            authors
        });
    });
});
    

userauthorRouter.get('/:id',function(req,res){ 
    const id = req.params.id;
    authordata.findOne({_id: id})
    .then(function(author){
        res.render('userauthor',{
            nav3,
            title: 'Library',
            author
        });
    });
   
});
return userauthorRouter;

}
module.exports = router;
