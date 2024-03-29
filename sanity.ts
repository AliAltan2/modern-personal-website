import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
//dummy
export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: "lpmyz5a1",
  apiVersion: "2021-03-25",
  useCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config);

export const urlfor = (source: any) =>
  createImageUrlBuilder(config).image(source);
