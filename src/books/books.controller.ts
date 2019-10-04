import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Query,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDTO } from './dto/create-book.dto';
import { FilterBookDTO } from './dto/filter-book.dto';
import { Book } from './interfaces/book.interface';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  async getBooks(): Promise<Book[]> {
    return this.booksService.getBooks();
  }

  @Get('/date')
  async getBookByDate(@Query() query: FilterBookDTO): Promise<Book[]> {
    return this.booksService.getBookByDate(query.initialDate, query.finalDate);
  }

  @Get(':bookID')
  async getBook(@Param('bookID') bookID): Promise<Book> {
    return this.booksService.getBook(bookID);
  }

  @Post()
  async addBook(@Body() createBookDTO: CreateBookDTO): Promise<Book[]> {
    return this.booksService.addBook(createBookDTO);
  }

  @Delete()
  async deleteBook(@Query() query): Promise<Book[]> {
    return this.booksService.deleteBook(query.bookID);
  }

 
}
