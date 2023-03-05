-- CreateEnum
CREATE TYPE "ProjectStatus" AS ENUM ('NOT_STARTED', 'BACKLOG', 'SPRINTLOG', 'IN_PROGRESS', 'UNDER_REVIEW', 'WAITING_VALIDATION', 'COMPLETED', 'DISCARDED');

-- CreateEnum
CREATE TYPE "EventCategory" AS ENUM ('WEBINAR', 'COACHING', 'MASTERCLASS', 'NETWORKING', 'TALK', 'PARTNER', 'WORKSHOP', 'OTHER');

-- CreateEnum
CREATE TYPE "EventStatus" AS ENUM ('COMING_SOON', 'LIVE_NOW', 'PAST', 'CANCELLED');

-- CreateEnum
CREATE TYPE "IndustryCategory" AS ENUM ('ADVERTISING_MARKETING', 'COMPUTER_TECHNOLOGY', 'EDUCATION', 'FINANCE_ECONOMIC', 'HEALTH_CARE', 'MEDIA_NEWS', 'FOOD_BEVERAGE', 'FASHION', 'ENTERTAINMENT', 'ENERGY', 'CONSTRUCTION', 'AGRICULTURE', 'AEROSPACE', 'STEM', 'POLITICS', 'ART', 'BUSINESS', 'OTHER');

-- CreateTable
CREATE TABLE "Admin" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "img" BYTEA NOT NULL,
    "email" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "industryCat" "IndustryCategory" NOT NULL DEFAULT 'BUSINESS',
    "mainProject" TEXT NOT NULL,
    "linkedinUrl" TEXT,
    "location" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Coach" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "img" BYTEA NOT NULL,
    "email" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "industryCat" "IndustryCategory" NOT NULL DEFAULT 'EDUCATION',
    "mainProject" TEXT NOT NULL,
    "linkedinUrl" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Coach_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "img" BYTEA NOT NULL,
    "status" "ProjectStatus" NOT NULL DEFAULT 'NOT_STARTED',
    "industryCat" "IndustryCategory" NOT NULL DEFAULT 'BUSINESS',
    "coachId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "img" BYTEA NOT NULL,
    "status" "EventStatus" NOT NULL DEFAULT 'COMING_SOON',
    "cat" "EventCategory" NOT NULL DEFAULT 'OTHER',
    "industryCat" "IndustryCategory" NOT NULL DEFAULT 'BUSINESS',
    "coachId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_name_key" ON "Admin"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Client_name_key" ON "Client"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Client_username_key" ON "Client"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Client_linkedinUrl_key" ON "Client"("linkedinUrl");

-- CreateIndex
CREATE UNIQUE INDEX "Coach_name_key" ON "Coach"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Coach_email_key" ON "Coach"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Coach_linkedinUrl_key" ON "Coach"("linkedinUrl");

-- CreateIndex
CREATE INDEX "Project_coachId_idx" ON "Project"("coachId");

-- CreateIndex
CREATE INDEX "Event_coachId_idx" ON "Event"("coachId");

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_coachId_fkey" FOREIGN KEY ("coachId") REFERENCES "Coach"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_coachId_fkey" FOREIGN KEY ("coachId") REFERENCES "Coach"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
