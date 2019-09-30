import { Injectable, HttpException } from '@nestjs/common';
import { BOOKS } from '../mocks/books.mock';
import { Book } from './interfaces/book.interface';

@Injectable()
export class BooksService {
  books = BOOKS;

  getBooks(): Book[] {
    return this.books
  }

  getBook(bookID: string): Book {
    const id = Number(bookID);
      const book = this.books.find(book => book.id === id);
      if (!book) {
        throw new HttpException('Livro não exste!', 404);
      }
      return book;
  }

  addBook(book: Book): Book[]{
      this.books.push(book);
      return this.books;
  }

  deleteBook(bookID: string): Book[] {
    const id = Number(bookID);
      const index = this.books.findIndex(book => book.id === id);
      if (index === -1) {
        throw new HttpException('Livro não existe!', 404);
      }
      this.books.splice(index, 1);
      return this.books;
  }
}
