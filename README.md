# Prisma init

A simple demo of CRUD operations using Prisma and SQLite.

### Prerequisites:

1. **Database:** You need to have a database installed. The example uses SQLite also Postgres, MongoDB, etc can be used.

2. **tsc (TypeScript Compiler):** Ensure that TypeScript and ts-node are installed globally or as project dependencies.

### Dependencies:

- **typescript:** The primary package for working with TypeScript.
- **ts-node:** TypeScript execution and REPL for Node.js.
- **@types/node:** TypeScript definition files for Node.js.
- **prisma:** The Prisma ORM (Object-Relational Mapping) library.

### Project Setup:

1. **Initialize npm:**
   ```sh
   npm init -y
   ```

2. **Install Dependencies:**
   ```sh
   npm install typescript ts-node @types/node -D
   ```

3. **Initialize TypeScript Configuration:**
   ```sh
   npx tsc --init
   ```

4. **Install Prisma:**
   ```sh
   npm install prisma
   ```

### Prisma Initialization:

- **Generate Prisma Configuration:**
  ```sh
  npx prisma --datasource-provider sqlite
  ```
  sqlite - database provider

### Database Migration:

- **Run Migrations:**
  ```sh
  npx prisma migrate dev --name init
  ```
  init - name of migration

### Run TypeScript Code:

- **Run index.ts:**
  ```sh
  npx ts-node index.ts
  ```

### Prisma Studio (GUI):

- **Open Prisma Studio:**
  ```sh
  npx prisma studio
  ```