const express = require('express');
const booksRouter = express.Router();
function router(nav)
{
    var books = [
        {
            title: 'Harry Potter',
            author: 'J K Rowling',
            genre: 'Fantasy',
            img: "harry.jpg",
            des:"Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people). Since the release of the first novel, Harry Potter and the Philosopher's Stone, on 26 June 1997, the books have found immense popularity, positive reviews, and commercial success worldwide. They have attracted a wide adult audience as well as younger readers and are often considered cornerstones of modern young adult literature.[2] As of February 2018, the books have sold more than 500 million copies worldwide, making them the best-selling book series in history, and have been translated into eighty languages.[3] The last four books consecutively set records as the fastest-selling books in history, with the final installment selling roughly eleven million copies in the United States within twenty-four hours of its release."
        },
        {
            title: 'How to kill a mockingbird',
            author: 'Harper Lee',
            genre: 'Thriller',
            img: "howtokill.jpg",
            des:"The title of To Kill a Mockingbird refers to the local belief, introduced early in the novel and referred to again later, that it is a sin to kill a mockingbird. Harper Lee is subtly implying that the townspeople are responsible for killing Tom Robinson, and that doing so was not only unjust and immoral, but sinful. The events of To Kill a Mockingbird take place while Scout Finch, the novel’s narrator, is a young child. But the sophisticated vocabulary and sentence structure of the story indicate that Scout tells the story many years after the events described, when she has grown to adulthood. To Kill a Mockingbird is unusual because it is both an examination of racism and a bildungsroman. Within the framework of a coming-of-age story, Lee examines a very serious social problem. Lee seamlessly blends these two very different kinds of stories."
        },
        {
            title: 'A Thousand Splendid Suns',
            author: 'Khaled Hosseini',
            genre: 'Fiction',
            img: "atss.jpg",
            des:"A Thousand Splendid Suns is a breathtaking story set against the volatile events of Afghanistan’s last thirty years—from the Soviet invasion to the reign of the Taliban to post-Taliban rebuilding—that puts the violence, fear, hope, and faith of this country in intimate, human terms.It is a tale of two generations of characters brought jarringly together by the tragic sweep of war, where personal lives—the struggle to survive, raise a family, find happiness—are inextricable from the history playing out around them. Propelled by the same storytelling instinct that made The Kite Runner a beloved classic, A Thousand Splendid Suns is at once a remarkable chronicle of three decades of Afghan history and a deeply moving account of family and friendship. It is a striking, heart-wrenching novel of an unforgiving time, an unlikely friendship, and an indestructible love—a stunning accomplishment."
        }
    ]
    
    booksRouter.get('/',function(req,res){
        res.render("books",{
            nav,
            title: 'Library',
            books
        });
    });
    
    booksRouter.get('/:id',function(req,res){ 
        const id = req.params.id
        res.render('book',{
            nav,
            title: 'Library',
            book:books[id]
        });
    });
    return booksRouter;
    
}


module.exports = router;