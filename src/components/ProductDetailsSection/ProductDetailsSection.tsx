import {
  HeartIcon,
  MinusIcon,
  PlusIcon,
  StarIcon,
} from "lucide-react";
import React from "react";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";

import { Separator } from "../ui/separator";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "../ui/toggle-group";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "../../components/ui/breadcrumb";
import {Button} from "../ui/button";
import { useNavigate } from "react-router-dom";

export const ProductDetailsSection = (): JSX.Element => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/cart"); // ← arahkan ke halaman /product
  };

  // Product types
  const productTypes = ["Long", "Medium", "Short"];

  // Product colors
  const productColors = ["Coban", "Saphire", "Emerald", "Ruby"];

  return (
    <section className="w-full bg-black-7 mb-20">
      <div className="flex flex-wrap justify-start gap-8 pt-8 pl-20 pr-20 pb-8 lg:px-24">
          <Breadcrumb className="mt-8 mb-4">
            <BreadcrumbItem>
              <BreadcrumbLink className="font-medium text-black-3 leading-5">
                Home/Furniture/
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink className="font-h3-16-bold text-black-1 leading-[var(--h3-16-bold-line-height)]">
                Modern bronze hanging light
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
      <div className="px-[264px] pb-16">
        <div className="flex items-center justify-between">
          {/* Product Image Section */}
          <div className="relative w-[600px] h-[500px] flex items-center justify-center">
            <div className="w-[350px] h-[350px] rounded-full [background:linear-gradient(180deg,rgba(217,218,225,1)_0%,rgba(148,151,152,1)_100%)]" />
            <img
              className="w-[350px] h-[350px] absolute -bottom-8 left-1/2 transform -translate-x-1/2 object-contain"
              alt="Product"
              src="/img.png"
            />
          </div>


          {/* Product Details Section */}
          <Card className="flex-1 max-w-[520px] shadow-[0px_0px_0px_#0000000d,0px_20px_45px_#0000000a,0px_81px_81px_#0000000a,0px_183px_110px_#00000005,0px_326px_130px_#00000003,0px_509px_142px_transparent] bg-black-8">
            <CardContent className="flex flex-col gap-4 p-12">
              <h1 className="font-h1-32-extra-bold font-[number:var(--h1-32-extra-bold-font-weight)] text-black-1 text-[length:var(--h1-32-extra-bold-font-size)] tracking-[var(--h1-32-extra-bold-letter-spacing)] leading-[var(--h1-32-extra-bold-line-height)] [font-style:var(--h1-32-extra-bold-font-style)]">
                RADIANCE MODERN SOFA
              </h1>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className="w-5 h-5 fill-current text-yellow-400"
                    />
                  ))}
                </div>
                <Badge className="bg-[#ce0000] text-bg-1 font-h4-14-medium px-3 py-1 rounded-none">
                  ON SALE
                </Badge>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-h3-16-medium font-[number:var(--h3-16-medium-font-weight)] text-black-3 text-[length:var(--h3-16-medium-font-size)] tracking-[var(--h3-16-medium-letter-spacing)] leading-[var(--h3-16-medium-line-height)] [font-style:var(--h3-16-medium-font-style)]">
                  261 products sold
                </span>
                <div className="w-1 h-1 bg-black-3 rounded-sm" />
                <span className="font-h3-16-medium font-[number:var(--h3-16-medium-font-weight)] text-black-3 text-[length:var(--h3-16-medium-font-size)] tracking-[var(--h3-16-medium-letter-spacing)] leading-[var(--h3-16-medium-line-height)] [font-style:var(--h3-16-medium-font-style)]">
                  3,1k products watched
                </span>
              </div>

              <Separator className="w-[280px]" />

              <div className="flex flex-col gap-6">
                <span className="font-h3-16-medium font-[number:var(--h3-16-medium-font-weight)] text-black-3 text-[length:var(--h3-16-medium-font-size)] tracking-[var(--h3-16-medium-letter-spacing)] leading-[var(--h3-16-medium-line-height)] [font-style:var(--h3-16-medium-font-style)]">
                  Type:
                </span>
                <ToggleGroup
                  type="single"
                  defaultValue="Long"
                  className="flex gap-4"
                >
                  {productTypes.map((type) => (
                    <ToggleGroupItem
                      key={type}
                      value={type}
                      className={`w-[124px] h-10 font-h3-16-bold font-[number:var(--h3-16-bold-font-weight)] text-[length:var(--h3-16-bold-font-size)] tracking-[var(--h3-16-bold-letter-spacing)] leading-[var(--h3-16-bold-line-height)] [font-style:var(--h3-16-bold-font-style)] ${type === "Long" ? "bg-black-1 text-black-7" : "bg-black-7 text-black-1"}`}
                    >
                      {type}
                    </ToggleGroupItem>
                  ))}
                </ToggleGroup>
              </div>

              <div className="flex flex-col gap-6">
                <span className="font-h3-16-medium font-[number:var(--h3-16-medium-font-weight)] text-black-3 text-[length:var(--h3-16-medium-font-size)] tracking-[var(--h3-16-medium-letter-spacing)] leading-[var(--h3-16-medium-line-height)] [font-style:var(--h3-16-medium-font-style)]">
                  Color
                </span>
                <ToggleGroup
                  type="single"
                  defaultValue="Emerald"
                  className="flex gap-4"
                >
                  {productColors.map((color) => (
                    <ToggleGroupItem
                      key={color}
                      value={color}
                      className={`w-[124px] h-10 font-h3-16-bold font-[number:var(--h3-16-bold-font-weight)] text-[length:var(--h3-16-bold-font-size)] tracking-[var(--h3-16-bold-letter-spacing)] leading-[var(--h3-16-bold-line-height)] [font-style:var(--h3-16-bold-font-style)] ${color === "Emerald" ? "bg-[#3f625e] text-black-7" : "bg-black-7 text-black-1"}`}
                    >
                      {color}
                    </ToggleGroupItem>
                  ))}
                </ToggleGroup>
              </div>

              <Separator className="w-[280px]" />

              <div className="flex items-center justify-between w-full">
                <div className="flex h-12 items-center gap-3 px-6 py-3 bg-black-7 rounded-sm">
                  <MinusIcon className="w-5 h-5 cursor-pointer hover:opacity-70 transition-opacity" />
                  <div className="flex items-center gap-2 font-['Lato',Helvetica] font-normal text-base">
                    <span className="font-medium text-black-3">Number:</span>
                    <span className="font-h3-16-bold font-[number:var(--h3-16-bold-font-weight)] text-black-1 text-[length:var(--h3-16-bold-font-size)] tracking-[var(--h3-16-bold-letter-spacing)] leading-[var(--h3-16-bold-line-height)] [font-style:var(--h3-16-bold-font-style)]">
                      1
                    </span>
                  </div>
                  <PlusIcon className="w-5 h-5 cursor-pointer hover:opacity-70 transition-opacity" />
                </div>
                
                <div className="text-xl font-extrabold font-[number:var(--text-xl font-extrabold-font-weight)] text-[#ce0000] text-[length:var(--text-xl -extra-bold-font-size)] tracking-[var(--h1-32-extra-bold-letter-spacing)] leading-[var(--h1-32-extra-bold-line-height)] [font-style:var(--h1-32-extra-bold-font-style)]">
                  Rp. 10.000.000
                </div>
              </div>
              <div className="flex items-center w-full gap-4 mt-4">
                
                <Button onClick={handleClick} className="flex-1 bg-black-1 text-bg-1 font-h3-16-bold font-[number:var(--h3-16-bold-font-weight)] text-[length:var(--h3-16-bold-font-size)] tracking-[var(--h3-16-bold-letter-spacing)] leading-[var(--h3-16-bold-line-height)] [font-style:var(--h3-16-bold-font-style)] h-12 rounded-none hover:bg-black-1/90">
                  ADD TO CART
                </Button>
                <Button variant="outline" className="h-12 w-12 p-0 rounded-none border-black-1 hover:bg-black-1 hover:text-bg-1">
                  <HeartIcon className="w-5 h-5" />
                </Button>
              </div>

            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};