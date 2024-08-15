import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ThreatService {
	constructor(private readonly prisma: PrismaService) {}

	async create(data: { name: string; level: number; damage: number }) {
		return this.prisma.threat.create({ data });
	}

	async findAll() {
		return this.prisma.threat.findMany();
	}
}