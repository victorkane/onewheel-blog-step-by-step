import { prisma } from "~/db.server";
import { json } from "@remix-run/node";
export async function getPosts() {
  return prisma.post.findMany();
}
