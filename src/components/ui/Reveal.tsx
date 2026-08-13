import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  slideFrom?: "bottom" | "right" | "left" | "top" | "none"; 
};

export default function Reveal({ children, delay = 0, className = "", slideFrom = "bottom" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  let initialTransform = "none";
  if (slideFrom === "bottom") initialTransform = "translateY(24px)";
  if (slideFrom === "top") initialTransform = "translateY(-24px)";
  if (slideFrom === "right") initialTransform = "translateX(32px)";
  if (slideFrom === "left") initialTransform = "translateX(-32px)";

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : initialTransform,
        transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}