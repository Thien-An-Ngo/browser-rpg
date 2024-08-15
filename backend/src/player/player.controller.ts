import { Controller, Get, Post, Body } from '@nestjs/common';
import { PlayerService } from './player.service';

@Controller('players')
export class PlayerController {
	constructor(private readonly playerService: PlayerService) {}

	@Post()
	create(@Body() createPlayerDto: { name: string; health: number; attack: number; defense: number }) {
		return this.playerService.create(createPlayerDto);
	}

	@Get()
	findAll() {
		return this.playerService.findAll();
	}
}