import styles from '../styles/nav.module.scss'
import { getCategories} from '../api/hello/route'
import { use } from 'react'
import Categorie from '../categorie/page'


export default function Nav() {
  let categories = use(getCategories())
    return (
      <nav className={styles.nav}>
        <h1><a href="/">LOGO</a></h1>
          <div className={styles.containerLink }>
          { Object.entries(categories.objects).map((categorie) => {
                return (
                  <Categorie className={styles.nav}
                    key={categorie[1].title}
                    slug={categorie[1].slug}
                    title={categorie[1].title}
                  />
                )
              })
          }
          </div>
        </nav>
    )
}