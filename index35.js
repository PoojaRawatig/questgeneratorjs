function generate (){
    let quotes= {
    "_Pooja_Rawat": '"At Quest, we create and manage the software that makes the benefits of new technology real while empowering users and data, streamlining IT operations and ..."',
    "pooja": '"Quest Global: We strive to be the most trusted partner for the ..."'
    
    }
    
    var authors = Object.keys(quotes);
    var author= authors[Math.floor(Math.random()*
        authors.length)];
        var  quote = quotes[author];
    
    document.getElementById("quote").innerHTML=quote;
    document.getElementById("author").innerHTML=author;
    console.log(authors)
    }