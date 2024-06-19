import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import HeroImage from '@/public/hero.jpg';

export default function Page() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <p>
                  Home |<span className="text-[#CC4801]"> Inquiry Page</span>
                </p>
                <h1 className="text-3xl font-bold tracking-tighter text-[#333] sm:text-5xl xl:text-6xl/none">
                  Personalized Care Services
                </h1>
                <p className="max-w-[600px] text-[#555] md:text-xl">
                  Get the care you or your loved one needs, tailored to your specific requirements.
                </p>
              </div>
              <div className="w-full space-y-2">
                <form className="grid gap-4">
                  <div className="grid grid-cols-4 gap-4 lg:max-w-sm">
                    <Input type="text" placeholder="Name" className="col-span-4" />
                    <Input type="email" placeholder="Email" className="col-span-4" />
                    <Input type="text" placeholder="Zip Code" className="w-full col-span-4 lg:col-span-2" />
                  </div>
                  <div />
                  <Button type="submit" className="w-full max-w-sm h-12">
                    Get Started
                  </Button>
                </form>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                className="mx-auto aspect-[5/4] overflow-hidden rounded-xl object-cover object-center sm:w-full shadow-md"
                src={HeroImage}
                width="500"
                height="400"
                alt="Home Care"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
