import Link from "next/link"
import styles from "./home.module.css"
import Card from "@/components/card"

export default function Home() {
  return (
    <main className="p-4">
      <nav>
        <ul className={styles.navbar}>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/blog">Blog</Link></li>
        </ul>
      </nav>
      <section className={styles.hero}>
        <div>
          <h1 className="text-4xl md:text-6xl lg:text-8xl">Thomas Vidas</h1>
          <h4 className="text-xl">software engineer</h4>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card 
          title="Stax Payments"
          image="/img/stax-card.png"
          alt="Stax Payments company logo"
          details={`A unicorn startup in the payment processing space.
                    I'm the principal engineer leading all things mobile.`}
          />
        <Card 
          title="Ionic"
          image="/img/capacitor-card.png"
          alt="Capacitor project logo"
          details={`An open-source company that maintains Ionic Framework,
                    Capacitor, and Stencil. I was a core contributor to Capacitor.`}
          />
        <Card 
          title="Localytics"
          image="/img/upland-card.png"
          alt="Upland Localytics company logo"
          details={`A mobile analytics platform that provides Android and iOS
                    SDKs that are installed on tens of millions on devices.`}
          />
        <Card 
          title="Kinopio"
          image="/img/kinopio-card.png"
          alt="Toad from the Super Mario series"
          details={`A 3D platforming framework built with Unity. Provides a
                    foundation a game similar to the Super Mario games.`}
          />
        <Card 
          title="Launch That"
          image="/img/launch-that-card.png"
          alt="Launch That company logo"
          details={`An Orlando-based marketing agency. I led a small team
                    of engineers that provided a whitelabeled SaaS product.`}
          />
        <Card 
          title="And More!"
          image="/img/kitten-card.jpg"
          alt="Placeholder image of a kitten"
          details={`Want to see more? Contact me for specific info on mobile and
                    web based projects I've created :)`}
          />


      </section>
      <div className="p-4"/>
      <hr className="p-2"/>
      <section>
        <ul className={styles.footer}>
          <li><Link href="https://github.com/thomasvidas">GitHub</Link></li>
          <li><Link href="https://linkedin.com/in/thomas-vidas">LinkedIn</Link></li>
          <li><Link href="https://twitter.com/thomasvidas">Twitter</Link></li>
        </ul>
      </section>
    </main>
  )
}
