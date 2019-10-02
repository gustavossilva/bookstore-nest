import { Controller, Get, Param } from '@nestjs/common';
import { DateService } from './date.service';
import { Dates } from './interfaces/date.interface';

@Controller('date')
export class DateController {
  constructor(private readonly dateService: DateService) { }

  @Get('/:initialDate/:finalDate')
  async getDate(@Param() params): Promise<Dates> {
    return this.dateService.getDate(params);
  }
  @Get()
  async findAll() {
    return 'Initial /date';
  }
}
