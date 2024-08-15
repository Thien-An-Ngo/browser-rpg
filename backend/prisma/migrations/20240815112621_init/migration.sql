-- CreateTable
CREATE TABLE "Player" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "health" INTEGER NOT NULL,
    "attack" INTEGER NOT NULL,
    "defense" INTEGER NOT NULL,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Threat" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "damage" INTEGER NOT NULL,

    CONSTRAINT "Threat_pkey" PRIMARY KEY ("id")
);
