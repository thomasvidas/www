import Image from "next/image"
import Link from "next/link"

import styles from "./card.module.css"

type CardProps = {
  alt: string
  image: string
  title: string
  details: string
}

export default function Card(props: CardProps) {
  return (
    <div className={styles.card}>
      <Image 
        src={props.image} 
        alt={props.alt} 
        width={300} 
        height={200}
        style={{ objectFit: "cover" }}
      />
      <h2 className="text-xl">{props.title}</h2>
      <p>{props.details}</p>
    </div>
  )
}