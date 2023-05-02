import styles from '../../styles/bike.module.scss'
import {use} from 'react'
import { getBike } from '../../api/hello/route'
import  Accordion  from '../../components/accordion'

export default function Footer(params) {
    let bike = use(getBike(params))
    // console.log(params)
    return (
      <div>
        <h2>{bike.objects[0].title}</h2>
        <div className={styles.bikeContainer}>
            <div className={styles.containerImage}>
                <img src={bike.objects[0].metadata.bike_images[0].bike_image.url} alt={bike.objects[0].title} />
            </div>
            <div className={styles.bikeInfo}> 
                <h2>{bike.objects[0].metadata.brand}</h2>
                <h3>{bike.objects[0].metadata.model}</h3>
                <p>Grandeur: {bike.objects[0].metadata.framer_size} $</p>
                <p>{bike.objects[0].metadata.price} $</p>
                <p>{bike.objects[0].metadata.year.substring(0,4)}</p>
                <p>Condition {bike.objects[0].metadata.condition.value}</p>
                <p dangerouslySetInnerHTML={{__html: bike.objects[0].metadata.description}}/>
                <button>Add to cart</button>
               
            </div>
        </div>
        <div className={styles.containerAccordion}>
          <Accordion/>
          <Accordion/>
          <Accordion/>
          <Accordion/>
          <Accordion/>
        </div>
      </div>
    )
  }