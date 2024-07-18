import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tip } from '../models/tip.entity';
import { CreateTipDto } from './dto/create-tip.dto';
import { UpdateTipDto } from './dto/update-tip.dto';

@Injectable()
export class TipsService {
  constructor(
    @InjectRepository(Tip)
    private readonly tipRepository: Repository<Tip>,
  ) {}

  async create(createTipDto: CreateTipDto): Promise<Tip> {
    const tip = this.tipRepository.create(createTipDto);
    return this.tipRepository.save(tip);
  }

  async findAll(): Promise<Tip[]> {
    return this.tipRepository.find();
  }

  async findOne(id: string): Promise<Tip> {
    const tip = await this.tipRepository.findOneBy({ id });
    if (!tip) {
      throw new NotFoundException(`Tip with id ${id} not found`);
    }
    return tip;
  }

  async update(id: string, updateTipDto: UpdateTipDto): Promise<Tip> {
    const tip = await this.findOne(id); // Ensure the tip exists
    const updatedTip = Object.assign(tip, updateTipDto);
    return this.tipRepository.save(updatedTip);
  }

  async remove(id: string): Promise<void> {
    const tip = await this.findOne(id); // Ensure the tip exists
    await this.tipRepository.remove(tip);
  }
}
