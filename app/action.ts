"use server";

import { z } from "zod";
import { nanoid } from "nanoid";
import { GenerateJson } from "@/lib/server/utils";

type FormState = {
  id?: string;
  errors?: string;
};

export async function submit(prevState: FormState, next: FormData) {
  const formSchema = z.object({
    name: z.string().min(1),
    email: z.string().email().min(1),
    zipcode: z.string().length(5),
  });

  try {
    const { name, email, zipcode } = Object.fromEntries(next);

    const formData = formSchema.parse({ name, email, zipcode });

    const id = nanoid(8);
    await GenerateJson(id, formData);

    return {
      id,
    };
  } catch (e: any) {
    return {
      errors: "An error occurred",
    };
  }
}
