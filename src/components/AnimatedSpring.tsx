import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import springAnimation from '@/assets/spring.json';
import { type AnimatedSpringProps } from '@/types/animatedSpringProps';

const AnimatedSpring = ({ className = 'w-md lg:w-xl' }: AnimatedSpringProps) => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const anim = lottie.loadAnimation({
            container,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: springAnimation,
        });

        return () => {
            anim.destroy();
        };
    }, []);

    return <div ref={containerRef} className={className} />;
};

export default AnimatedSpring;
