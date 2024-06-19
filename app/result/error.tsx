"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import HeroImage from '../../public/hero.jpg';

export default function Error() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#083739] text-center md:text-start">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex flex-col gap-2 items-center lg:items-start">
                <h1 className="text-3xl text-white font-bold tracking-tighter text-primary-foreground sm:text-5xl xl:text-5xl">
                  No results found.
                </h1>
                <p className="text-primary-foreground text-base">
                  Are you lost? Let&apos;s get you back home.
                </p>
                <Button asChild className="w-fit text-lg max-w-sm h-12 border border-[#0f5558] focus:!ring-2 focus:!ring-white shadow-lg hover:shadow-md active:shadow-sm mt-4">
                  <Link href={`/`}>
                    Go Back Home
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
