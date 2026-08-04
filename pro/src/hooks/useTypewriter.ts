import { useState, useEffect, useRef } from 'react';

export function useTypewriter(strings: string[], speed = 80, deleteSpeed = 40, pauseMs = 1800) {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [stringIndex, setStringIndex] = useState(0);
  const [isWaiting, setIsWaiting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (isWaiting) return;

    const currentString = strings[stringIndex];

    timeoutRef.current = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentString.length) {
          setDisplayText(currentString.slice(0, displayText.length + 1));
        } else {
          setIsWaiting(true);
          setTimeout(() => {
            setIsDeleting(true);
            setIsWaiting(false);
          }, pauseMs);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentString.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setStringIndex((prev) => (prev + 1) % strings.length);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeoutRef.current);
  }, [displayText, isDeleting, stringIndex, isWaiting, strings, speed, deleteSpeed, pauseMs]);

  return displayText;
}
