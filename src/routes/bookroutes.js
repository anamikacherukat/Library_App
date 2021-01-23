const express = require('express');
const booksRouter = express.Router();

const bookdata = require('../model/bookdata');
function router(nav)
{
    booksRouter.get('/',function(req,res){
        bookdata.find()
        .then(function(books){
            res.render("books",{
                nav,
                title: 'Library',
                books
            });
        });
    });
        
    
     booksRouter.get('/:id',function(req,res){ 
        const id = req.params.id;
         bookdata.findOne({_id: id})
         .then(function(book){
             res.render('book',{
                 nav,
                 title: 'Library',
                 book
             });
         });
       
     });
    

   
    return booksRouter;
}


module.exports = router;