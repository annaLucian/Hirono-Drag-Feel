import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import springAnimation from '@/assets/spring.json';

interface AnimatedSpringProps {
    className?: string;
}

const AnimatedSpring = ({ className = 'w-2xl' }: AnimatedSpringProps) => {
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
