import React from 'react';
import styles from './Category.module.css';

export function Category(){
    const categories = ['Pop', 'Rock', 'Hip-Hop', 'Jazz', 'Classical', 'Electronic', 'R&B', 'Country'];

    return (
        <div className={styles.dashboardContainer}>
            <h2 className={styles.categoriesTitle}>Browse by Category</h2>
            <div className={styles.categoriesFlex}>
                {categories.map((category, index) => (
                <button key={index} className={styles.categoryButton}>
                    {category}
                </button>
                ))}
            </div>
        </div>
    );
  };