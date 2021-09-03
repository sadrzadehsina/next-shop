-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "userId" TEXT;

-- AddForeignKey
ALTER TABLE "Product" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
