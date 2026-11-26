import '@/style/App.css';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Button from './components/Button';
import AnimatedSpring from '@components/AnimatedSpring';

function App() {
    return (
        <div className="h-full flex flex-col items-center justify-center">
            <Header />
            <main className="h-full flex-1 flex flex-col items-center justify-center mt-14">
                <AnimatedSpring />
                <Button />
            </main>
            <Footer />
        </div>
    );
}

export default App;
