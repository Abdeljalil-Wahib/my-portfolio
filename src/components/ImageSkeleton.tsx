import styles from "./ImageSkeleton.module.css";

interface ImageSkeletonProps {
  width?: string | number;
  height?: string | number;
  borderRadius?: string;
  className?: string;
}

export default function ImageSkeleton({
  width = "100%",
  height = "100%",
  borderRadius = "0",
  className = "",
}: ImageSkeletonProps) {
  return (
    <div
      className={`${styles.skeleton} ${className}`}
      style={{
        width,
        height,
        borderRadius,
      }}
    >
      <div className={styles.shimmer}></div>
    </div>
  );
}
