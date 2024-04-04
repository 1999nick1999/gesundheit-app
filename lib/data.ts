import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import { Products } from "@/lib/definitions";

export async function fetchProducts() {
  noStore();
  try {
    const data = await sql<Products>`
        SELECT *
        FROM Products`;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the products.");
  }
}
