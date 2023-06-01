import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/*@Entity('member')*/ //így lehet az adattáblának másmilyen nevet adni. Itt például member lesz az adattábla neve hiába Members az osztály neve.
export enum Genders {
  Female = "F",
  Male = "M",
  Other = "",
}

@Entity('members')
export class Members {
  //felveszed ugyan azokat az adattagokat amik az adatbázisban is találhatóak 
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({type: 'enum', enum: Genders})
  gender: string;

  @Column({type: 'date'})
  birth_date: Date;

  @Column({type:'tinyint'})
  banned: number;

  @Column({type: 'timestamp'})
  created_at: Date;

  @Column({type: 'timestamp',nullable: true })
  updated_at: Date;
}
