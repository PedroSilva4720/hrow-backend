/*
  Warnings:

  - You are about to drop the `row` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `row`;

-- CreateTable
CREATE TABLE `Rows` (
    `id` VARCHAR(191) NOT NULL,
    `orderPad` VARCHAR(191) NOT NULL,
    `queue` INTEGER NULL,
    `shortRow` INTEGER NULL,
    `mediumRow` INTEGER NULL,
    `LongRow` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `used` BOOLEAN NOT NULL DEFAULT false,
    `usedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
