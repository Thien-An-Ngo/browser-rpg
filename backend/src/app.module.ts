import { Module } from '@nestjs/common';
import { PlayerModule } from './player/player.module';
import { ThreatModule } from './threat/threat.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PlayerModule, ThreatModule, PrismaModule],
  providers: [PrismaService]
})
export class AppModule {}
