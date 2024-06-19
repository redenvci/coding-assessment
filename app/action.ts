"use server";

import { z } from "zod";

type FormState = {
  errors?: string | null;
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

    return {
      errors: null,
    };
  } catch (e: any) {
    return {
      errors: e.errors[0].message,
    };
  }
}
