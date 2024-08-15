import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PlayerService {
	constructor(private readonly prisma: PrismaService) {}

	async create(data: { name: string; health: number; attack: number; defense: number }) {
		return this.prisma.player.create({ data });
	}

	async findAll() {
		return this.prisma.player.findMany();
	}
}