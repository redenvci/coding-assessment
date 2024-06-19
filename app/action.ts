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
    name: z.string().min(1, {
      message: "Name is required",
    }),
    email: z.string().email().min(1, {
      message: "Email is required",
    }),
    zipcode: z.string().length(5, {
      message: "Zip code must be 5 characters",
    }),
    type: z
      .string({
        required_error: "Medical Staffing Type is required",
      })
      .min(1, {
        message: "Medical Staffing Type is required",
      }),
  });

  try {
    const { name, email, zipcode, type } = Object.fromEntries(next);

    const formData = formSchema.parse({ name, email, zipcode, type });

    const id = nanoid(8);
    await GenerateJson(id, formData);

    return {
      id,
    };
  } catch (e: any) {
    return {
      errors: e.errors[0].message,
    };
  }
}
