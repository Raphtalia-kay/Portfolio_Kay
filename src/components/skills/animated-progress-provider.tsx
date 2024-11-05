import React, { useState, useEffect, ReactElement } from "react";


interface AnimatedProgressProviderProps {
  valueEnd: number; // Target percentage
  duration: number; // Duration for the animation in seconds
  easingFunction: (t: number) => number; // Easing function for smoothness
  children: (value: number) => ReactElement; // Child function to render with the animated value
}

const AnimatedProgressProvider: React.FC<AnimatedProgressProviderProps> = ({
  valueEnd,
  duration,
  easingFunction,
  children,
}) => {
  const [value, setValue] = useState(0); // Start from 0%

  useEffect(() => {
    const totalDuration = duration * 1000; // Convert to milliseconds
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      const elapsed = timestamp - startTime; // Calculate elapsed time
      const progress = Math.min(elapsed / totalDuration, 1); // Normalize progress between 0 and 1
      const easedValue = valueEnd * easingFunction(progress); // Calculate eased value based on target

      setValue(easedValue); // Update the current value

      if (progress < 1) {
        requestAnimationFrame(step); // Continue the animation
      }
    };

    requestAnimationFrame(step); // Start the animation loop

    return () => {
      setValue(0); // Reset value on unmount if necessary
    };
  }, [valueEnd, duration, easingFunction]);

  return <>{children(value)}</>; // Pass the current value to children
};

export default AnimatedProgressProvider;
