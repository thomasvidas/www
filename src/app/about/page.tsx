import Image from "next/image"
import Link from "next/link"
import styles from "./about.module.css"

export default function About() {
  return (
    <main className="md:p-4">
      <menu className={styles.menu}><Link href="/">Back</Link></menu>
      <section className={styles.about}>
        <div className="md:p-4">
          <h1 className="text-4xl md:text-6xl lg:text-8xl">Hello 👋</h1>
          <p>
            I'm Thomas, a software engineer living in Boston, MA. 
            I'm currently a Principal Software Engineer at Stax Payments 
            focused on revamping what their payment experience looks like 
            on mobile.
          </p>
          <p>
            I like making things that are pleasant to use, integrate with,
            or experience. Whether it's a contributing to a new way of
            making mobile apps with web tools, writing music, or making games;
            I like to build it all!
          </p>
        </div>
        <Image 
          src="/img/me.png"
          alt="A photo of me"
          height={400}
          width={400}
          />
      </section>
    </main>
  )
}