import {HeartIcon, MinusIcon, PlusIcon, StarIcon} from "lucide-react";
import {useState} from "react";
import {Badge} from "../ui/badge";
import {Card, CardContent} from "../ui/card";

import {Separator} from "../ui/separator";
import {ToggleGroup, ToggleGroupItem} from "../ui/toggle-group";
import {Breadcrumb, BreadcrumbItem, BreadcrumbLink} from "../../components/ui/breadcrumb";
import {Button} from "../ui/button";
import {useNavigate} from "react-router-dom";

export const ProductDetailsSection = () : JSX.Element => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/cart"); // ← arahkan ke halaman /product
    };

    // Product types
    const [selectedType,
        setSelectedType] = useState("Long");
    const productTypes = ["Long", "Medium", "Short"];

    // Product colors
    const [productType,
        setProductType] = useState("Emerald");
    const productColors = ["Coban", "Saphire", "Emerald", "Ruby"];

    const images = [
        "/kursi-kayu.png",
        "/kursi-bantal.png",
        "/kursi-samping.png",
        "/categori-lamp.png",
        "/kursi-kayu.png",
    ];

    const [activeImage,
        setActiveImage] = useState(images[0]);

    const [quantity,
        setQuantity] = useState(1);

    const handleDecrease = () => {
        if (quantity > 1) 
            setQuantity(quantity - 1);
        };
    
    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    return (
        <section className="w-full bg-black-7 mb-20">
            <div className="flex flex-wrap text-left gap-8 px-4 lg:px-0 lg:max-w-[1392px] lg:mx-auto">
                <Breadcrumb className="mt-8 mb-4">
                    <BreadcrumbItem>
                        <BreadcrumbLink className="font-medium text-black-3 leading-5">
                            Home/Furniture/
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink
                            className="font-h3-16-bold text-black-1 leading-[var(--h3-16-bold-line-height)]">
                            Modern bronze hanging light
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="w-full bg-white">
                {/* <div className="flex items-center grid grid-cols-1 md:grid-cols-2 justify-between md:flex-row"> */}
                <div className="flex flex-col md:flex-row justify-between w-full gap-8 md:gap-0">

                    {/* Product Image Section */}
                    <div className="w-full flex flex-col overflow-x-auto md:mt-16 md:pb-0 md:w-1/2 lg:w-full">
                        <div
                            className="relative w-full mt-12 flex flex-col items-center justify-center md:w-1/2 md:items-center md:justify-center md:ml-[100px] lg:translate-x-[10%] lg:px-0 lg:mx-auto">
                            {/* Lingkaran background */}
                            <div
                                className="w-[350px] h-[350px] rounded-full bg-gradient-to-b from-[#D9DAE1] to-[#949798]"/> {/* Gambar menonjol ke bawah */}
                            <img
                                src={activeImage}
                                alt="Product"
                                className="w-[600px] h-[500px] absolute top-1/2 mt-10 -translate-y-[60%] left-1/2 -translate-x-1/2 lg:mr-30px object-contain z-10"/>
                        </div>
                        {/* Thumbnail Gallery */}
                        <div className="mt-28 md:mt-[90px] overflow-x-auto scrollbar-hide md:mx-[35px] lg:ml-[80px] lg:mr-[25px]">
                            <div className="flex flex-nowrap gap-4 justify-start w-max px-2 my-2 lg:px-4">
                                {images.map((img, index) => (<img
                                    key={index}
                                    src={img}
                                    onMouseEnter={() => setActiveImage(img)}
                                    alt={`Thumbnail ${index}`}
                                    className={`w-24 h-24 object-contain bg-gradient-to-b from-[#D9DAE1] to-[#949798] rounded-r-lg rounded-l-lg border-none shadow-none bg-transparent cursor-pointer group transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-none ${activeImage === img
                                    ? 'border-2 border-black '
                                    : 'border-transparent '}`}/>))}
                            </div>
                        </div>
                    </div>
                    {/* Product Details Section */}
                    {/* <div className="w-full md:w-1/2 md:mb-0 lg:flex lg:justify-end items-center lg:mr-24 lg:w-auto 2xl:mr-[300px]"></div> */}
                    <div className="w-full md:w-1/2 md:mb-0 lg:flex lg:justify-end items-center lg:mr-24 lg:w-auto">
                    <Card
                        className="flex-1 mt-12 md:mt-[14%] lg:mt-24 max-w-[520px] shadow-[0px_0px_0px_#0000000d,0px_20px_45px_#0000000a,0px_81px_81px_#0000000a,0px_183px_110px_#00000005,0px_326px_130px_#00000003,0px_509px_142px_transparent] bg-black-8">
                        <CardContent className="flex flex-col gap-4 p-8 md:w-full">
                            <h1
                                className="font-h1-32-extra-bold font-[number:var(--h1-32-extra-bold-font-weight)] text-black-1 text-[length:var(--h1-32-extra-bold-font-size)] tracking-[var(--h1-32-extra-bold-letter-spacing)] leading-[var(--h1-32-extra-bold-line-height)] [font-style:var(--h1-32-extra-bold-font-style)]">
                                RADIANCE MODERN SOFA
                            </h1>

                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (<StarIcon key={i} className="w-5 h-5 fill-current text-yellow-400"/>))}
                                </div>
                                <Badge
                                    className="bg-[#ce0000] text-bg-1 font-h4-14-medium px-3 py-1 rounded-none">
                                    ON SALE
                                </Badge>
                            </div>

                            <div className="flex items-center gap-3">
                                <span
                                    className="font-h3-16-medium font-[number:var(--h3-16-medium-font-weight)] text-black-3 text-[length:var(--h3-16-medium-font-size)] tracking-[var(--h3-16-medium-letter-spacing)] leading-[var(--h3-16-medium-line-height)] [font-style:var(--h3-16-medium-font-style)]">
                                    261 products sold
                                </span>
                                <div className="w-1 h-1 bg-black-3 rounded-sm"/>
                                <span
                                    className="font-h3-16-medium font-[number:var(--h3-16-medium-font-weight)] text-black-3 text-[length:var(--h3-16-medium-font-size)] tracking-[var(--h3-16-medium-letter-spacing)] leading-[var(--h3-16-medium-line-height)] [font-style:var(--h3-16-medium-font-style)]">
                                    3,1k products watched
                                </span>
                            </div>

                            <Separator className="w-[280px]"/>

                            <div className="flex flex-col gap-6">
                                <span
                                    className="font-h3-16-medium font-[number:var(--h3-16-medium-font-weight)] text-black-3 text-[length:var(--h3-16-medium-font-size)] tracking-[var(--h3-16-medium-letter-spacing)] leading-[var(--h3-16-medium-line-height)] [font-style:var(--h3-16-medium-font-style)]">
                                    Type:
                                </span>
                                <ToggleGroup
                                    type="single"
                                    value={selectedType}
                                    onValueChange={(val) => val && setSelectedType(val)}
                                    className="flex gap-4">
                                    {productTypes.map((type) => {
                                        const isActive = selectedType === type;

                                        return (
                                            <ToggleGroupItem
                                                key={type}
                                                value={type}
                                                className={` w-[124px] h-10 rounded-md font-medium bg-black transition-colors duration-200 ${isActive
                                                ? "!bg-black !text-white"
                                                : "bg-white text-black hover:bg-gray-100"} `}>
                                                {type}
                                            </ToggleGroupItem>
                                        );
                                    })}
                                </ToggleGroup>

                            </div>

                            <div className="flex flex-col gap-6">
                                <span
                                    className="font-h3-16-medium font-[number:var(--h3-16-medium-font-weight)] text-black-3 text-[length:var(--h3-16-medium-font-size)] tracking-[var(--h3-16-medium-letter-spacing)] leading-[var(--h3-16-medium-line-height)] [font-style:var(--h3-16-medium-font-style)]">
                                    Color
                                </span>
                                <ToggleGroup
                                    type="single"
                                    value={productType}
                                    onValueChange={(val) => val && setProductType(val)}
                                    className="flex gap-4">
                                    {productColors.map((type) => {
                                        const isActive = productType === type;

                                        return (
                                            <ToggleGroupItem
                                                key={type}
                                                value={type}
                                                className={` w-[124px] h-10 rounded-md font-medium bg-black transition-colors duration-200 ${isActive
                                                ? "!bg-black !text-white"
                                                : "bg-white text-black hover:bg-gray-100"} `}>
                                                {type}
                                            </ToggleGroupItem>
                                        );
                                    })}
                                </ToggleGroup>
                            </div>

                            <Separator className="w-[280px]"/>

                            <div className="flex items-center justify-between w-full">
                                <div className="flex h-12 items-center gap-3 px-6 py-3 bg-black-7 rounded-sm">
                                    <MinusIcon
                                        onClick={handleDecrease}
                                        className="w-5 h-5 cursor-pointer hover:opacity-70 transition-opacity"/>
                                    <div
                                        className="flex items-center gap-2 font-['Lato',Helvetica] font-normal text-base">
                                        <span className="select-none font-normal text-black-3">Qty:</span>
                                        <span className="select-none font-h3-16-bold text-black-1">
                                            {quantity}
                                        </span>
                                    </div>
                                    <PlusIcon
                                        onClick={handleIncrease}
                                        className="w-5 h-5 cursor-pointer hover:opacity-70 transition-opacity"/>
                                </div>

                                <div
                                    className="select-none text-lg sm:text-xl md:text-lg font-bold sm:font-extrabold font-[number:var(--text-xl font-extrabold-font-weight)] text-[#ce0000] text-[length:var(--text-xl -extra-bold-font-size)] tracking-[var(--h1-32-extra-bold-letter-spacing)] leading-[var(--h1-32-extra-bold-line-height)] [font-style:var(--h1-32-extra-bold-font-style)]">
                                    Rp. 100.000.000
                                </div>
                            </div>
                            <div className="flex items-center w-full gap-4 mt-4">
                                <Button
                                    onClick={handleClick}
                                    className="select-none flex-1 bg-black-1 text-bg-1 font-h3-16-bold font-[number:var(--h3-16-bold-font-weight)] text-[length:var(--h3-16-bold-font-size)] tracking-[var(--h3-16-bold-letter-spacing)] leading-[var(--h3-16-bold-line-height)] [font-style:var(--h3-16-bold-font-style)] h-12 rounded-none hover:bg-black-1/90">
                                    ADD TO CART
                                </Button>
                                <Button
                                    variant="outline"
                                    className="h-12 w-12 p-0 rounded-none border-black-1 hover:bg-black-1 hover:text-bg-1">
                                    <HeartIcon className="w-5 h-5"/>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};