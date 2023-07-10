import React,  { useState, useEffect } from "react";
import Layout from '../hocs/Layout'
import { motion, AnimatePresence , useAnimation} from "framer-motion"

import { connect } from 'react-redux'
import { useInView } from 'react-intersection-observer';
function competence(props) {
  const contenu = [
    {
      fr: [
        {
          id: 1,
          title: "Les compétences que je maîtrise",
        },
      ],
      eng: [
        {
          id: 1,
          title: "Skills I possess               ",
        },
      ],
    },
  ];
  const competences = [
    {
      fr: [
        {
          id: 1,
          percentage: 10,
          name: "Illustrator",
          description: "Maîtrise d'Illustrator pour la création de graphiques vectoriels, d'illustrations et de designs artistiques.",
        },
        {
          id: 2,
          percentage: 10,
          name: "Photoshop",
          description: "Expérience avancée dans l'utilisation de Photoshop pour la retouche d'images, la création graphique et le design d'interfaces.",
        },
        {
          id: 3,
          percentage: 20,
          name: "Figma",
          description: "Maîtrise de Figma pour la conception d'interfaces utilisateur, la collaboration et la création de prototypes interactifs.",
        },
      ],
      eng: [
        {
          id: 1,
          percentage: 10,
          name: "Illustrator",
          description: "Proficiency in Illustrator for creating vector graphics, illustrations, and artistic designs.",
        },
        {
          id: 2,
          percentage: 10,
          name: "Photoshop",
          description: "Advanced experience in using Photoshop for image editing, graphic creation, and interface design.",
        },
        {
          id: 3,
          percentage: 20,
          name: "Figma",
          description: "Proficiency in Figma for user interface design, collaboration, and creating interactive prototypes.",
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
  const percentage = 30; 
  const [displayedItems, setDisplayedItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const progess_color="#eaa34c"
  useEffect(() => {
    const delay = 0; // Délai de 5 secondes

    const intervalId = setInterval(() => {

      if (currentIndex=== competences[0][props.langue].length) {
        clearInterval(intervalId);
      }
      else{
        setDisplayedItems((prevItems) => [...prevItems, competences[0][props.langue][currentIndex]]);
        setCurrentIndex((prevIndex) => prevIndex + 1);

      }
    }, delay);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  function CompetenceItem({ item }) {
    const [ref, inView] = useInView({
      triggerOnce:true,
      threshold: 0.1
    });

   
    return (
   <motion.div className='competence' ref={ref}
      key={item.id}
      initial={{ opacity:0 }}
      animate={inView ? { opacity:1  } : {}}
      transition={{ duration:1 , delay: 0.5}}
      >
       
        <motion.div
          className='title'
          key={`competence-item-${item.id}`} 
          ref={ref}
          style={{
            background: `conic-gradient(transparent 0%, transparent ${item.percentage}%,  ${progess_color} ${item.percentage}%, ${progess_color} 100%)`
          }}
          initial={{ background: 'conic-gradient(transparent 0%, transparent 100%, #2be22b 100%, #2be22b 0%)' }}
          animate={inView ? { background: `conic-gradient(transparent 0%, transparent ${item.percentage}%, ${progess_color} ${item.percentage}%,  ${progess_color} 100%)` } : {}}
          transition={{ duration: 1 , delay: 0.5 }}
        >
          <div className='sous-title'>
            <h1>{item.name} </h1>
          </div>
        </motion.div>
      
        <motion.div className='description'   key={item.id}
      initial={{ opacity:0 }}
      animate={inView ? { opacity:1  } : {}}
      transition={{ duration:1 , delay: 0.5}}>
          <p>{item.description}</p>
        </motion.div>
      </motion.div>
   
    );
  }
  return (
    <Layout>
    <div className='competence-page'>
          <div className='big-title'>

          <motion.h1 variants={titleVariants} initial="hidden" whileInView="visible"  viewport={{ once: true }} >
                        {contenu[0][props.langue][0].title.split("").map((letter) => (
                      <motion.span key={1} variants={letterVariants}>{letter}</motion.span>
                    ))}
                          
                          
                        
                        </motion.h1>
          </div>
          <div className='all-competence'>
          {displayedItems.map((item) => (
            <CompetenceItem key={item.id} item={item} />
          ))}
                 
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
  Set_langue_redux:(lang)=>dispatch(Set_langue_redux(lang)),

}

}

export default connect(mapStateToProps, mapDispatchToProps)( competence)






