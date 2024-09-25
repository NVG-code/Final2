/*
  Warnings:

  - You are about to drop the column `name` on the `property` table. All the data in the column will be lost.
  - Added the required column `title` to the `Property` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `property` DROP COLUMN `name`,
    ADD COLUMN `title` VARCHAR(191) NOT NULL;
