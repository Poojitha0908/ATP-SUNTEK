//Problem Statement: Library Book Management System
//-------------------------------------------------
//Objective : Create a Book class and use it to manage a collection of books in a library.

//Requirements:
 // Create a Book class with the following
class Book{
    title 
    author 
    pages 
    isAvailable=true
    constructor(title,author,pages,isAvailable){
        this.author=author
        this.title=title
        this.pages=pages
        this.isAvailable=isAvailable
    }
    borrow() {
        this.isAvailable=false
    }
    returnBook(){
        this.isAvailable=true
    }
    getInfo() {
        //"The Hobbit by J.R.R. Tolkien (310 pages)")
        return this.author,"by ",this.title,"(",this.pages,")" 
    }
    isLongBook(){
        if (this.pages > 300){
            return true
        }
        else{
            return false
        }
    }
}
let b1 =new Book("Harry Potter", 'JK Rowling', 400 , true )
let b2 =new Book("1984", "George Orwell", 300 , false)
let b3 =new Book("The Hobbit", 'J.R.R Tolkien', 300, true)
let b4 =new Book("Verity", 'Colleen Hoover', 400, true)
let b5 =new Book('And then there were none', 'Agatha Christie', 500, false)
b1.getInfo()