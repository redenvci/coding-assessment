import "server-only";

import path from "path";
import * as fs from "node:fs";
import { redirect } from "next/navigation";

export async function GenerateJson(id: string, data: any) {
  const jsonString = JSON.stringify(data, null, 2);
  const filePath = path.join(process.cwd(), "data", `${id}.json`);

  await fs.mkdir(path.dirname(filePath), () => {
    console.log("Directory created");
  });
  await fs.writeFile(filePath, jsonString, { flag: "w" }, () => {
    console.log("File written");
  });

  return id;
}

export async function ReadJson(id: string) {
  const filePath = path.join(process.cwd(), "data", `${id}.json`);
  const json = await fs.promises.readFile(filePath, "utf-8");
  return json;
}
