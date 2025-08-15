import { useEffect, useState } from "react";
import "./LoadingScreen.css";

export const LoadingScreen = ({ onComplate }) => {
    const [text, setText] = useState("");
    const [loadingProgress, setLoadingProgress] = useState(0);
    const fullText = "< Welcome to My Portfolio />";

    useEffect(() => {
        let index = 0;
        const textInterval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if (index > fullText.length) {
                clearInterval(textInterval);
            }
        }, 100);

        // Progress animation
        const progressInterval = setInterval(() => {
            setLoadingProgress(prev => {
                const next = prev + 1;
                if (next >= 100) {
                    clearInterval(progressInterval);
                    setTimeout(() => {
                        onComplate();
                    }, 500);
                    return 100;
                }
                return next;
            });
        }, 50);

        return () => {
            clearInterval(textInterval);
            clearInterval(progressInterval);
        };
    }, [onComplate, fullText]);






    return (
        <div className="loading-screen">
            {/* Logo/Brand */}
            <div className="loading-logo pulse">
                AY
            </div>

            {/* Typing Text */}
            <div className="typing-text fade-up">
                <span className="typing-animation">
                    {text}
                </span>
            </div>

            {/* Loading Bar */}
            <div className="loading-container">
                <div className="loading-progress"></div>
                <div className="text-center text-sm sm:text-base text-gray-400 fade-up tracking-wider font-mono">
                    Loading Your Experience... {loadingProgress}%
                </div>
            </div>

            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px]"></div>
            </div>
        </div>
    )
}