import { useEffect, useState } from 'react';

const NeonCubes = () => {
    const [cubes, setCubes] = useState<number[]>([]);

    const createCubes = () => {
        const newCubes = Array.from({ length: 10 }, (_, index) => index);
        setCubes(newCubes);
        setTimeout(() => {
            setCubes([]); // Clear cubes after animation
        }, 1000); // Match the duration of the animation
    };

    useEffect(() => {
        createCubes(); // Trigger cube creation on mount
    }, []);

    return (
        <div className="relative w-full h-full overflow-hidden">
            {cubes.map((_, index) => (
                <div
                    key={index}
                    className="absolute bottom-0 left-0 w-12 h-12 bg-cyan-400 rounded-lg animate-pop"
                    style={{
                        left: `${Math.random() * 100}vw`, // Random horizontal position
                        animationDelay: `${index * 100}ms`, // Stagger the animation
                    }}
                />
            ))}
        </div>
    );
};

export default NeonCubes; 