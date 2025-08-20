import styles from '@/components/Portfolio/Portfolio.module.css';

interface NavigationControlsProps {
    onPrev: () => void;
    onNext: () => void;
    currentIndex: number;
    total: number;
}

const NavigationControls: React.FC<NavigationControlsProps> = ({ onPrev, onNext, currentIndex, total }) => {
    return (
        <div className={styles.navigationControls}>
            <div className={styles.arrow} onClick={onPrev}>
                &#x2190;
            </div>

            <div className={styles.progressDots}>
                {Array.from({ length: total }).map((_, index) => (
                    <div
                        key={index}
                        className={`${styles.dot} ${currentIndex === index ? styles.active : ''}`}
                    />
                ))}
            </div>

            <div className={styles.arrow} onClick={onNext}>
                &#x2192;
            </div>
        </div>
    );
};

export default NavigationControls;