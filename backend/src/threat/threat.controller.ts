import { Controller, Get, Post, Body } from '@nestjs/common';
import { ThreatService } from './threat.service';

@Controller('threats')
export class ThreatController {
	constructor(private readonly threatService: ThreatService) {}

	@Post()
	create(@Body() createThreatDTO: { name: string; level: number; damage: number }) {
		return this.threatService.create(createThreatDTO);
	}

	@Get()
	findAll() {
		return this.threatService.findAll();
	}
}