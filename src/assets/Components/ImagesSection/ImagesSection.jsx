import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, StarHalf } from 'lucide-react';

export default function ImagesSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(3);
    const trackRef = useRef(null);
    const autoSlideRef = useRef(null);

    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            title: "Marketing Director, TechCorp",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
            rating: 5,
            text: "The service was exceptional from start to finish. The team went above and beyond to deliver exactly what we needed."
        },
        {
            id: 2,
            name: "Michael Chen",
            title: "CTO, InnovateSoft",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
            rating: 4.5,
            text: "We've seen a 40% increase in productivity since implementing their solution. The onboarding process was seamless."
        },
        {
            id: 3,
            name: "Emma Rodriguez",
            title: "CEO, DesignHub",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
            rating: 4,
            text: "Their attention to detail and customer support is unmatched. We've partnered with them for all our digital needs."
        },
        {
            id: 4,
            name: "David Wilson",
            title: "Operations Manager, GlobalLogix",
            image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
            rating: 5,
            text: "The ROI was evident within the first quarter. Their platform has become indispensable to our operations."
        }
    ];

    const maxIndex = Math.max(0, testimonials.length - visibleCards);

    // Update visible cards based on screen size
    useEffect(() => {
        const updateVisibleCards = () => {
            if (window.innerWidth >= 1024) {
                setVisibleCards(3);
            } else if (window.innerWidth >= 768) {
                setVisibleCards(2);
            } else {
                setVisibleCards(1);
            }
        };

        updateVisibleCards();
        window.addEventListener('resize', updateVisibleCards);
        return () => window.removeEventListener('resize', updateVisibleCards);
    }, []);

    // Auto slide functionality
    const startAutoSlide = () => {
        autoSlideRef.current = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % (maxIndex + 1));
        }, 5000);
    };

    const resetAutoSlide = () => {
        if (autoSlideRef.current) {
            clearInterval(autoSlideRef.current);
        }
        startAutoSlide();
    };

    useEffect(() => {
        startAutoSlide();
        return () => {
            if (autoSlideRef.current) {
                clearInterval(autoSlideRef.current);
            }
        };
    }, [maxIndex]);

    const nextSlide = () => {
        setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
        resetAutoSlide();
    };

    const prevSlide = () => {
        setCurrentIndex(prev => Math.max(prev - 1, 0));
        resetAutoSlide();
    };

    const goToSlide = (index) => {
        setCurrentIndex(Math.min(index, maxIndex));
        resetAutoSlide();
    };

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
        }

        if (hasHalfStar) {
            stars.push(<StarHalf key="half" className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
        }

        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-yellow-400" />);
        }

        return stars;
    };

    return (
        <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4">
            <div className="max-w-7xl w-full mx-auto px-4">
                <div className="flex flex-col sm:flex-row text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Client Testimonials</h2>
                    {/* <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div> */}
                    <p className="text-xl text-left text-gray-600 max-w-2xl mx-auto">
                        Hear what our customers say about their experience with our products and services.
                    </p>
                </div>

                <div className="relative">
                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        disabled={currentIndex === 0}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-8 z-10 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-indigo-600 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={nextSlide}
                        disabled={currentIndex === maxIndex}
                        className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-8 z-10 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-indigo-600 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Carousel Container */}
                    <div
                        className="overflow-hidden relative"
                        onMouseEnter={() => {
                            if (autoSlideRef.current) {
                                clearInterval(autoSlideRef.current);
                            }
                        }}
                        onMouseLeave={startAutoSlide}
                    >
                        <div
                            ref={trackRef}
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{
                                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`
                            }}
                        >
                            {testimonials.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className={`flex-shrink-0 px-4  ${visibleCards === 1 ? 'w-full' : visibleCards === 2 ? 'w-1/2' : 'w-1/3'
                                        }`}
                                >
                                    <div className="bg-white p-8 rounded-xl shadow-lg h-full border border-gray-100 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                                        <div className="flex items-center mb-4">
                                            <div className="flex space-x-1">
                                                {renderStars(testimonial.rating)}
                                            </div>
                                        </div>
                                        <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                                        <div className="flex items-center">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-indigo-100"
                                            />
                                            <div>
                                                <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                                                <p className="text-gray-500 text-sm">{testimonial.title}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Indicators */}
                    <div className="flex justify-center mt-12 space-x-3">
                        {Array.from({ length: maxIndex + 1 }, (_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? 'bg-indigo-600 scale-125'
                                        : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}