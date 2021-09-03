-- CreateEnum
CREATE TYPE "Color" AS ENUM ('red', 'green', 'black', 'white', 'purple', 'yellow', 'pink', 'blue');

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "color" "Color"[];
