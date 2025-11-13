import styles from "@/components/Portfolio/Portfolio.module.css";

interface NavigationControlsProps {
  onPrev: () => void;
  onNext: () => void;
  currentIndex: number;
  total: number;
}

/**
 * Navigation controls component for portfolio carousel
 * Displays left/right arrows and progress dots
 */
const NavigationControls: React.FC<NavigationControlsProps> = ({
  onPrev,
  onNext,
  currentIndex,
  total,
}) => {
  return (
    <div className={styles.navigationControls}>
      <button
        className={styles.arrow}
        onClick={onPrev}
        aria-label="Previous project"
        type="button"
      >
        &#x2190;
      </button>

      <div
        className={styles.progressDots}
        role="tablist"
        aria-label="Project indicators"
      >
        {Array.from({ length: total }).map((_, index) => (
          <div
            key={index}
            role="tab"
            aria-selected={currentIndex === index}
            aria-label={`Project ${index + 1}`}
            className={`${styles.dot} ${
              currentIndex === index ? styles.active : ""
            }`}
          />
        ))}
      </div>

      <button
        className={styles.arrow}
        onClick={onNext}
        aria-label="Next project"
        type="button"
      >
        &#x2192;
      </button>
    </div>
  );
};

export default NavigationControls;
