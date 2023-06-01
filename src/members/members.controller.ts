import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MembersService } from './members.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { DataSource } from 'typeorm';
import { Members } from './entities/member.entity';
import { Payment } from './entities/payment.entity';

@Controller('/api/members') //ide kell megírni a függvényeket // /api/-val kiegészítve
export class MembersController {
  constructor(private readonly membersService: MembersService, private readonly dataSource: DataSource) {} //ide felveszel egy új privát csak olvasható változót ami DataSource típusu

  @Post()
  create(@Body() member: CreateMemberDto) {
    const memberRepo=this.dataSource.getRepository(Members)
    console.log(member);
    return memberRepo.save(member);
  }

  @Get()
  findAll() {
    const memberRepo = this.dataSource.getRepository(Members)
    return memberRepo.find();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.membersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMemberDto: UpdateMemberDto) {
    return this.membersService.update(+id, updateMemberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.membersService.remove(+id);
  }

  @Post('/:id/pay')
  async memberpay(@Param() id: number) {
    console.log(id);
    const memberRepo = this.dataSource.getRepository(Members);
    const ize = await memberRepo.find({
      where: {
        id: id,
      },
    });
    console.log(ize);
    if (!ize) {
      console.log('fos');
    }
    const repo = this.dataSource.getRepository(Payment);
    return repo.save({
      member_id: id,
      amount: 5000,
      paid_at: Date.now(),
    });
  }
}
