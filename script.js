var books = [
    {title: "Title: The River Between",
     author: "Author: Ngugi wa Thiongo",
     publisher: "Phoenix"

    },
    {
        title: "Title: When the Sun Goes Down",
        author: "Author: Abiud Sokomi",
        publisher: "Longhorn"
    }
];

var students = ["Sokomi", "Bill", "Clement"];

//accessing books
books.forEach(function (book) {
    document.write(book.title + "<br/>")
    document.write(book.author + "<br/><br/>")
});
"<br/>"
//accessing students
students.forEach(function (student) {
    document.write(student + "<br/>")
});