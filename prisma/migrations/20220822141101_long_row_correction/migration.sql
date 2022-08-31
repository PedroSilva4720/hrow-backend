/*
  Warnings:

  - You are about to drop the column `LongRow` on the `Rows` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Rows` DROP COLUMN `LongRow`,
    ADD COLUMN `longRow` INTEGER NULL;
