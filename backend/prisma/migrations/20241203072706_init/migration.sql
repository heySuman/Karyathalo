-- CreateTable
CREATE TABLE "Client" (
    "Client_ID" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Phone" TEXT NOT NULL,
    "Payment_Method" TEXT NOT NULL,
    "Rating" DOUBLE PRECISION,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("Client_ID")
);

-- CreateTable
CREATE TABLE "Job" (
    "Job_ID" SERIAL NOT NULL,
    "Title" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "Budget" DOUBLE PRECISION NOT NULL,
    "Deadline" TIMESTAMP(3) NOT NULL,
    "Status" TEXT NOT NULL,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("Job_ID")
);

-- CreateTable
CREATE TABLE "Proposal" (
    "Proposal_ID" SERIAL NOT NULL,
    "Freelancer_ID" INTEGER NOT NULL,
    "Job_ID" INTEGER NOT NULL,
    "Description" TEXT NOT NULL,
    "Bid_Amount" DOUBLE PRECISION NOT NULL,
    "Status" TEXT NOT NULL,
    "clientClient_ID" INTEGER,

    CONSTRAINT "Proposal_pkey" PRIMARY KEY ("Proposal_ID")
);

-- CreateTable
CREATE TABLE "Freelancer" (
    "Freelancer_ID" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Phone" TEXT NOT NULL,
    "Skills" TEXT NOT NULL,
    "Rating" DOUBLE PRECISION,
    "ProfilePicture" TEXT,

    CONSTRAINT "Freelancer_pkey" PRIMARY KEY ("Freelancer_ID")
);

-- CreateTable
CREATE TABLE "Certification" (
    "Certification_ID" SERIAL NOT NULL,
    "Freelancer_ID" INTEGER NOT NULL,
    "Title" TEXT NOT NULL,
    "IssuedBy" TEXT NOT NULL,
    "DateIssued" TIMESTAMP(3) NOT NULL,
    "ValidUntil" TIMESTAMP(3),

    CONSTRAINT "Certification_pkey" PRIMARY KEY ("Certification_ID")
);

-- CreateTable
CREATE TABLE "Experience" (
    "Experience_ID" SERIAL NOT NULL,
    "Freelancer_ID" INTEGER NOT NULL,
    "Company" TEXT NOT NULL,
    "Role" TEXT NOT NULL,
    "StartDate" TIMESTAMP(3) NOT NULL,
    "EndDate" TIMESTAMP(3),
    "Description" TEXT NOT NULL,

    CONSTRAINT "Experience_pkey" PRIMARY KEY ("Experience_ID")
);

-- CreateTable
CREATE TABLE "Payment" (
    "Payment_ID" SERIAL NOT NULL,
    "Client_ID" INTEGER NOT NULL,
    "Freelancer_ID" INTEGER NOT NULL,
    "Amount" DOUBLE PRECISION NOT NULL,
    "Date" TIMESTAMP(3) NOT NULL,
    "Status" TEXT NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("Payment_ID")
);

-- CreateTable
CREATE TABLE "Review" (
    "Review_ID" SERIAL NOT NULL,
    "Client_ID" INTEGER NOT NULL,
    "Freelancer_ID" INTEGER NOT NULL,
    "Rating" DOUBLE PRECISION NOT NULL,
    "Comment" TEXT NOT NULL,
    "Date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("Review_ID")
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_Email_key" ON "Client"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "Freelancer_Email_key" ON "Freelancer"("Email");

-- AddForeignKey
ALTER TABLE "Proposal" ADD CONSTRAINT "Proposal_Freelancer_ID_fkey" FOREIGN KEY ("Freelancer_ID") REFERENCES "Freelancer"("Freelancer_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Proposal" ADD CONSTRAINT "Proposal_Job_ID_fkey" FOREIGN KEY ("Job_ID") REFERENCES "Job"("Job_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Proposal" ADD CONSTRAINT "Proposal_clientClient_ID_fkey" FOREIGN KEY ("clientClient_ID") REFERENCES "Client"("Client_ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Certification" ADD CONSTRAINT "Certification_Freelancer_ID_fkey" FOREIGN KEY ("Freelancer_ID") REFERENCES "Freelancer"("Freelancer_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Experience" ADD CONSTRAINT "Experience_Freelancer_ID_fkey" FOREIGN KEY ("Freelancer_ID") REFERENCES "Freelancer"("Freelancer_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_Client_ID_fkey" FOREIGN KEY ("Client_ID") REFERENCES "Client"("Client_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_Freelancer_ID_fkey" FOREIGN KEY ("Freelancer_ID") REFERENCES "Freelancer"("Freelancer_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_Client_ID_fkey" FOREIGN KEY ("Client_ID") REFERENCES "Client"("Client_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_Freelancer_ID_fkey" FOREIGN KEY ("Freelancer_ID") REFERENCES "Freelancer"("Freelancer_ID") ON DELETE RESTRICT ON UPDATE CASCADE;
