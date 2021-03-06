-- CreateTable
CREATE TABLE "ExplorerInfo" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lang" VARCHAR(255) NOT NULL,
    "missionComander" VARCHAR(255) NOT NULL,
    "enrollments" INTEGER NOT NULL DEFAULT 1,
    "hasCertification" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ExplorerInfo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ExplorerInfo_name_key" ON "ExplorerInfo"("name");
