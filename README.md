# Prisma usage

## Prerequistes

- database(sqlite, postgres, mongodb etc)
- tsc

## Packages
- typescript
- ts-node
- @types/node
- prisma

## Project Setup

```sh
npm init -y
```

```sh
npm i typescript ts-node @types/node -D
```

```sh
npx tsc --init
```

```sh
npm i prisma
```

## Prisma Initialization

```sh
npx prisma --datasource-provider sqlite
```

## After defining models in schema.prisma run

```sh
npx prisma migrate dev --name init
```

### Run index.ts

```sh
npx ts-node index.ts
```

### Prisma Studio (GUI)

```sh
npx prisma studio
```
