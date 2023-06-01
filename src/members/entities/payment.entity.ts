import { Members } from 'src/members/entities/member.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Members, (member) => member.id)
  member_id: number;

  @Column()
  amount: number;

  @Column()
  paid_at: Date;
}
