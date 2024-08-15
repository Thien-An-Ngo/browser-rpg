import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'sails';

const prisma = new PrismaClient();

export const PlayerController = {
  create: async function (req: Request, res: Response) {
    const { name, health, attack, defense } = req.body;
    const player = await prisma.player.create({
      data: { name, health, attack, defense },
    });
    return res.json(player);
  },

  find: async function (req: Request, res: Response) {
    const players = await prisma.player.findMany();
    return res.json(players);
  },
};
