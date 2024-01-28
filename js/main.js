

function quoteFun(){
    var quotes =[
        {quote:'"Be yourself everyone else is already taken"', reader:"_ Oscar Wilde"},
        {quote:'"So many books, so little time."', reader:"_ Frank Zappa"},
        {quote:'"A room without books is like a body without a soul."', reader:"_ Marcus Tullius Cicero"},
        {quote:'"You only live once, but if you do it right, once is enough."', reader:"_ Mae West"},
        {quote:'"Be the change that you wish to see in the world."', reader:"_ Mahatma Gandhi"},
        {quote:'"If you tell the truth, you dont have to remember anything."', reader:"_ Mark Twain"},
        {quote:'"A friend is someone who knows all about you and still loves you."', reader:"_ Elbert Hubbard"},
        {quote:'"To live is the rarest thing in the world. Most people exist, that is all."', reader:"_ Oscar Wilde"},
        {quote:'"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."', reader:"_ Ralph Waldo Emerson"},
        {quote:'"Insanity is doing the same thing, over and over again, but expecting different results."', reader:"_ Narcotics Anonymous"},
        {quote:'"It is better to be hated for what you are than to be loved for what you are not."', reader:"_ Andre Gide, Autumn Leaves"},
    ]

    
for(var i=0; i<Math.round(Math.random() * quotes.length ) ; i++){
    var demo=""
    demo += 
    `
    <p>${quotes[i].quote}</p>
        <p>${quotes[i].reader}</p>
    
    `
    document.getElementById("pp").innerHTML = demo;    
}


}

