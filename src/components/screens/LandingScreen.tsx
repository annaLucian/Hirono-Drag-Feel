import AnimatedSpring from '@components/AnimatedSpring';
import Button from '@components/Button';
import { type LandingScreenProps } from '@/types/landingScreenProps';

const LandingScreen = ({ onStart, isExiting = false }: LandingScreenProps) => {
    return (
        <main
            className={`flex-1 flex flex-col items-center justify-center pt-8 px-4 ${
                isExiting ? 'animate-screen-exit pointer-events-none' : 'animate-screen-enter'
            }`}
        >
            <AnimatedSpring />
            <Button onClick={onStart} />
        </main>
    );
};

export default LandingScreen;
