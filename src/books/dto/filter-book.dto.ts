import { IsNotEmpty, Matches } from 'class-validator';

export class FilterBookDTO {
  @IsNotEmpty()
  @Matches(/^\d{4}[\-\/\s]?((((0[13578])|(1[02]))[\-\/\s]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[\-\/\s]?(([0-2][0-9])|(30)))|(02[\-\/\s]?[0-2][0-9]))$/, {
    message: 'Invalid date format. Format: YYYY-MM-DD'
  })
  initialDate: string;
  
  @IsNotEmpty()
  @Matches(/^\d{4}[\-\/\s]?((((0[13578])|(1[02]))[\-\/\s]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[\-\/\s]?(([0-2][0-9])|(30)))|(02[\-\/\s]?[0-2][0-9]))$/, {
    message: 'Invalid date format. Format: YYYY-MM-DD'
  })
  endDate: string;
}