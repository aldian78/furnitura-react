import {ChevronLeftIcon, ChevronRightIcon, StarIcon} from "lucide-react";
import React, {useCallback, useEffect, useState} from "react";
import {Avatar, AvatarFallback, AvatarImage} from "../ui/avatar";
import {Button} from "../ui/button";
import {Card, CardContent} from "../ui/card";

// Customer review data
const reviews = [
    {
        id: 1,
        image: "/img-5.png",
        text: "I was blown away by the quality and style of the mid-century modern armchair! Th" +
                "e clean lines and sleek design are simply stunning, and the leather upholstery i" +
                "s incredibly soft and comfortable. The chair is also very versatile, as it can b" +
                "e easily incorporated into any room in the house.",
        author: "Larry Johnson"
    }, {
        id: 2,
        image: "/img-6.png",
        text: "The sofa is not only incredibly stylish, but also very comfortable to lounge on." +
                " The clean lines and minimalist design make it a perfect fit for my modern livin" +
                "g room, and the neutral color scheme allows me to easily incorporate other accen" +
                "t pieces. The sofa is also very sturdy and well-constructed, so I know it will l" +
                "ast me for years to come.",
        author: "Sarah Mitchell"
    }, {
        id: 3,
        image: "/img-7.png",
        text: "Vintage feel that is sure to impress your dinner guests. The table is also very " +
                "functional, with ample space for family meals or entertaining. I appreciate the " +
                "attention to detail and quality materials used in its construction. This is defi" +
                "nitely a piece that will become a cherished family heirloom.",
        author: "Michael Chen"
    }
];

