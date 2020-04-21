# Server-side templating with EJS

## Description / Overview  
This week, you and your partner(s) will implement a basic full-stack application for a book list which will include the ability to search the Google Books API, add books to a database, and then render those books from a PostgreSQL database. You will also add the ability to update the details of a book or remove it from the collection.

Today's portion of the application involves requesting books from the API. The client can submit a form to search for a book by title or author, and the search results will then be rendered as a list in the browser.

Your entire application will be deployed on Heroku.
------------------------------------------------------
### User Stories  

[Project Trello Board](https://trello.com/b/tNwzJG11/a-book-wiki)  

#### Lab 011
* Feature 1
    - Load Time: As a user, I want my application to load quickly so that I have an enjoyable experience.  
        - Given: that a user opens the application in the browser  
        - When: the user navigates to the home page  
        - Then: the index should load without a flash of unstyled content (FOUC)  
* Feature 2  
    - Search API: As a user, I want to search the Google Books API so that I can view the results of my search.    
        - Given: that the user enters a search query  
        - When: the user submits the search form  
        - Then: the search query should be included in a request to the Google Books API  
* Feature 3  
    - Browse Results: As a user, I want to be able to browse the search results.  
        - Given: that the user enters a search query  
        - When: the user submits the search form  
        - Then: the first ten books should be displayed to the user  
* Feature 4  
    - Error Messages: As a user, I want to view any error messages that occur during the usage of my book list application so that I know if something has gone wrong.  
        - Given: that the application is not functioning properly  
        - When: an error occurs  
        - Then: the user should receive feedback that something has gone wrong  
* Feature 5  
    - Deliver CSS: As a user, I want a simple, clean looking UI so that my application is easy to navigate  
        - Given: that the user access the application on multiple platforms  
        - When: the user views the application  
        - Then: the interface should deliver CSS to the browser  
* Feature 6  
    - Home Page: As a user, I want the application to have a home page, so that I can see relevant information  
        - Soon, you will display a collection of books on the home page, For now, set up a welcome page, based on the app design.  

#### Lab 012  
* Feature 1  
    - Saved Books: As a user, I want all of my saved books to be displayed on the home page so that I can view all of the books from my collection in a single view.  
        - Given: that a user opens the application in the browser  
        - When: the user navigates to the home page  
        - Then: all of the books saved in the collection should be rendered on the page  
* Feature 2  
    - Single Book: As a user, I want to request information about a single book so that I can view its additional details and share it by URL.  
        - Given: that a user views the book collection  
        - When: the user clicks on a "Views details" button for an individual book  
        - Then: the application should take the user to a book detail page where the book's details -- including description, ISBN, and bookshelf---will be displayed.  

        - Given: that a user is viewing the details of a single book  
        - When: the user clicks on a menu button  
        - Then: the user will be returned to the main page where all of the books from the collection are rendered.  
* Feature 3  
    - Add New Books: As a user, I want the ability to add new books to my application so that I can save search results.  
        - Given: that a user would like to expand their collection and is viewing search results  
        - When: the user clicks on a button to add a book to the database  
        - Then: the user should submit the form to add a new book  
* Feature 4 / 5
    - Consistent Design: As a user, I want the application to be designed in a consistent way so that I do not experience any down time or slow load times.  
        - Given: that a user views the application  
        - When: the user interacts with the application  
        - Then: the application should load quickly and perform efficiently  

#### Lab 013  
* Feature 1  
    - Update Details: As a user, I want to update the details of a book so that it displays the way I want it to, according to my personalized preferences  
        - Given: that the user on a book detail page would like to update the information stored for the book  
        - When: the user clicks on the "Update Details" button  
        - Then: the form containing the details should be revealed  

        - Given: that the user updates book details in the edit form  
        - When: the user clicks on the "Update book" button  
        - Then: the user-provided details for that book should be saved in the database  
* Feature 2  
    - Remove Books: As a user, I want to remove books from my collection so that it accurately represents my favorite books.  
        - Given: that a user on the book detail page would like to remove a book from the collection  
        - When: the user clicks on the "Delete Book" button  
        - Then: the book should be removed from the collection  

#### Lab 014  
* Feature 1  
    - DB Normalization: As a developer, I want to normalize the database to support browsing of bookshelves  

### Dependencies
* Express  
* dovenv  
* superagent  
* ejs  


### Installing
* File can be cloned from the below github repository
    - [Book_App Repo](https://github.com/joseph-zabaleta/book_app)  

### Executing program
* After cloning this file do the following:  
    - npm init -y  
    - install list of dependencies
    - utlize your server to run the program  
    - node.js  / nodemon

## Help
* n/a

## Authors
- Software Developer: Joseph Zabaleta
    - [Official Github](https://github.com/joseph-zabaleta)  

## Collaborations  
- Software Developer: Joe Pennock  
    - [Official Github](https://github.com/penjoe)  

## Version History

* 1.0.0 20200420
    - Initial Repo created.
    - Initial tree/files added.
    - Installed dependencies.  

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments / Resources  
[EJS for server-side templating](https://ejs.co/)  
[ExpressJS docs - app.set](https://expressjs.com/en/4x/api.html#app.set)  
[HTML5 Forms](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)  
[HTML5 Form Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#Using_built-in_form_validation)  
[Google Books API Documentation](https://developers.google.com/books/docs/v1/getting_started)  
[Superagent](https://visionmedia.github.io/superagent/)  

- Book App Wireframes  
[11-results.png]()  
[11-search.png]()  

- Suggestion for a favicon:  
    [https://www.freeiconspng.com/uploads/book-icon--icon-search-engine-6.png](https://www.freeiconspng.com/uploads/book-icon--icon-search-engine-6.png)  
    
### Time Hacks per Features

#### Lab 011

* Feature #1 Load Time: 
    Estimate of time needed to complete:  
    Start time:  
    Finish time:    
    Actual time needed to complete:

* Feature #2 Search API: 
    Estimate of time needed to complete:  
    Start time:  
    Finish time:    
    Actual time needed to complete:  

* Feature #3 Browse Results: 
    Estimate of time needed to complete:  
    Start time:  
    Finish time:    
    Actual time needed to complete: 

* Feature #4 Error Messages: 
    Estimate of time needed to complete:  
    Start time:  
    Finish time:    
    Actual time needed to complete:

* Feature #5 Deliver CSS: 
    Estimate of time needed to complete:  
    Start time:  
    Finish time:    
    Actual time needed to complete:  
    
* Feature #6 Home Page: 
    Estimate of time needed to complete:  
    Start time:  
    Finish time:    
    Actual time needed to complete:  

#### Lab 012
* Feature #1 Save Books: 
    Estimate of time needed to complete:  
    Start time:  
    Finish time:    
    Actual time needed to complete:  
* Feature #2 Single Book: 
    Estimate of time needed to complete:  
    Start time:  
    Finish time:    
    Actual time needed to complete:  
* Feature #3 Add New Book: 
    Estimate of time needed to complete:  
    Start time:  
    Finish time:    
    Actual time needed to complete:  
* Feature #4/5 Consist Design: 
    Estimate of time needed to complete:  
    Start time:  
    Finish time:    
    Actual time needed to complete:  

#### Lab 013  
* Feature #1 Update Details: 
    Estimate of time needed to complete:  
    Start time:  
    Finish time:    
    Actual time needed to complete:  
* Feature #2 Remove Books: 
    Estimate of time needed to complete:  
    Start time:  
    Finish time:    
    Actual time needed to complete:  

#### Lab 014
* Feature #1 DB Normalization: 
    Estimate of time needed to complete:  
    Start time:  
    Finish time:    
    Actual time needed to complete:  
