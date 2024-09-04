/*
  Warnings:

  - You are about to drop the column `createdAt` on the `SongRequest` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "SongRequest" DROP COLUMN "createdAt",
ADD COLUMN     "played" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "requestedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
