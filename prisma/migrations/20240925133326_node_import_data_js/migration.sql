/*
  Warnings:

  - Added the required column `bathRoomCount` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bedroomCount` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maxGuestCount` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating` to the `Property` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `property` ADD COLUMN `bathRoomCount` INTEGER NOT NULL,
    ADD COLUMN `bedroomCount` INTEGER NOT NULL,
    ADD COLUMN `maxGuestCount` INTEGER NOT NULL,
    ADD COLUMN `rating` INTEGER NOT NULL;
