'use client';
import { useState } from 'react';

import styles from '../styles/accordion.module.scss'


export default function Accordion() {

    const [isOpen, setIsOpen] = useState(false)
    const [isHidden, setIsHidden] = useState(true)

    const expendAccordion = () => {
        
        setIsOpen(!isOpen)

      
        // setTimeout(() => {
        //     setIsHidden(!isHidden);
        // }, "250")

        
    }

  return (
    <div className={styles.accordion}>
        <div className={styles.accordionPanel}>
            <h2 id="panel1-heading">
                <button
                    className="accordion-trigger"
                    aria-controls="panel1-content"
                    aria-expanded={isOpen}
                    onClick={expendAccordion}
                >
                    <span id="panel1-title">Button du carrousel</span>
                    <svg aria-hidden={isOpen} className="accordion-icon"></svg>
                </button>
            </h2>
                <div 
                    className={styles.accordionContent} 
                    id="panel1-content"
                    aria-labelledby="panel1-heading"
                    // hidden={isHidden}
                    role="region"
                >
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ut eos qui earum mollitia minima, quas nulla ab dignissimos temporibus voluptatum sed? Maiores, nulla. Animi deleniti aut a rerum alias. Checkpoint SLR 7 is a carbon gravel bike that's built for crushing the world's greatest gravel races. The lightweight 700 Series OCLV Carbon frame has gravel-smoothing IsoSpeed and a nimble-yet-stable progressive geometry. Plus, a Shimano GRX drivetrain that shifts smoothly even in the gnarliest gravel, and extra mounts for gear and accessories. This bike a true gravel-grinding powerhouse.</p>
                    {/* <img
                        className="accordion-image"
                        src="/Bicycle-on-a-beach.webp" 
                        alt="A bike on the beach with a sunset" 
                    /> */}
                </div>
            
        </div>
    </div>
  )
}