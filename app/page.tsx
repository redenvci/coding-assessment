import Image from "next/image"
import HeroImage from '@/public/hero.jpg';
import InquiryForm from "./form";

export default function Page() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#083739] text-center md:text-start">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <p className="text-primary-foreground">
                  <span>Home</span> |<span className="text-[#ff752f] hover:text-[#ffb915] cursor-pointer"> Inquiry Page</span>
                </p>
                <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-5xl xl:text-5xl">
                  <span className="text-white">Personalized Care Services</span>
                </h1>
                <p className="max-w-[600px] text-primary-foreground md:text-xl">
                  Get the care you or your loved one needs, tailored to your specific requirements.
                </p>
              </div>
              <InquiryForm />
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
