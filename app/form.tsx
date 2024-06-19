"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFormState, useFormStatus } from "react-dom";
import { FaSpinner } from "react-icons/fa6";
import { submit } from "./action";

function SubmitButton() {
  const status = useFormStatus();
  return (
    <Button type="submit" className="w-full max-w-sm h-12 border border-[#0f5558] shadow-lg hover:shadow-md active:shadow-sm">
      {status.pending && (
        <FaSpinner className="animate-spin" />
      )}
      Get Started
    </Button>
  )
}

export default function InquiryForm() {
  const [state, dispatch] = useFormState(submit, {
    errors: null,
  });

  return (
    <div className="w-full space-y-2">
      <form action={dispatch} className="grid gap-4">
        <div className="grid grid-cols-4 gap-4 lg:max-w-sm">
          <Input type="text" name="name" placeholder="Name" className="col-span-4 h-12" />
          <Input type="email" name="email" placeholder="Email" className="col-span-4 h-12" />
          <Input type="text" name="zipcode" placeholder="Zip Code" className="w-full col-span-4 lg:col-span-2 h-12" />
          {state?.errors && (
            <p className="text-red-500 col-span-4 lg:col-span-2">{state.errors}</p>
          )}
        </div>
        <SubmitButton />
        <div />
      </form>
    </div>
  )
}
