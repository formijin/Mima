import { useRef, useState, useEffect } from 'react';
import BenefitCarouselCard from './BenefitCarouselCard';

import './Carousel.css';

const Carousel = () => {
    const carouselRef = useRef(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeftRef = useRef(0);
    const [scrollProgress, setScrollProgress] = useState(0);

    const startDrag = (e) => {
        isDragging.current = true;
        carouselRef.current.classList.add('dragging');
        startX.current = e.pageX || e.touches[0].pageX;
        scrollLeftRef.current = carouselRef.current.scrollLeft;
    };

    const stopDrag = () => {
        isDragging.current = false;
        carouselRef.current.classList.remove('dragging');

        // Snap to the nearest 460px after dragging
        const scrollPosition = carouselRef.current.scrollLeft;
        const snappedPosition = Math.round(scrollPosition / 460) * 460;
        carouselRef.current.scrollTo({ left: snappedPosition, behavior: 'smooth' });
    };

    const drag = (e) => {
        if (!isDragging.current) return;
        e.preventDefault();
        const x = e.pageX || e.touches[0].pageX;
        const walk = (x - startX.current) * 2; // Adjust the speed of scrolling
        carouselRef.current.scrollLeft = scrollLeftRef.current - walk;
    };

    const scrollToLeft = () => {
        carouselRef.current.scrollBy({ left: -460, behavior: 'smooth' });
    };

    const scrollToRight = () => {
        carouselRef.current.scrollBy({ left: 460, behavior: 'smooth' });
    };

    const handleScroll = () => {
        const maxScrollLeft = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
        const currentScrollLeft = carouselRef.current.scrollLeft;
        const scrollPercentage = (currentScrollLeft / maxScrollLeft) * 100;
        setScrollProgress(scrollPercentage);
    };

    useEffect(() => {
        const carouselElement = carouselRef.current;
        carouselElement.addEventListener('scroll', handleScroll);

        return () => {
            carouselElement.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className="carousel-container">
            <div
                className="carousel-track"
                ref={carouselRef}
                onMouseDown={startDrag}
                onMouseLeave={stopDrag}
                onMouseUp={stopDrag}
                onMouseMove={drag}
                onTouchStart={startDrag}
                onTouchEnd={stopDrag}
                onTouchMove={drag}
            >

                <BenefitCarouselCard
                title={'Invoicing/Receipt'}
                body={'Eliminate the need for paper invoices, create and send Invoices/Receipts to your customers easily and receive payments through the invoice.'}
                cardNumber={'1'}
                />
                <BenefitCarouselCard
                title={'Global Storefront'}
                body={"Don't let borders limit your sales potential. With our platform, you can sell your products or services to customers worldwide."}
                cardNumber={'2'}
                />
                <BenefitCarouselCard
                title={'Multi-currency Payment'}
                body={'Get paid in any currency with ease. Our platform allows you to receive international payments for your products and services directly into your multi-currency wallet, making it simple to manage your global sales.'}
                cardNumber={'3'}
                />
                <BenefitCarouselCard
                title={'Pay Bills'}
                body={'A convenient, easy and secure way to manage and pay your bills directly from your mobile device.'}
                cardNumber={'4'}
                />
                <BenefitCarouselCard
                title={'Transactions'}
                body={'Keep track of your daily business incomes and expenses. With this feature you can properly manage your business.'}
                cardNumber={'5'}
                />
                <BenefitCarouselCard
                    title={"Business Account"}
                    body={'Receive payments using your business name and easily manage your finances with our reliable platform. Trust us to handle your payments while you focus on growing your business'}
                    cardNumber={'6'}
                />
            </div>
            <div className="carousel-nav">
                <button className="carousel-nav-button left" onClick={scrollToLeft}>←</button>
                <div className="carousel-indicator">
                    <div className="carousel-progress" style={{ width: `${scrollProgress}%` }}></div>
                </div>
                <button className="carousel-nav-button right" onClick={scrollToRight}>→</button>
            </div>
        </div>
    );
};

export default Carousel;
