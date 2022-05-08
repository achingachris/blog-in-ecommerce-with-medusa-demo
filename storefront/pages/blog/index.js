import styles from '../../styles/home.module.css'

const index = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.title}>Bloging Page</h1>
          <p className={styles.description}>
            Learn Tips on How to Grow Your Online Store
          </p>
        </div>
      </main>
    </div>
  )
}

export default index
