import Image from "next/image"
import Link from "next/link"
export default function Cta() {
  return (
    <section className='cta-section'>
      <div className="cta-badge">
        start learning your way
      </div>
      <h2 className='text-3xl font-bold'>Build and Personalize Learning Companion</h2>
      <p> pick a name , subject voice and personality and start learning your way up through voice conversations
        that feel natural and fun!

      </p> 
      <Image src="./images/cta.svg" alt="cta" height={362} width={262}></Image>
      <button className="btn-primary">
        <Link href='/companions/new'>
        <p>+  build a  new Companion</p>
        </Link>
      </button>
    </section>
  )
}
