import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../ui/card";

// Define the category data for mapping
const categories = [
  {
    id: 1,
    title: "HANGING LIGHT",
    description:
      "Upgrade your space with our modern hanging light, featuring sleek lines, energy-efficient LED lighting, and adjustable height.",
    images: [
      {
        src: "/categori-lamp.png",
        alt: "Hanging light",
      
      },
    ],
    bgColor: "#f7f7f7",
    contentPosition: "bottom",
    imageContainerStyle: "absolute w-[209px] h-[194px] top-0 left-20",
  },
  {
    id: 2,
    title: "DESIGNED SOFA",
    description:
      "Introducing our newest sofa, the perfect combination of style and comfort, designed to elevate your living space and provide ultimate relaxation.",
    images: [
      {
        src: "/img-2.png",
        alt: "Designed sofa",
      },
    ],
    bgColor: "#e5efe9",
    contentPosition: "top",
    textAlign: "text-center",
  },
  {
    id: 3,
    title: "NOVA CHAIR",
    description:
      "a stylish and comfortable addition to any room, with its sleek design and plush cushions creating the ultimate seating experience.",
    images: [
      {
        src: "/kursi-kayu.png",
        alt: "Nova chair",
      },
    ],
    bgColor: "#f7f7f7",
    contentPosition: "top",
    textAlign: "",
  },
];

