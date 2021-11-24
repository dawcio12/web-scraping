An application consisting of an API written in Javascript using libraries such as:
-axios
-cheerio
-express
-cors

Endpoints available
The API downloads articles from the wordpress blog then makes them available through endpoints:
- '/ articles /: year' returns an article list for a specific year
- '/ allArticles' returns a list of all articles
- '/ article /: title' returns a single article with the title '

The articles are downloaded during the server startup because it was supposed to be only a demonstration

Frontend
The frontend was written in Angular v12 using Materials Design and Bootstrap
The application has pagination that helps in viewing articles. A component from Material Design (mat-paginator) was used for this. The articles are displayed in the form of cards with the use of the (mat-card) component.
