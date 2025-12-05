import React, { useEffect, useRef, useState } from "react";
import api from "../../assets/imgaes/apifinall.svg";
import cloud from "../../assets/imgaes/cloudfinall.svg";
import lightning from "../../assets/imgaes/rocketfinall.svg";
import rocket from "../../assets/imgaes/rocketfinall.svg";
import sheild from "../../assets/imgaes/sheildfinall.svg";
import star from "../../assets/imgaes/starfinall.svg";
import wifi from "../../assets/imgaes/wififinall.svg";

const images = [api, cloud, lightning, rocket, sheild, star, wifi];

const TrailCursor = ({
  spawnDistance = 50,
  displayDuration = 2000,
  fadeOutDuration = 900,
}) => {
  const [trailIcons, setTrailIcons] = useState([]);
  const lastPosition = useRef({ x: 0, y: 0 });
  const iconIdCounter = useRef(0);

  useEffect(() => {
    const faq = document.querySelector(".faq-area");
    if (!faq) return;

    const handleMove = (e) => {
      const rect = faq.getBoundingClientRect();
      const currentX = e.clientX - rect.left;
      const currentY = e.clientY - rect.top;

      const distance = Math.sqrt(
        Math.pow(currentX - lastPosition.current.x, 2) +
          Math.pow(currentY - lastPosition.current.y, 2)
      );

      if (distance >= spawnDistance) {
        const newIcon = {
          id: iconIdCounter.current++,
          x: currentX,
          y: currentY,
          image: images[iconIdCounter.current % images.length],
          spawnTime: Date.now(),
          velocityX: (Math.random() - 0.5) * 0.5,
          velocityY: (Math.random() - 0.5) * 0.5,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 2,
        };

        setTrailIcons((prev) => [...prev, newIcon]);
        lastPosition.current = { x: currentX, y: currentY };

        setTimeout(() => {
          setTrailIcons((prev) =>
            prev.filter((icon) => icon.id !== newIcon.id)
          );
        }, displayDuration + fadeOutDuration);
      }
    };

    faq.addEventListener("mousemove", handleMove);
    return () => faq.removeEventListener("mousemove", handleMove);
  }, [spawnDistance, displayDuration, fadeOutDuration]);

  useEffect(() => {
    let animationFrame;

    const animate = () => {
      setTrailIcons((prev) =>
        prev.map((icon) => {
          return {
            ...icon,
            x: icon.x + icon.velocityX,
            y: icon.y + icon.velocityY,
            rotation: icon.rotation + icon.rotationSpeed,
            velocityX: icon.velocityX * 0.98,
            velocityY: icon.velocityY * 0.98,
          };
        })
      );

      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {trailIcons.map((icon) => {
        const currentTime = Date.now();
        const timeAlive = currentTime - icon.spawnTime;

        let opacity = 1;
        if (timeAlive > displayDuration) {
          const fadeProgress = (timeAlive - displayDuration) / fadeOutDuration;
          opacity = Math.max(0, 1 - fadeProgress);
        }

        const scaleProgress = Math.min(timeAlive / 200, 1);
        const scale = 0.5 + scaleProgress * 0.5;

        return (
          <img
            key={icon.id}
            src={icon.image}
            alt="trail"
            className="absolute pointer-events-none"
            style={{
              left: `${icon.x}px`,
              top: `${icon.y}px`,
              width: "150px",
              height: "150px",
              transform: `translate(-50%, -50%) scale(${scale}) rotate(${icon.rotation}deg)`,
              opacity: opacity,
              transition: "transform 0.1s ease-out",
            }}
          />
        );
      })}
    </div>
  );
};

export default TrailCursor;
