import { useEffect, useState } from "react";

export function useTyped(phrases: string[], speed = 65, pause = 2200) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    if (!phrases.length) return;

    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    function tick() {
      const current = phrases[phraseIndex];

      if (deleting) {
        charIndex--;
        setDisplay(current.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          timeout = setTimeout(tick, 400);
          return;
        }
        timeout = setTimeout(tick, speed / 2);
      } else {
        charIndex++;
        setDisplay(current.slice(0, charIndex));
        if (charIndex === current.length) {
          deleting = true;
          timeout = setTimeout(tick, pause);
          return;
        }
        timeout = setTimeout(tick, speed);
      }
    }

    timeout = setTimeout(tick, 800);
    return () => clearTimeout(timeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return display;
}
