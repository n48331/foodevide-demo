"use client";
// import Card from "./components/home/card/Card"
import { useRef } from "react";
import placesData from "./components/data/placesData"
import styles from './layout.module.css'

import Hero from "./components/home/hero/Hero"
import { useRouter } from 'next/navigation'
import { motion,AnimatePresence,useInView } from "framer-motion"
import SingleCard from "./SingleCard";
import { useState,useEffect } from "react";

import Card from "./components/home/card/Card";

export default function Home() {
  const [selectedId, setSelectedId] = useState(null)
const [cardData, setcardData] = useState('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const handleClick = (id:any) => {
    
    setSelectedId(id)
  };
  useEffect(()=>{
    if (selectedId!== null) {
      document.body.classList.add("overflow-y-hidden")
    } else {
      document.body.classList.remove("overflow-y-hidden")
    }
  })



  return (
    <motion.main className={styles.main}>
      <Hero />
      <motion.div
      ref={ref}
       initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay:1,
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 20,
          stiffness: 100,
          restDelta: 0.001
        }
      }}
        className={styles.cards} >
        {placesData.map((item: any, index: number) => (        

     <Card key={index} layoutId={item.id} card_data={item} handleClick={handleClick}/>

        ))}
      </motion.div>
      <AnimatePresence>
      {selectedId!=null && (
        <motion.div 
        className="centeredcard"
        layoutId={selectedId}
        layoutScroll
         style={{ overflow: "scroll" ,borderRadius:"20px"}}
        
        >
        <SingleCard params={{id:selectedId}} />
        <motion.div onClick={() => setSelectedId(null)}>close</motion.div>
        </motion.div>
      )}
      </AnimatePresence>
    </motion.main>
  )
}


