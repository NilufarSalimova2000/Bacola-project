"use server";

import { BannerType } from "../types/type";



const url = process.env.BACKEND_URL;

export const getTodoData = async () => {
  const res = await fetch(`${url}/banner`, { next: { tags: ["banners"] } });
  if (!res.ok) {
    throw new Error("error");
  }
  const data: BannerType[] = await res.json();

  return data;
};
