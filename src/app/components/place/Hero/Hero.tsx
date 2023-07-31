import styles from './hero.module.css'



export default function Hero({
    params,
  }: {
    params: { id:number };
  }) {
    if (!params) {
        return <div>No data available.</div>;
    }
    return (
        <>
            <section className={styles.banner} style={{background:'url(/images/places/1.jpg)'}}>
                <div>
                    <h4>{params.id} Grand Hotel</h4>
                </div>
            </section>

        </>
    )
}
