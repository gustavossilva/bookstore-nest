import { Injectable } from '@nestjs/common';
import { BOOKS } from 'src/mocks/books.mock';
import * as _ from 'lodash';
import * as dayjs from 'dayjs';
@Injectable()
export class DateService {
  books = BOOKS;

  getDate(params: any): any {
    const { initialDate, finalDate } = params;
    return _.filter(this.books, book =>
      dayjs(book.date).unix() >= dayjs(initialDate).unix() && dayjs(book.date).unix() <= dayjs(finalDate).unix());
  }
}