export const CategoriesSection = (): JSX.Element => {
  return (
    <section className="flex flex-wrap justify-center gap-9 px-6 py-16 md:px-16 lg:px-32">
      {/* Hanging Light Card */}
      <Card
        className="relative flex-1 min-w-[300px] max-w-[321px] h-[400px] lg:h-[584px] mb-4 border-none rounded-none cursor-pointer group transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02] focus:border-transparent"
        style={{ backgroundColor: categories[0].bgColor }}
        tabIndex={0}
        role="button"
        aria-label={`View ${categories[0].title} category`}
      >
        <CardContent className="p-0 h-full">
          <div className={categories[0].imageContainerStyle}>
            {categories[0].images.map((image, index) => (
              <img
                key={index}
                className="absolute transition-transform duration-300 ease-in-out group-hover:scale-105 group-focus-within:scale-105"
                style={{
                  width: "180px",
                  height: "195px",
                  top: "0",
                  left: "40px",
                }}
                alt={image.alt}
                src={image.src}
              />
            ))}
          </div>

          <div className="absolute top-[170px] lg:top-[329px] left-8">
            <h2 className="font-h2-20-extra-bold font-[number:var(--h2-20-extra-bold-font-weight)] text-black-1 text-[length:var(--h2-20-extra-bold-font-size)] tracking-[var(--h2-20-extra-bold-letter-spacing)] leading-[var(--h2-20-extra-bold-line-height)] whitespace-nowrap [font-style:var(--h2-20-extra-bold-font-style)] transition-all duration-200 ease-in-out group-hover:font-extrabold group-focus-within:font-extrabold">
              {categories[0].title}
            </h2>

            <p className="w-[239px] mt-6 font-h3-16-medium font-[number:var(--h3-16-medium-font-weight)] text-black-3 text-[length:var(--h3-16-medium-font-size)] tracking-[var(--h3-16-medium-letter-spacing)] leading-[var(--h3-16-medium-line-height)] [font-style:var(--h3-16-medium-font-style)] transition-colors duration-200 ease-in-out group-hover:text-black-1 group-focus-within:text-black-1">
              {categories[0].description}
            </p>

            <div className="flex items-center mt-10 transition-all duration-200 ease-in-out group-hover:translate-x-1 group-focus-within:translate-x-1">
              <span className="font-h3-16-medium font-[number:var(--h3-16-medium-font-weight)] text-black-3 text-[length:var(--h3-16-medium-font-size)] tracking-[var(--h3-16-medium-letter-spacing)] leading-[var(--h3-16-medium-line-height)] [font-style:var(--h3-16-medium-font-style)] transition-all duration-200 ease-in-out group-hover:text-black-1 group-hover:font-semibold group-focus-within:text-black-1 group-focus-within:font-semibold">
                View more
              </span>
              <ChevronRightIcon className="w-4 h-4 ml-2 transition-all duration-200 ease-in-out group-hover:text-black-1 group-hover:translate-x-1 group-focus-within:text-black-1 group-focus-within:translate-x-1" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Nova Chair Card Jika Layar ukuran medium maka tampilkan (md:) */}
      <Card
        className="hidden relative md:flex-2 md:block lg:hidden min-w-[300px] max-w-[321px] h-[400px] border-none rounded-none cursor-pointer group transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02] focus:border-transparent"
        style={{ backgroundColor: categories[2].bgColor }}
        tabIndex={0}
        role="button"
        aria-label={`View ${categories[2].title} category`}
      >
        <CardContent className="p-0 h-full">
          <div className="absolute top-[47px] left-9">
            <h2 className="font-h2-20-extra-bold font-[number:var(--h2-20-extra-bold-font-weight)] text-black-1 text-[length:var(--h2-20-extra-bold-font-size)] tracking-[var(--h2-20-extra-bold-letter-spacing)] leading-[var(--h2-20-extra-bold-line-height)] whitespace-nowrap [font-style:var(--h2-20-extra-bold-font-style)] transition-all duration-200 ease-in-out group-hover:font-extrabold group-focus-within:font-extrabold">
              {categories[2].title}
            </h2>

            <p className="w-[239px] mt-6 font-h3-16-medium font-[number:var(--h3-16-medium-font-weight)] text-black-3 text-[length:var(--h3-16-medium-font-size)] tracking-[var(--h3-16-medium-letter-spacing)] leading-[var(--h3-16-medium-line-height)] [font-style:var(--h3-16-medium-font-style)] transition-colors duration-200 ease-in-out group-hover:text-black-3 group-focus-within:text-black-3">
              {categories[2].description}
            </p>

            <div className="flex items-center mt-10 transition-all duration-200 ease-in-out group-hover:translate-x-1 group-focus-within:translate-x-1">
              <span className="font-h3-16-medium font-[number:var(--h3-16-medium-font-weight)] text-black-3 text-[length:var(--h3-16-medium-font-size)] tracking-[var(--h3-16-medium-letter-spacing)] leading-[var(--h3-16-medium-line-height)] [font-style:var(--h3-16-medium-font-style)] transition-all duration-200 ease-in-out group-hover:text-black-1 group-hover:font-semibold group-focus-within:text-black-1 group-focus-within:font-semibold">
                View more
              </span>
              <ChevronRightIcon className="w-4 h-4 ml-2 transition-all duration-200 ease-in-out group-hover:text-black-1 group-hover:translate-x-1 group-focus-within:text-black-1 group-focus-within:translate-x-1" />
            </div>
          </div>

          {categories[2].images.map((image, index) => (
            <img
              key={index}
              className="absolute transition-transform duration-300 ease-in-out group-hover:scale-105 group-focus-within:scale-105"
              style={{
                width: "220px",
                height: "255px",
                top: "145px",
                left: "120px",
              }}
              alt={image.alt}
              src={image.src}
            />
          ))}
        </CardContent>
      </Card>

      {/* Designed Sofa Card - Perfectly Centered Content */}
      <Card
        className="relative flex-1 min-w-[300px] h-[450px] md:min-w-[450px] lg:h-[584px] border-none rounded-none cursor-pointer group transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02] focus:border-transparent"
        style={{ backgroundColor: categories[1].bgColor }}
        tabIndex={0}
        role="button"
        aria-label={`View ${categories[1].title} category`}
      >
        {/* <CardContent className="p-0 h-full">
          <div className="absolute top-[47px] left-9">
            <h2 className="font-h2-20-extra-bold font-[number:var(--h2-20-extra-bold-font-weight)] text-black-1 text-[length:var(--h2-20-extra-bold-font-size)] tracking-[var(--h2-20-extra-bold-letter-spacing)] leading-[var(--h2-20-extra-bold-line-height)] whitespace-nowrap [font-style:var(--h2-20-extra-bold-font-style)] transition-all duration-200 ease-in-out group-hover:font-extrabold group-focus-within:font-extrabold">
              {categories[2].title}
            </h2> */}
        <CardContent className="p-0 h-full relative mt-[-80px] lg:top-[-77px]">
          {/* Perfectly centered content container using flexbox */}
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <div className="flex flex-col items-center text-center space-y-6 max-w-[310px]">
              <h2 className="font-h2-20-extra-bold font-[number:var(--h2-20-extra-bold-font-weight)] text-black-1 text-[length:var(--h2-20-extra-bold-font-size)] tracking-[var(--h2-20-extra-bold-letter-spacing)] leading-[var(--h2-20-extra-bold-line-height)] whitespace-nowrap [font-style:var(--h2-20-extra-bold-font-style)] transition-all duration-200 ease-in-out group-hover:font-extrabold group-focus-within:font-extrabold">
                {categories[1].title}
              </h2>

              <p className="font-h3-16-medium font-[number:var(--h3-16-medium-font-weight)] text-black-3 text-[length:var(--h3-16-medium-font-size)] tracking-[var(--h3-16-medium-letter-spacing)] leading-[var(--h3-16-medium-line-height)] [font-style:var(--h3-16-medium-font-style)] transition-colors duration-200 ease-in-out group-hover:text-black-1 group-focus-within:text-black-1">
                {categories[1].description}
              </p>

              <div className="flex items-center transition-all duration-200 ease-in-out group-hover:translate-x-1 group-focus-within:translate-x-1">
                <span className="font-h3-16-medium font-[number:var(--h3-16-medium-font-weight)] text-black-3 text-[length:var(--h3-16-medium-font-size)] tracking-[var(--h3-16-medium-letter-spacing)] leading-[var(--h3-16-medium-line-height)] [font-style:var(--h3-16-medium-font-style)] transition-all duration-200 ease-in-out group-hover:text-black-1 group-hover:font-semibold group-focus-within:text-black-1 group-focus-within:font-semibold">
                  View more
                </span>
                <ChevronRightIcon className="w-4 h-4 ml-2 transition-all duration-200 ease-in-out group-hover:text-black-1 group-hover:translate-x-1 group-focus-within:text-black-1 group-focus-within:translate-x-1" />
              </div>
            </div>
          </div>

          {/* Sofa image positioned exactly as in Figma */}
          {categories[1].images.map((image, index) => (
            <img
              key={index}
              className="absolute transition-transform duration-300 ease-in-out group-hover:scale-105 group-focus-within:scale-105
              w-[90%] md:w-[90%] lg:w-[100%] xl:w-[90%] 2xl:w-[90%] max-w-[500px] h-auto left-1/2 -translate-x-1/2 top-[320px] mt-10 sm:mt-4 md:mt-4 md:top-[320px] lg:top-[430px] xl:top-[460px] 2xl:top-[500px]"
              alt={image.alt}
              src={image.src}
            />
          ))}
        </CardContent>
      </Card>

      {/* Nova Chair Card Jika layar ukuran md maka hide (md:) */}
      <Card
        className="relative flex-1 mt-4 md:hidden lg:block min-w-[300px] max-w-[321px] h-[400px] lg:h-[584px] lg:mt-0 border-none rounded-none cursor-pointer group transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02] focus:border-transparent"
        style={{ backgroundColor: categories[2].bgColor }}
        tabIndex={0}
        role="button"
        aria-label={`View ${categories[2].title} category`}
      >
        <CardContent className="p-0 h-full">
          <div className="absolute top-[47px] left-9">
            <h2 className="font-h2-20-extra-bold font-[number:var(--h2-20-extra-bold-font-weight)] text-black-1 text-[length:var(--h2-20-extra-bold-font-size)] tracking-[var(--h2-20-extra-bold-letter-spacing)] leading-[var(--h2-20-extra-bold-line-height)] whitespace-nowrap [font-style:var(--h2-20-extra-bold-font-style)] transition-all duration-200 ease-in-out group-hover:font-extrabold group-focus-within:font-extrabold">
              {categories[2].title}
            </h2>

            <p className="w-[239px] mt-6 font-h3-16-medium font-[number:var(--h3-16-medium-font-weight)] text-black-3 text-[length:var(--h3-16-medium-font-size)] tracking-[var(--h3-16-medium-letter-spacing)] leading-[var(--h3-16-medium-line-height)] [font-style:var(--h3-16-medium-font-style)] transition-colors duration-200 ease-in-out group-hover:text-black-1 group-focus-within:text-black-1">
              {categories[2].description}
            </p>

            <div className="flex items-center mt-10 transition-all duration-200 ease-in-out group-hover:translate-x-1 group-focus-within:translate-x-1">
              <span className="font-h3-16-medium font-[number:var(--h3-16-medium-font-weight)] text-black-3 text-[length:var(--h3-16-medium-font-size)] tracking-[var(--h3-16-medium-letter-spacing)] leading-[var(--h3-16-medium-line-height)] [font-style:var(--h3-16-medium-font-style)] transition-all duration-200 ease-in-out group-hover:text-black-1 group-hover:font-semibold group-focus-within:text-black-1 group-focus-within:font-semibold">
                View more
              </span>
              <ChevronRightIcon className="w-4 h-4 ml-2 transition-all duration-200 ease-in-out group-hover:text-black-1 group-hover:translate-x-1 group-focus-within:text-black-1 group-focus-within:translate-x-1" />
            </div>
          </div>

          {categories[2].images.map((image, index) => (
            <img
              key={index}
              className="absolute transition-transform duration-300 ease-in-out group-hover:scale-105 group-focus-within:scale-105
              w-[220px] h-[260px] top-[140px] left-[130px] lg:w-[250px] lg:h-[305px] lg:top-[280px] lg:left-[100px]"
              alt={image.alt}
              src={image.src}
            />
          ))}
        </CardContent>
      </Card>
    </section>
  );
};