import React, { FC, useEffect, useState } from "react";
import './cyberpunk-progressive-bar.scss'; // 引入CSS文件

interface CyberpunkProgressBarProps {
    progress: number;
}

const CyberpunkProgressBar: FC<CyberpunkProgressBarProps> = ({ progress = 20 }) => {
    const [activeBars, setActiveBars] = useState(0);

    useEffect(() => {
        setActiveBars(Math.floor(progress / 5));
    }, [progress]);

    return (
        <div className="cyberpunkProgressiveBar-demoContainer">
            <div className="cyberpunkProgressiveBar">
                {Array.from({ length: 20 }).map((_, index) => (
                    <div
                        className={`barSegment ${index < activeBars ? 'active' : index === activeBars ? 'rush' : ''}`}
                        key={index}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default CyberpunkProgressBar;
