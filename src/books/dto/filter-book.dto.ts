import { IsNotEmpty } from 'class-validator';

export class FilterBookDTO {
  @IsNotEmpty()
  initialDate: string;
 
  @IsNotEmpty()
  endDate: string;
}