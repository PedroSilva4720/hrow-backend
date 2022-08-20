-- CreateTable
CREATE TABLE `row` (
    `id` VARCHAR(191) NOT NULL,
    `orderPad` VARCHAR(191) NOT NULL,
    `queue` INTEGER NULL,
    `shortRow` INTEGER NULL,
    `mediumRow` INTEGER NULL,
    `LongRow` INTEGER NULL,
    `date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
