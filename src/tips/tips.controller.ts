import { Controller, Get, Post, Body, Param, Put, Delete, NotFoundException } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { TipsService } from './tips.service';
import { CreateTipDto } from './dto/create-tip.dto';
import { UpdateTipDto } from './dto/update-tip.dto';
import { Tip } from '../models/tip.entity';

@ApiTags('tips')
@Controller('tips')
export class TipsController {
  constructor(private readonly tipsService: TipsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new tip' })
  @ApiResponse({ status: 201, description: 'The tip has been successfully created.', type: Tip })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  async create(@Body() createTipDto: CreateTipDto): Promise<Tip> {
    return this.tipsService.create(createTipDto);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all tips' })
  @ApiResponse({ status: 200, description: 'List of tips.', type: [Tip] })
  async findAll(): Promise<Tip[]> {
    return this.tipsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a specific tip by ID' })
  @ApiParam({ name: 'id', description: 'ID of the tip to retrieve', type: String })
  @ApiResponse({ status: 200, description: 'The tip has been successfully retrieved.', type: Tip })
  @ApiResponse({ status: 404, description: 'Tip not found.' })
  async findOne(@Param('id') id: string): Promise<Tip> {
    const tip = await this.tipsService.findOne(id);
    if (!tip) {
      throw new NotFoundException(`Tip with id ${id} not found`);
    }
    return tip;
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a specific tip by ID' })
  @ApiParam({ name: 'id', description: 'ID of the tip to update', type: String })
  @ApiResponse({ status: 200, description: 'The tip has been successfully updated.', type: Tip })
  @ApiResponse({ status: 404, description: 'Tip not found.' })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  async update(@Param('id') id: string, @Body() updateTipDto: UpdateTipDto): Promise<Tip> {
    const tip = await this.tipsService.update(id, updateTipDto);
    if (!tip) {
      throw new NotFoundException(`Tip with id ${id} not found`);
    }
    return tip;
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a specific tip by ID' })
  @ApiParam({ name: 'id', description: 'ID of the tip to delete', type: String })
  @ApiResponse({ status: 200, description: 'The tip has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Tip not found.' })
  async remove(@Param('id') id: string): Promise<void> {
    await this.tipsService.remove(id);
  }
}
