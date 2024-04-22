var BookCategory;
(function (BookCategory) {
    BookCategory["Technical"] = "Technical";
    BookCategory["Business"] = "Business";
    BookCategory["NonFiction"] = "NonFiction";
    BookCategory["Fiction"] = "Fiction";
})(BookCategory || (BookCategory = {}));
var BookService = /** @class */ (function () {
    function BookService() {
    }
    BookService.prototype.getBooks = function () {
        return [
            {
                id: 1,
                title: "Intermediate JavaScript",
                author: "John Doe",
                category: BookCategory.Technical,
            },
            {
                id: 2,
                title: "TypeScript Fundamentals in 4 days",
                author: "Julie C",
                category: BookCategory.Technical,
            },
            {
                id: 3,
                title: "AWS Fundamentals",
                author: "Rachel G",
                category: BookCategory.Technical,
            },
            {
                id: 4,
                title: "Investing wisely in Mutual Funds",
                author: "Robert C",
                category: BookCategory.Business,
            },
            {
                id: 5,
                title: "Lead a Spiritual Life",
                author: "Emma T",
                category: BookCategory.NonFiction,
            },
        ];
    };
    return BookService;
}());
var BookComponent = /** @class */ (function () {
    function BookComponent(book) {
        this.book = book;
    }
    BookComponent.prototype.render = function () {
        return "\n      <div class=\"card\">  \n        <div class=\"container\">\n          <h4>\n            <b>".concat(this.book.title, "</b>\n          </h4>\n          <p>").concat(this.book.author, "</p>       \n          <p>\n          ").concat(this.book.category === BookCategory.Technical
            ? "Technical"
            : "Others", "\n          </p>       \n        </div>\n      </div>\n      ");
    };
    return BookComponent;
}());
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(headerTitle) {
        this.headerTitle = headerTitle;
    }
    HeaderComponent.prototype.render = function () {
        return "<header style=\"text-align:center; font-weight: bold\">".concat(this.headerTitle, "</header><hr/>");
    };
    return HeaderComponent;
}());
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.appTitle = "My Book App";
    return Constants;
}());
var AppComponent = /** @class */ (function () {
    function AppComponent(bookService) {
        this.title = "Books";
        this.bookService = bookService;
    }
    AppComponent.prototype.render = function () {
        var renderedHtml = "";
        renderedHtml += new HeaderComponent(this.title).render();
        var books = this.bookService.getBooks();
        for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
            var book = books_1[_i];
            renderedHtml += new BookComponent(book).render();
        }
        return renderedHtml;
    };
    return AppComponent;
}());
var bookService = new BookService();
var app = new AppComponent(bookService);
// render the html
var root = document.getElementById("root");
root.innerHTML = app.render();
