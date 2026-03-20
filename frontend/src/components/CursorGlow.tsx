import { useEffect } from "react";

export default function CursorGlow() {
  useEffect(() => {
    const glow = document.createElement("div");
    glow.style.position = "fixed";
    glow.style.width = "300px";
    glow.style.height = "300px";
    glow.style.borderRadius = "50%";
    glow.style.pointerEvents = "none";
    glow.style.background = "radial-gradient(circle, rgba(0,0,0,0.1), transparent)";
    glow.style.transform = "translate(-50%, -50%)";
    glow.style.zIndex = "9999";

    document.body.appendChild(glow);

    window.addEventListener("mousemove", (e) => {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    });
  }, []);

  return null;
}