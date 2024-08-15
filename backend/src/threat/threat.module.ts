import { Module } from '@nestjs/common';
import { ThreatService } from './threat.service';
import { ThreatController } from './threat.controller';
import { PrismaModule } from '../prisma/prisma.module'

@Module({
  imports: [PrismaModule],
  providers: [ThreatService],
  controllers: [ThreatController]
})
export class ThreatModule {}
