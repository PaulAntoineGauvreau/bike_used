
import styles from '../styles/cards.module.scss'
import {use} from 'react'
import { getBikes } from '../api/hello/route'



export default function CategorieDetail({params}) {

    
    let bikes = use(getBikes())
    const filterBikes = bikes.objects.filter(obj => {
        return obj.metadata.categorioso.slug === params.categorie
    });
    console.log(filterBikes)
    return (
        <div>

        <h2>{params.categorie}</h2> 
        <div className={styles.containerCard}>
        { Object.keys(filterBikes).length > 0
         ?
         <>
            { filterBikes.map((bike) => {
                console.log(bike.metadata.bike_images[0].bike_image.url)
                return (
                    <div key={bike.slug} className={styles.card}>
                        <img src={bike.metadata.bike_images[0].bike_image.url} alt="" />
                        <h3>{bike.title}</h3>
                    </div>
                )
            })}
        </>
        : 
            <h3>Il n'y pas de vélos dans cette catégorie...</h3>
        
        }
        </div>
        </div>

    )
  }