import { Faker } from '@faker-js/faker';
import { Equals, IsDefined, IsIn, IsOptional } from 'class-validator';

export class CreateMemberDto {
  //felveszed ugyan azokat az adattagokat amiket az enitity-ben is és itt adhatod meg a validációkat és kritériumokat
  id: number;
  @IsDefined({ message: 'name must be defined' })
  name: string;

  @IsOptional()
  @IsIn(['F', 'M'])
  gender: string;

  @IsDefined({ message: 'name must be defined' })
  birth_date: string;

  banned: number;
  
  created_at: string;


  updated_at: string;
}