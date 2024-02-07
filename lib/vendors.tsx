import sql from "better-sqlite3";

const db = sql("vendors.db");

export async function getVendors() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM vendors").all();
}
