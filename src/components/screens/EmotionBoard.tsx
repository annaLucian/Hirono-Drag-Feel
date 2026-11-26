import Button from '@components/Button';
import { type EmotionBoardProps } from '@/types/emotionBoardProps';

const EmotionBoard = ({ onBack }: EmotionBoardProps) => {
    return (
        <section className="w-full max-w-4xl flex flex-col items-center gap-6">
            <div className="w-full flex items-center justify-between">
                <h1 className="text-xl font-bold">Clasifica los sentimientos</h1>
                <Button onClick={onBack} className="px-4 py-1.5 text-xs">
                    ← Portada
                </Button>
            </div>
            <div className="w-full min-h-64 border-2 border-dashed border-black/30 rounded p-6 flex items-center justify-center">
                <p>Zona de personajes y emociones</p>
            </div>
        </section>
    );
};

export default EmotionBoard;
