import { useState, useEffect } from 'react';
import "./TypeWriter.css"

export default function TypeWriter({ type_list: typeList, speed = 100, pause = 1500, preText }) {
    const [typeIndex, setTypeIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
  
    const text = typeList[typeIndex];
  
    useEffect(() => {
      let timeout;
  
      if (!isDeleting && index < text.length) {
        timeout = setTimeout(() => {
          setDisplayedText(text.slice(0, index + 1));
          setIndex(index + 1);
        }, speed);
      } else if (isDeleting && index > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(text.slice(0, index - 1));
          setIndex(index - 1);
        }, speed / 2);
      } else if (!isDeleting && index === text.length) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pause);
      } else if (isDeleting && index === 0) {
        timeout = setTimeout(() => {
          const next = (typeIndex + 1) % typeList.length;
          setTypeIndex(next);
          setIsDeleting(false);
        }, pause/2);
      }
  
      return () => clearTimeout(timeout);
    }, [index, isDeleting, text, speed, pause, typeIndex, typeList]);
  
    return (
    <>
        <div className="Typewriter_wrapper">
            {preText}
            <span className="Typewriter">
                {displayedText} 
              <span className="Typewriter_cursor">{"\|"}</span>
            </span>
        </div>
    </>
    );
  }