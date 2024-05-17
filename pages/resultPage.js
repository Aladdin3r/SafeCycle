import { useRouter } from 'next/router';
import styles from '@/styles/Home.module.css';
import Button from '@/components/Button';

export default function ResultPage() {
    const router = useRouter();
    const { status, lesson } = router.query;

    return (
        <div className={styles.resultContainer}>
            <h2 className={styles.resultTitle}>{status === 'correct' ? 'Correct!' : 'Incorrect!'}</h2>
            <p className={styles.lesson}>{lesson}</p>
            <Button 
                href="/questionTwo"
                label="Next Question"
                width="200px"
            />
        </div>
    );
}
