import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function InquiryForm() {
  return (
    <div className="w-full space-y-2">
      <form className="grid gap-4">
        <div className="grid grid-cols-4 gap-4 lg:max-w-sm">
          <Input type="text" placeholder="Name" className="col-span-4 h-12" />
          <Input type="email" placeholder="Email" className="col-span-4 h-12" />
          <Input type="text" placeholder="Zip Code" className="w-full col-span-4 lg:col-span-2 h-12" />
        </div>
        <div />
        <Button type="submit" className="w-full max-w-sm h-12 border border-[#0f5558] shadow-lg hover:shadow-md active:shadow-sm">
          Get Started
        </Button>
      </form>
    </div>
  )
}
