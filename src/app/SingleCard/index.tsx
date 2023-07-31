import styles from './layout.module.css'
// import Header from '../components/common/header/header'
import Hero from '../components/place/Hero/Hero'
import MiniMap from '../components/place/Actions/MiniMap'
import Reel from '../components/place/Reel/Reel'
import Menu from '../components/place/Menu/Menu'
import placesData from '../components/data/placesData'
import { motion, useInView } from "framer-motion"
const defaultId = 1;
interface CardData {
  id: number;
  image: string;
  title: string;

}

export default function SingleCard({
  params,
}: {
  params: { id:number };
}) {





  return (
    <motion.main

    className={styles.main}>
      {/* <Header /> */}

      <Hero params={params}/>
      <div className={styles.actions}>
        <MiniMap/>
        <Reel />
      </div>
      <Menu />

    </motion.main>
  )
}
