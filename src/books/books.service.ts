import { Injectable, HttpException } from '@nestjs/common';
import * as dayjs from 'dayjs';
import { BOOKS } from '../mocks/books.mock';
import { Book } from './interfaces/book.interface';

import * as isBetween from 'dayjs/plugin/isBetween';

dayjs.extend(isBetween);

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

  getBookByDate(initialDate: string, finalDate:string): Book[] {
    const initDate = dayjs(initialDate).format('YYYY-MM-DD');
    const finDate = dayjs(finalDate).format('YYYY-MM-DD');   
    
    if(initDate === 'Invalid Date' || finDate === 'Invalid Date') {
      throw new HttpException('Formato de data inválido. Formato correto: YYYY-MM-DD', 400);
    }

    let books = this.getBooks();

    books = books.filter(book => {
        return dayjs(book.date).isBetween(initDate, finDate, null, '[]')
      });
    
    if (books.length <= 0) {
       throw new HttpException('Livro não encontrado!', 404);
    }

      return books;
    }
}
