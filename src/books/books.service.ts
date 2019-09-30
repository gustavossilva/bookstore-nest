import { Injectable, HttpException } from '@nestjs/common';
import { BOOKS } from '../mocks/books.mock';

@Injectable()
export class BooksService {
  books = BOOKS;

  getBooks(): Promise<any> {
    return new Promise(resolve => {
      resolve(this.books);
    });
  }

  getBook(bookID: string): Promise<any> {
    let id = Number(bookID);
    return new Promise(resolve => {
      const book = this.books.find(book => book.id === id);
      if (!book) {
        throw new HttpException('Livro não exste!', 404);
      }
      resolve(book);
    });
  }

  addBook(book: any): Promise<any> {
    return new Promise(resolve => {
      this.books.push(book);
      resolve(this.books);
    })
  }

  deleteBook(bookID: string): Promise<any> {
    let id = Number(bookID);
    return new Promise(resolve => {
      let index = this.books.findIndex(book => book.id === id);
      if (index === -1) {
        throw new HttpException('Livro não existe!', 404);
      }
      this.books.splice(index, 1);
      resolve (this.books);
    })
  }
}
