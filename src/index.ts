interface IBook {
  id: number;
  title: string;
  author: string;
  category: BookCategory;
}

interface IBookService {
  getBooks(): IBook[];
}

enum BookCategory {
  Technical = "Technical",
  Business = "Business",
  NonFiction = "NonFiction",
  Fiction = "Fiction",
}

class BookService implements IBookService {
  getBooks(): IBook[] {
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
  }
}

class BookComponent {
  book: IBook;
  constructor(book: IBook) {
    this.book = book;
  }
  render(): string {
    return `
      <div class="card">  
        <div class="container">
          <h4>
            <b>${this.book.title}</b>
          </h4>
          <p>${this.book.author}</p>       
          <p>
          ${
            this.book.category === BookCategory.Technical
              ? "Technical"
              : "Others"
          }
          </p>       
        </div>
      </div>
      `;
  }
}

class HeaderComponent {
  headerTitle: string;
  constructor(headerTitle: string) {
    this.headerTitle = headerTitle;
  }
  render(): string {
    return `<header style="text-align:center; font-weight: bold">${this.headerTitle}</header><hr/>`;
  }
}

class Constants {
  static readonly appTitle = "My Book App";
}

class AppComponent {
  title: string = "Books";
  bookService: IBookService;
  constructor(bookService: IBookService) {
    this.bookService = bookService;
  }

  render(): string {
    let renderedHtml: string = "";
    renderedHtml += new HeaderComponent(this.title).render();
    const books = this.bookService.getBooks();
    for (const book of books) {
      renderedHtml += new BookComponent(book).render();
    }
    return renderedHtml;
  }
}

const bookService = new BookService();
const app = new AppComponent(bookService);

// render the html
const root = document.getElementById("root");
root.innerHTML = app.render();
