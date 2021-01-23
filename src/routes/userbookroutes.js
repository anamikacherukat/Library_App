const express = require('express');
const userbookRouter = express.Router();
// const booksRouter = express.Router();

const bookdata = require('../model/bookdata');
function router(nav3)
{
    // userbookRouter.get('/',function(req,res){
    //     res.render("userbooks",{
    //         nav3,
    //         title: 'Library'
    //     });
    // });
    userbookRouter.get('/',function(req,res){
        bookdata.find()
        .then(function(books){
            res.render("userbooks",{
                nav3,
                title: 'Library',
                books
            });
        });
    });
    
    userbookRouter.get('/:id',function(req,res){ 
        const id = req.params.id;
         bookdata.findOne({_id: id})
         .then(function(book){
             res.render('userbook',{
                 nav3,
                 title: 'Library',
                 book
             });
         });
       
     });
     
    

   
    // return booksRouter;
    
    return userbookRouter;
    
}


module.exports = router;