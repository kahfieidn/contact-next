import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const data = Array.from({ length: 2500 }, (_, i) => ({
    name: `User${i}@prisma.io`,
    phone: `${Math.floor(1000000000 + Math.random() * 9000000000)}`, // Nomor acak
  }));

  await Promise.all(
    data.map((item) => prisma.contact.create({ data: item }))
  );

  console.log("Selesai memasukkan 1000 data!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
