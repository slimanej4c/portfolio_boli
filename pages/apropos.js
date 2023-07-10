
import Layout from '../hocs/Layout'
import { motion } from 'framer-motion';
import { connect } from 'react-redux'
import React, { useState } from "react";
function apropos(props) {
  const contenu = [
    {
      fr: [
        {
          id: 1,
          title: "À propos de moi",
          text: "Je suis un designer passionné spécialisé dans la création de logos, packaging, infographies, t-shirts et icônes. J'ai une expertise approfondie en design graphique et je suis en mesure de créer des visuels percutants et esthétiquement attrayants pour les marques et les entreprises. Mon objectif est de fournir des solutions créatives qui répondent aux besoins uniques de mes clients. Si vous êtes à la recherche d'un designer talentueux pour votre prochain projet, n'hésitez pas à me contacter. Je suis impatient de mettre mes compétences et mon expertise à votre service."
        },
      ],
      eng: [
        {
          id: 1,
          title: "About Me        ",
          text: "I am a passionate designer specializing in the creation of logos, packaging, infographics, t-shirts, and icons. I have a deep expertise in graphic design and I am able to create impactful and visually appealing visuals for brands and businesses. My goal is to provide creative solutions that meet the unique needs of my clients. If you are looking for a talented designer for your next project, feel free to contact me. I look forward to leveraging my skills and expertise to serve you."
        },
      ],
    },
  ];
  
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.9,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        //ease: [0.6, 0.01, -0.05, 0.9], // utiliser un tableau de nombres
        // ou
        ease: (t) => t * t, // utiliser une fonction
      },
    },
  };
    const rotateVariants ={
        initial:{
        
          opacity:0,
        },
          animate:{
          
            opacity:1,
            transition: { duration: 4  , type: "spring",     stiffness: 10,
            mass: 2,
            damping:3,
            staggerChildren: 0.1,
            delayChildren: 5,} 
          }
      
        }
  return (
    <Layout>
    <div className='aprops'>

<div  className='home-all'>
  

         <div  className='home-left'>
            <div className='text'>
            <motion.h1 variants={titleVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}  >
                        {contenu[0][props.langue][0].title.split("").map((letter) => (
                      <motion.span key={1} variants={letterVariants}>{letter}</motion.span>
                    ))}
                          
                          
                        
                        </motion.h1>
                          <motion.p   initial={{ opacity:0 }}
      animate={{ opacity:1  } }
      whileInView="visible"
      transition={{ duration:3 , delay: 0.5}}> 
      
      {contenu[0][props.langue][0].text}</motion.p>
            
               
            </div>
      
         </div>

         <div className='home-right'>

            <motion.div className='image' style={{backgroundImage:`url('/static/images/profile.jpg')`}}  
              initial="initial"
              animate="animate"
              variants={rotateVariants}>


            </motion.div>
         
         </div>


</div>

</div>
    </Layout>
  )
}





const mapStateToProps = (state) => ({
 
  langue:state.change_langue_reducer.langue,


})

const mapDispatchToProps = dispatch =>{
return{

}

}

export default connect(mapStateToProps, mapDispatchToProps)( apropos)
