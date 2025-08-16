import styles from '@/components/Portfolio/Portfolio.module.css';

// Define the types for the component's props
interface NavigationControlsProps {
    onPrev: () => void;
    onNext: () => void;
    currentIndex: number;
    total: number;
}

const NavigationControls: React.FC<NavigationControlsProps> = ({ onPrev, onNext, currentIndex, total }) => {
    return (
        <div className={styles.navigationControls}>
            {/* Left Arrow */}
            <div className={styles.arrow} onClick={onPrev}>
                &#x2190; {/* Left arrow character */}
            </div>

            {/* Progress Dots */}
            <div className={styles.progressDots}>
                {/* Create an array from 0 to 'total' and map over it to render dots */}
                {Array.from({ length: total }).map((_, index) => (
                    <div
                        key={index}
                        className={`${styles.dot} ${currentIndex === index ? styles.active : ''}`}
                    />
                ))}
            </div>

            {/* Right Arrow */}
            <div className={styles.arrow} onClick={onNext}>
                &#x2192; {/* Right arrow character */}
            </div>
        </div>
    );
};

export default NavigationControls;