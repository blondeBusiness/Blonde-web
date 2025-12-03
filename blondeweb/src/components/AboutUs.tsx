import { Card, CardHeader, CardBody, Image } from "@heroui/react";

export default function AboutUs() {
  return (
    <>
      <h1 className="text-5xl font-bold leading-none text-center text-white mb-8">
        About Us
      </h1>

      <div className="flex flex-row gap-4">
      <Card
  className="
    py-4 bg-transparent border border-white/20 shadow-none
    transition-all duration-300 ease-out
    hover:-translate-y-2
    hover:shadow-xl hover:shadow-black/40
    hover:border-white/35
  "
>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold text-white/80">Daily Mix</p>
            <small className="text-white/50">12 Tracks</small>
            <h4 className="font-bold text-large text-white">Frontend Radio</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="https://heroui.com/images/hero-card-complete.jpeg"
              width={370}
            />
          </CardBody>
        </Card>

        <Card
  className="
    py-4 bg-transparent border border-white/20 shadow-none
    transition-all duration-300 ease-out
    hover:-translate-y-2
    hover:shadow-xl hover:shadow-black/40
    hover:border-white/35
  "
>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold text-white/80">Daily Mix</p>
            <small className="text-white/50">12 Tracks</small>
            <h4 className="font-bold text-large text-white">Frontend Radio</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="https://heroui.com/images/hero-card-complete.jpeg"
              width={370}
            />
          </CardBody>
        </Card>

        <Card
  className="
    py-4 bg-transparent border border-white/20 shadow-none
    transition-all duration-300 ease-out
    hover:-translate-y-2
    hover:shadow-xl hover:shadow-black/40
    hover:border-white/35
  "
>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold text-white/80">Daily Mix</p>
            <small className="text-white/50">12 Tracks</small>
            <h4 className="font-bold text-large text-white">Frontend Radio</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="https://heroui.com/images/hero-card-complete.jpeg"
              width={370}
            />
          </CardBody>
        </Card>
      </div>
    </>
  );
}
