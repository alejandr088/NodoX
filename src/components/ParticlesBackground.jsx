import React from "react";
import Particles from "react-tsparticles";

export default function ParticlesBackground(props) {
  return (
    <Particles
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
          },
        },
        particles: {
          color: { value: "#f87171" },
          links: {
            color: "#f87171",
            distance: 120,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          collisions: { enable: false },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: false,
            speed: 1,
            straight: false,
          },
          number: { density: { enable: true, area: 800 }, value: 40 },
          opacity: { value: 0.3 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
      style={{
        position: "fixed",
        zIndex: -60,
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        ...props.style,
      }}
    />
  );
}
