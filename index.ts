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
      title: "John Smith Article 2",
      body: " Article 2 by John Smith",
      author: {
        connect: {
          id: 2,
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

// get article associated with each user
async function getArticleWithUser() {
  const users = await prisma.user.findMany({
    include: {
      articles: true,
    },
  });

  users.forEach((user) => {
    console.log(`User: `, user.name);
    console.log(`email: `, user.email);
    if (user.articles.length !== 0) {
      console.log("\nArticles");
      user.articles.forEach((article) => {
        console.log(`- Title: `, article.title);
        console.log(`- Body: `, article.body, "\n");
      });
    } else {
      console.log("No articles by ", user.name);
    }
    console.log("-----------------------------");
  });
}

// update data
async function updateData() {
  const users = await prisma.user.update({
    where: {
      id: 3,
    },
    data: {
      name: "John Smith.",
    },
  });
  console.log(users);
}

// remove data
async function removeData() {
  const articles = await prisma.article.delete({
    where: {
      id: 3,
    },
  });
  getDetails("article");
}

async function main() {
  // create user
  createUser();

  // create article
  createArticle();

  // create user and article
  createUserArticle();

  // get all users and articles
  getDetails("user");
  getDetails("article");

  // get article associated with each user
  getArticleWithUser();

  // update data
  updateData();

  // remove data
  removeData();
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
