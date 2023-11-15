import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// create user
async function createUser() {
  const user = await prisma.user.create({
    data: {
      name: "John Doe",
      email: "johndoe@email.com",
    },
  });
  console.log(user);
}

// create article
async function createArticle() {
  const article = await prisma.article.create({
    data: {
      title: "John Doe Article",
      body: "Prisma initialization",
      author: {
        connect: {
          id: 1,
        },
      },
    },
  });
  console.log(article);
}

// create user and article
async function createUserArticle() {
  const data = await prisma.user.create({
    data: {
      name: "John Smith",
      email: "smithjohn@email.com",
      articles: {
        create: {
          title: "John Smith Article",
          body: "Prisma initialization by John Smith.",
        },
      },
    },
  });
  console.log(data);
}

// get all users and articles
async function getDetails(type: "user" | "article") {
  const details =
    type === "user"
      ? await prisma.user.findMany()
      : await prisma.article.findMany();
  console.log(details);
}

async function main() {
  // createUser();
  // createArticle();
  getDetails("user");
  getDetails("article");
  // createUserArticle();
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
