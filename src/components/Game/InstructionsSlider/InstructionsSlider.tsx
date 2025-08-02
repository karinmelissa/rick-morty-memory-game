import { useState, useEffect } from 'react';
import styles from './InstructionsSlider.module.css';
import { Button } from '@/components/Button';
import { instructionsSlides as slides } from '@/data/instructions';

interface InstructionsSliderProps {
    onComplete: () => void;
}

export const InstructionsSlider = ({ onComplete }: InstructionsSliderProps) => {
    const [step, setStep] = useState(0);
    const [isFading, setIsFading] = useState(false);

    const handleNext = () => {
        setIsFading(true);
        setTimeout(() => {
            setStep((prev) => prev + 1);
            setIsFading(false);
        }, 400);
    };

    useEffect(() => {
        if (step === slides.length - 1) onComplete();
    }, [step, onComplete]);

    return (
        <div className={styles.slider}>
            <div className={`${styles.slideContent} ${isFading ? styles.fadeOut : ''}`}>
                <h3>{slides[step].title}</h3>
                <div className={styles.content}>
                    <p className={styles.text}>{slides[step].content}</p>
                    <img src={slides[step].imgPath} alt="" className={styles.img} />
                </div>


            </div>

            {step < slides.length - 1 && (
                <Button variant='tertiary' onClick={handleNext}>
                    Siguiente
                </Button>
            )}
        </div>
    );
};