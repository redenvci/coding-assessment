import Image from "next/image"
import HeroImage from '@/public/hero.jpg';
import { locations } from "@/lib/locations";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page({
  params
}: {
  params: {
    zipcode: string
  }
}) {
  const location = locations.find((location) => location.zipcode === params.zipcode);

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#083739] text-center md:text-start">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-5xl xl:text-5xl">
                  <span className="text-white">
                    Hey, John Doe!
                  </span>
                </h1>
                <p className="max-w-[600px] text-primary-foreground md:text-2xl font-normal mt-4">
                  Good News! We have Assisted Living, and Home Care available for you in&nbsp; <br />
                </p>
                <p className="p-2 cursor-pointer peer text-primary-foreground w-fit text-3xl font-bold bg-[#ff5900]">
                  {location?.name}
                </p>
                <p className="py-2 text-primary-foreground md:text-sm -my-2 peer-hover:opacity-100 opacity-0 transition-all ease-out hover:opacity-100 cursor-pointer hover:underline">
                  {location?.address}
                </p>
                <Button asChild className="w-fit text-lg max-w-sm h-12 border border-[#0f5558] shadow-lg hover:shadow-md active:shadow-sm mt-4">
                  <Link href={`tel:${location?.phone}`}>
                    Call Us Now {location?.phone}
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                className="mx-auto aspect-[5/4] overflow-hidden rounded-xl object-cover object-center sm:w-full shadow-lg border-4"
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