export const CustomerReviewsSection = () : JSX.Element => {
    const [currentSlide,
        setCurrentSlide] = useState(0);
    const [isAutoPlaying,
        setIsAutoPlaying] = useState(true);
    const [isPaused,
        setIsPaused] = useState(false);

    // Auto-scroll functionality
    useEffect(() => {
        if (!isAutoPlaying || isPaused) 
            return;
        
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % reviews.length);
        }, 4000); // 4 seconds per slide

        return () => clearInterval(interval);
    }, [isAutoPlaying, isPaused]);

    // Navigation functions
    const goToSlide = useCallback((index : number) => {
        setCurrentSlide(index);
        setIsAutoPlaying(false);
        // Resume auto-play after 10 seconds of inactivity
        setTimeout(() => setIsAutoPlaying(true), 10000);
    }, []);

    const goToPrevious = useCallback(() => {
        const newIndex = currentSlide === 0
            ? reviews.length - 1
            : currentSlide - 1;
        goToSlide(newIndex);
    }, [currentSlide, goToSlide]);

    const goToNext = useCallback(() => {
        const newIndex = (currentSlide + 1) % reviews.length;
        goToSlide(newIndex);
    }, [currentSlide, goToSlide]);

    // Keyboard navigation
    const handleKeyDown = useCallback((event : React.KeyboardEvent) => {
        if (event.key === "ArrowLeft") {
            goToPrevious();
        } else if (event.key === "ArrowRight") {
            goToNext();
        }
    }, [goToPrevious, goToNext]);

    // Pause/resume on hover
    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);

    return (
        <section
            className="flex flex-col items-center gap-[52px] pt-12 pb-6 w-full overflow-hidden"
            style={{
            paddingLeft: '12px',
            paddingRight: '12px'
        }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="region"
            aria-label="Customer reviews slider">
            <div className="flex flex-col items-center gap-9 w-full">
                <h2
                    className="font-h1-32-extra-bold font-[number:var(--h1-32-extra-bold-font-weight)] text-black-1 text-[length:var(--h1-32-extra-bold-font-size)] text-center tracking-[var(--h1-32-extra-bold-letter-spacing)] leading-[var(--h1-32-extra-bold-line-height)] [font-style:var(--h1-32-extra-bold-font-style)]">
                    REVIEWED BY CUSTOMERS
                </h2>

                <h3
                    className="font-h3-16-bold font-[number:var(--h3-16-bold-font-weight)] text-black-3 text-[length:var(--h3-16-bold-font-size)] text-center leading-[var(--h3-16-bold-line-height)] tracking-[var(--h3-16-bold-letter-spacing)] [font-style:var(--h3-16-bold-font-style)]">
                    WHAT OUR CUSTOMERS THINK ABOUT US?
                </h3>
            </div>

            {/* Slider Container - Exact Figma dimensions */}
            <div className="relative w-full max-w-[864px]">
                {/* Navigation Arrows - Positioned exactly as in Figma */}
                <Button
                    variant="outline"
                    size="icon"
                    className="hidden absolute left-[-80px] top-1/2 -translate-y-1/2 z-10 w-[60px] h-[60px] rounded-full bg-white border-2 border-black-5 hover:bg-black-1 hover:border-black-1 hover:text-white transition-all duration-200 shadow-lg"
                    onClick={goToPrevious}
                    aria-label="Previous review">
                    <ChevronLeftIcon className="w-6 h-6"/>
                </Button>

                <Button
                    variant="outline"
                    size="icon"
                    className="hidden absolute right-[-80px] top-1/2 -translate-y-1/2 z-10 w-[60px] h-[60px] rounded-full bg-white border-2 border-black-5 hover:bg-black-1 hover:border-black-1 hover:text-white transition-all duration-200 shadow-lg"
                    onClick={goToNext}
                    aria-label="Next review">
                    <ChevronRightIcon className="w-6 h-6"/>
                </Button>

                {/* Slides Container - Exact height and spacing */}
                <div className="relative overflow-hidden h-[450px]">
                    <div
                        className="flex transition-transform duration-500 ease-in-out h-full"
                        style={{
                        transform: `translateX(-${currentSlide * 100}%)`
                    }}
                        aria-live="polite"
                        aria-atomic="true">
                        {reviews.map((review, index) => (
                            <div
                                key={review.id}
                                className="w-full flex-shrink-0 h-full flex items-center justify-center"
                                aria-hidden={index !== currentSlide}>
                                <Card className="border-none shadow-none bg-transparent w-full max-w-[732px]">
                                    <CardContent
                                        className="flex flex-col items-center gap-9 p-0 h-full justify-center">
                                        <div className="flex flex-col items-center gap-4">
                                            {/* Avatar - Exact Figma size */}
                                            <Avatar
                                                className="w-[96px] h-[96px] border-2 border-solid border-[#2f302c] rounded-full">
                                                <AvatarImage
                                                    src={review.image}
                                                    alt={`${review.author} profile picture`}
                                                    className="object-cover"/>
                                                <AvatarFallback className="text-lg font-bold">
                                                    {review
                                                        .author
                                                        .split(' ')
                                                        .map(n => n[0])
                                                        .join('')}
                                                </AvatarFallback>
                                            </Avatar>

                                            {/* Stars - Exact spacing */}
                                            <div
                                                className="flex items-center justify-center gap-1"
                                                aria-label="5 star rating">
                                                {[...Array(5)].map((_, i) => (<StarIcon
                                                    key={i}
                                                    className="w-4 h-4 fill-current text-black-1"
                                                    aria-hidden="true"/>))}
                                            </div>
                                        </div>

                                        {/* Review content - Exact typography and spacing */}
                                        <div className="w-full max-w-[732px] text-center">
                                            <blockquote
                                                className="text-base lg:text-xl font-bold italic text-[#2f302c] text-[20px] leading-[28px] [font-family:'Lato',Helvetica] mb-6">
                                                "{review.text}"
                                            </blockquote>
                                            <cite
                                                className="font-h3-16-medium font-[number:var(--h3-16-medium-font-weight)] text-[#7e7f7c] text-[length:var(--h3-16-medium-font-size)] [font-style:var(--h3-16-medium-font-style)] tracking-[var(--h3-16-medium-letter-spacing)] leading-[var(--h3-16-medium-line-height)] not-italic">
                                                — {review.author}
                                                —
                                            </cite>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Pagination Dots - Exact Figma positioning and sizing */}
            <div
                className="flex items-center gap-1 w-[116px] justify-center"
                role="tablist"
                aria-label="Review pagination">
                {reviews.map((_, index) => (<button
                    key={index}
                    className={`h-1 rounded-none transition-all duration-300 ease-in-out ${index === currentSlide
                    ? "flex-1 bg-black-1"
                    : "w-5 bg-black-5 hover:bg-black-3"}`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to review ${index + 1}`}
                    role="tab"
                    aria-selected={index === currentSlide}
                    tabIndex={index === currentSlide
                    ? 0
                    : -1}/>))}
            </div>
        </section>
    );
};