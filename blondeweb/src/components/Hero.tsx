import { Image, Textarea } from "@heroui/react";

export default function Hero() {
  return (
    <div className="w-full flex-1">
      <div className="flex w-full flex-row items-end justify-between gap-10">
        <div className="flex flex-col gap-4 max-w-xl">
          <h1 className="text-7xl font-bold leading-none">
            <span className="text-white">Create your</span> <br />
            <span
              className="
                animate-purple-shift
                bg-gradient-to-r from-violet-400 via-fuchsia-500 to-indigo-400
                bg-clip-text text-transparent
              "
            >
              own website
            </span>
          </h1>

          <Textarea
            isReadOnly
            className="max-w-xs"
            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus gravida quis blandit turpi"
            labelPlacement="outside"
            variant="bordered"
          />
        </div>

        <Image
          alt="HeroUI hero Image"
          src="https://heroui.com/images/hero-card-complete.jpeg"
          width={600}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
