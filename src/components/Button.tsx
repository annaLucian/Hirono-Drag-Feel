import { type ButtonProps } from '@/types/button';

const Button = ({ children = 'Empezar', onClick, className = '' }: ButtonProps) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`animate-stamp-nudge group relative overflow-hidden inline-flex items-center justify-center px-20 py-2 rounded-[3px] bg-white text-md text-black border-2 border-black font-bold  uppercase tracking-[0.14em] shadow-[4px_4px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#000000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#000000] transition-all duration-150 cursor-pointer select-none lg:text-lg ${className}`}
        >
            <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-black/10 to-transparent transition-transform duration-500 ease-out group-hover:translate-x-full"
            />
            <span className="relative flex items-center gap-2">
                {children}
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
            </span>
        </button>
    );
};

export default Button;
