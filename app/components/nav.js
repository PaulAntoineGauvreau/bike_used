import styles from '../styles/nav.module.scss'
import { getCategories} from '../api/hello/route'
import { use } from 'react'
import Categorie from '../categorie/page'


export default function Nav() {
  let categories = use(getCategories())
    return (
      <nav className={styles.nav}>
       { Object.entries(categories.objects).map((categorie) => {
        console.log(categorie[1].slug)
            return (
              <Categorie
                key={categorie[1].title}
                slug={categorie[1].slug}
                title={categorie[1].title}
              />
            )
          })
          }
      </nav>
    )
}