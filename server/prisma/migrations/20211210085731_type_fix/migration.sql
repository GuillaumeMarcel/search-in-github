/*
  Warnings:

  - The `hireable` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "blog" TEXT,
DROP COLUMN "hireable",
ADD COLUMN     "hireable" BOOLEAN;
