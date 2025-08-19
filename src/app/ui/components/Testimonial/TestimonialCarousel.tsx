import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import VIBE1 from '../../../../assets/images/VIBE1.png'

interface Author {
  name: string;
  avatar: string;
  alt: string;
}

interface Testimonial {
  id: number;
  text: string;
  rating: number;
  author: Author;
}

interface StarRatingProps {
  rating: number;
  total?: number;
}

interface ArrowButtonProps {
  side: "left" | "right";
  onClick: () => void;
  ariaLabel: string;
  className?: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    text: "I never thought I'd find someone who just gets me. Vibely made it easy no stress, just vibes. 10/10 would recommend!",
    rating: 2,
    author: {
      name: "Ava Johnson",
      avatar: VIBE1,
      alt: "Portrait of Ava Johnson",
    },
  },
  {
    id: 2,
    text: "The community is so welcoming. Setup was seamless and the vibe is unmatched. Exactly what I needed.",
    rating: 4,
    author: {
      name: "Miles Carter",
      avatar: VIBE1,
      alt: "Portrait of Miles Carter",
    },
  },
  {
    id: 3,
    text: "From zero to connected in minutes. Thoughtful onboarding and genuinely helpful people all around.",
    rating: 5,
    author: {
      name: "Zoë Kim",
      avatar: VIBE1,
      alt: "Portrait of Zoë Kim",
    },
  },
  {
    id: 4,
    text: "No fluff—just real connections. It's rare to find a space that feels this effortless and human.",
    rating: 3,
    author: {
      name: "Kelechi Okoye",
      avatar: VIBE1,
      alt: "Portrait of Kelechi Okoye",
    },
  },
];

const StarRating: React.FC<StarRatingProps> = ({ rating, total = 5 }) => {
  return (
    <div
      className="flex items-center justify-center gap-2"
      role="img"
      aria-label={`${rating} out of ${total} stars`}
    >
      {Array.from({ length: total }).map((_, i) =>
        i < rating ? (
          <AiFillStar key={i} className="w-5 h-5 text-[#FFD700]" />
        ) : (
          <AiOutlineStar key={i} className="w-5 h-5 text-[#E0E0E0]" />
        )
      )}
    </div>
  );
};

const ArrowButton: React.FC<ArrowButtonProps> = ({
  side,
  onClick,
  ariaLabel,
  className = "",
}) => {
  const baseClasses =
    "absolute top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#8C3FFD] text-white flex items-center justify-center shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8C3FFD] focus:ring-offset-black transition active:scale-95";

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className={`${baseClasses} ${side === "left" ? "left-0" : "right-0"} ${className}`}
    >
      {side === "left" ? (
        <FiChevronLeft className="w-6 h-6 md:w-7 md:h-7" aria-hidden="true" />
      ) : (
        <FiChevronRight className="w-6 h-6 md:w-7 md:h-7" aria-hidden="true" />
      )}
    </button>
  );
};

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsCount = TESTIMONIALS.length;

  const nextTestimonial = () => setCurrentIndex((i) => (i + 1) % testimonialsCount);
  const prevTestimonial = () => setCurrentIndex((i) => (i - 1 + testimonialsCount) % testimonialsCount);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextTestimonial();
      if (e.key === "ArrowLeft") prevTestimonial();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const activeTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section className=" text-white py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <span className="text-sm font-bold tracking-wide uppercase text-[#7B3FE4]">
            Testimonial
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] bg-clip-text text-transparent">
            Our Community Speaks
          </h2>
        </div>

        <div className="relative mt-10 sm:mt-12 pb-12">
          <ArrowButton
            side="left"
            onClick={prevTestimonial}
            ariaLabel="Previous testimonial"
            className="-left-6 md:-left-12"
          />

          <div className="relative mx-auto max-w-4xl">
            <div className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] p-[2px] rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
              <article
                className="relative bg-white rounded-[22px] px-6 sm:px-10 py-8 sm:py-12 text-center"
                aria-label="Testimonial card"
              >
                <StarRating rating={activeTestimonial.rating} total={5} />

                <p className="mt-6 text-[#1C1C1C] text-lg sm:text-xl leading-relaxed">
                  {activeTestimonial.text}
                </p>

                <div className="absolute left-1/2 -translate-x-1/2 translate-y-1/2 -bottom-6 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden ring-4 ring-white shadow-md">
                  <img
                    src={activeTestimonial.author.avatar}
                    alt={activeTestimonial.author.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </article>
            </div>
          </div>

          <ArrowButton
            side="right"
            onClick={nextTestimonial}
            ariaLabel="Next testimonial"
            className="-right-6 md:-right-12"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;