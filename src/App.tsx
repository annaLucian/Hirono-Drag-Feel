import '@/style/App.css';
import { useEffect, useRef, useState } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import LandingScreen from '@components/screens/LandingScreen';
import EmotionBoard from '@components/screens/EmotionBoard';
import bgImg from '@/assets/bg.jpg';

const EXIT_DURATION_MS = 220;

function App() {
    const [started, setStarted] = useState(false);
    const [isLeaving, setIsLeaving] = useState(false);
    const timeoutRef = useRef<number | null>(null);

    const handleStart = () => {
        if (isLeaving) return;
        setIsLeaving(true);
        timeoutRef.current = window.setTimeout(() => {
            setStarted(true);
            setIsLeaving(false);
        }, EXIT_DURATION_MS);
    };

    const handleBack = () => {
        if (timeoutRef.current) {
            window.clearTimeout(timeoutRef.current);
        }
        setIsLeaving(false);
        setStarted(false);
    };

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                window.clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const containerStyle = !started ? { backgroundImage: `url(${bgImg})` } : undefined;

    return (
        <div
            style={containerStyle}
            className={`min-h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col justify-between transition-colors duration-300 ${
                !started ? '' : 'bg-red-500'
            }`}
        >
            <Header />

            {!started ? (
                <LandingScreen onStart={handleStart} isExiting={isLeaving} />
            ) : (
                <div className="flex-1 flex flex-col animate-screen-enter">
                    <EmotionBoard onBack={handleBack} />
                </div>
            )}

            <Footer />
        </div>
    );
}

export default App;
