import { Injectable, HttpException } from '@nestjs/common';
import { BOOKS } from '../mocks/books.mock';
import { Book } from './interfaces/book.interface';
import { FilterBookDTO } from './dto/filter-book.dto';
import * as dayjs from 'dayjs';

@Injectable()
export class BooksService {
  books = BOOKS;

  getBooks(): Book[] {
    return this.books
  }

  getBooksFilter(filterDto: FilterBookDTO): Book[] {
    const { initialDate, endDate } = filterDto;

    let books = this.getBooks()

    books = books.filter(book => {
      return dayjs(book.date).valueOf() >= dayjs(initialDate).valueOf() &&
             dayjs(book.date).valueOf() <= dayjs(endDate).valueOf()
    });

    return books;
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
