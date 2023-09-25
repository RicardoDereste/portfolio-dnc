import React, { useCallback, useEffect, useState, useMemo } from 'react';
import styles from './Resume.module.css';
import ButtonA from './ButtonA';

const Resume = () => {
  const [text, setText] = useState('');
  const [loop, setLoop] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const period = 100;
  const [delta, setDelta] = useState(100);

  const toRotate = useMemo(() => ['Ricardo Dereste!', 'a Frontend Developer!'], []);

  const toType = useCallback(() => {
    let i = loop % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setDelta(period);
      setLoop(loop + 1);
    }
  }, [loop, isDeleting, text, toRotate]);

  useEffect(() => {
    let clock = setInterval(() => {
      toType();
    }, delta);

    return () => {
      clearInterval(clock);
    };
  }, [toType, delta]);

  return (
    <div className={styles.resume} id='resume'>
      <h4>
        <strong>Welcome to my Portfolio</strong>
      </h4>
      <h1>Hello, I'm {text}</h1>
      <p>
        I'm Ricardo, a 24 years old web developer dedicated to creating engaging websites. Skilled in HTML, CSS, JavaScript, Sass, and React. Committed to continuous learning and delivering exceptional web experiences. Eager to contribute and collaborate.
      </p>
      <ButtonA text='Connect with me!!' link='https://github.com/RicardoDereste' />
    </div>
  );
};

export default Resume;