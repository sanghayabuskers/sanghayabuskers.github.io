import styles from './FeaturedPerformance.module.css';

export const FeaturedPerformance = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Featured Performance</h2>
      <div className={styles.videoWrapper}>
        <iframe
          src="https://www.youtube.com/embed/VdoXFir3JLo"
          title="Featured Performance"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <a href="#artists" className={styles.cta}>
        Meet All Artists
      </a>
    </section>
  );
}; 