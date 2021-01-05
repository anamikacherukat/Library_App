const express = require('express');
const authorsRouter = express.Router();
function router(nav)
{
    var authors = [
        {
            title: 'J K Rowling',
            Best_known_for:'Harry Potter Series',
            Origin:'Britain',
            img: "jk.jpg",
            des:"Born in Yate, South Gloucestershire, England, The United KingdomJuly 31, 1965 Website http ://www.jkrowling.com Twitter jk_rowling  GenreFiction, Young Adult, Fantasy InfluencesJane Austen, Geoffrey Chaucer, Oscar Wilde, C.S. Lewis Although she writes under the pen name J.K. Rowling, pronounced like rolling, her name when her first Harry Potter book was published was simply Joanne Rowling. Anticipating that the target audience of young boys might not want to read a book written by a woman, her publishers demanded that she use two initials, rather than her full name. As she had no middle name, she chose K as the second initial of her pen name, from her paternal grandmother Kathleen Ada Bulgen Rowling."
            


        },
        {
            title: 'Harper Lee',
            Best_known_for:'How to kill a mockingbird',
            Origin:'American',
            img: "harperlee.jpg",
            des:" “Nelle” Harper Lee was born on April 28, 1926, the youngest of four children of Amasa Coleman Lee and Frances Cunningham Finch Lee. She grew up in Monroeville, a small town in southwest Alabama. Her father was a lawyer who also served in the state legislature from 1926–1938. As a child, Lee was a tomboy and a precocious reader. After she attended public school in Monroeville she attended Huntingdon College, a private school for women in Montgomery for a year and then transferred to the University of Alabama. After graduation, Lee studied at Oxford University. She returned to the University of Alabama to study law but withdrew six months before graduation."
            

        },
        {
            title: 'Khaled Hosseini',
            Best_known_for:'A Thousand Splendid Suns, Kite Runner',
            Origin:'Afghan-American',
            img: "khaled.jpg",
            des:"Hosseini was born in Kabul, Afghanistan, in 1965. In 1970 Hosseini and his family moved to Iran where his father worked for the Embassy of Afghanistan in Tehran. In 1973 Hosseini's family returned to Kabul, and Hosseini's youngest brother was born in July of that year.In 1976, when Hosseini was 11 years old, Hosseini's father obtained a job in Paris, France, and moved the family there. They were unable to return to Afghanistan because of the Saur Revolution in which the PDPA communist party seized power through a bloody coup in April 1978. Instead, a year after the Soviet invasion of Afghanistan, in 1980 they sought political asylum in the United States and made their residence in San Jose, California."

        }
    ]
    
    authorsRouter.get('/',function(req,res){
        res.render("authors",{
            nav,
            title: 'Library',
            authors
        });
    });
    
    authorsRouter.get('/:id',function(req,res){ 
        const id = req.params.id
        res.render('author',{
            nav,
            title: 'Library',
            author:authors[id]
        });
    });
    return authorsRouter;
    
}


module.exports = router;