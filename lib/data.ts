import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import { Products } from "@/lib/definitions";

const ITEMS_PER_PAGE = 6;

export async function fetchProducts(query: string, currentPage: number) {
  console.log(query);
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const data = await sql<Products>`
        SELECT *
        FROM Products
        WHERE Products.title ILIKE ${`%${query}%`}
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}`;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the products.");
  }
}

export async function fetchShopPages(query: string) {
  noStore();
  try {
    const count = await sql`SELECT COUNT(*)
    FROM Products
    WHERE Products.title ILIKE ${`%${query}%`}`;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of invoices.");
  }
}
