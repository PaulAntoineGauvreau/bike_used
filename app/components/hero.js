import styles from '../styles/page.module.scss'
import { getHero } from '../api/hello/route'
import { use } from 'react'

export default function Hero() {
    let data = use(getHero())
    return (
        <div className={styles.containerHero}>
            <img src={data.objects[0].metadata.hero_image.url} alt="" />
            <div className={styles.content}>
                <h2>{data.objects[0].title}</h2>
                <p>{data.objects[0].metadata.sub_title}</p>
            </div>

      </div>
    )
  }