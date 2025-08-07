import { Pool, neonConfig } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient, Prisma } from '@/lib/generated/prisma';

import ws from 'ws';

// Sets up WebSocket connections, which enables Neon to use WebSocket communication.
neonConfig.webSocketConstructor = ws;
const connectionString = `${process.env.DATABASE_URL}`;

// Creates a new connection pool using the provided connection string, allowing multiple concurrent connections.
const pool = new Pool({ connectionString });

// Instantiates the Prisma adapter using the Neon connection pool to handle the connection between Prisma and Neon.
const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL });

// Extends the PrismaClient with a custom result transformer to convert the price and rating fields to strings.
export const prisma = new PrismaClient({ adapter: adapter }).$extends({
  result: {
    product: {
      price: {
        compute(product: { price: Prisma.Decimal }) {
          return product.price.toString();
        },
      },
      rating: {
        compute(product: { rating: Prisma.Decimal }) {
          return product.rating.toString();
        },
      },
    },
  },
});
