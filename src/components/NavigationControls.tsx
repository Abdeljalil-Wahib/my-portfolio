import styles from "@/components/Portfolio/Portfolio.module.css";

interface NavigationControlsProps {
  onPrev: () => void;
  onNext: () => void;
  currentIndex: number;
  total: number;
}

const NavigationControls: React.FC<NavigationControlsProps> = ({
  onPrev,
  onNext,
  currentIndex,
  total,
}) => {
  return (
    <div className={styles.navigationControls}>
      <button
        className={styles.navButton}
        onClick={onPrev}
        aria-label="Previous project"
        type="button"
      >
        ←
      </button>
      <div className={styles.progressDots}>
        {Array.from({ length: total }).map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${
              currentIndex === index ? styles.activeDot : ""
            }`}
          />
        ))}
      </div>
      <button
        className={styles.navButton}
        onClick={onNext}
        aria-label="Next project"
        type="button"
      >
        →
      </button>
    </div>
  );
};

export default NavigationControls;
