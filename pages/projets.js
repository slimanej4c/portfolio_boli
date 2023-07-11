import React, {useState,useEffect} from 'react'
import Layout from '../hocs/Layout'
import BrowserFS from 'browserfs/dist/browserfs';

// Optional: You may need to import specific modules from 'browserfs' if you encounter any module-related issues.
import fs from 'browserfs/dist/node/core/node_fs';
import path from 'path';
import { motion, AnimatePresence , useAnimation} from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { connect } from 'react-redux'
function projets(props) {
  const [domaine_clicked, setdomaine_clicked] = useState(1);
  useEffect(() => {


console.log('domaine.....clicked',domaine_clicked)
    // Délai de 2 secondes avant d'afficher le composant de navigation
    }, [domaine_clicked]);

    const range = (start, end) => {
      return Array.from({ length: end - start + 1 }, (_, index) => start + index);
    };

    const array_designer_project_domaine = [
      {
        fr: [
          {
            id: 1,
            title: "Logos",
            name: "Logos",
            description: "Conception de logos pour les marques et les entreprises.",
            text: "Mes projets dans la catégorie des logos",
            nombre: 62,
          },
          {
            id: 2,
            title: "Infographie",
            name: "Infographie",
            description: "Création d'infographies visuellement attrayantes pour présenter des données.",
            text: "Mes projets dans la catégorie de l'infographie",
            nombre: 6,
          },
          {
            id: 3,
            title: "Icons",
            name: "Icônes et Illustration",
            description: "Création d'icônes personnalisées pour les applications et les interfaces utilisateur.",
            text: "Mes projets dans la catégorie des icônes et de l'illustration",
            nombre: 17,
          }
          ,
          {
            id: 4,
            title: "livres",
            name: "Couverture des livres",
            description: "Conception de couvertures de livres attrayantes et captivantes.",
            text: "Mes projets dans la catégorie des couvertures de livres",
            nombre: 34,
          },
          {
            id: 5,
            title: "T-shirt",
            name: "T-shirt",
            description: "Conception de designs pour des t-shirts.",
            text: "Mes projets dans la catégorie du design de t-shirts",
            nombre: 18,
          },
          {
            id: 6,
            title: "Packaging",
            name: "Packaging",
            description: "Conception d'emballages attrayants pour les produits.",
            text: "Mes projets dans la catégorie du packaging",
            nombre: 18,
          },
        ],
        eng: [
          {
            id: 1,
            title: "Logos",
            name: "Logos",
            description: "Logo design for brands and businesses.",
            text: "My projects in the logos category          ",
            nombre: 62,
          },
          {
            id: 2,
            title: "Infographie",
            name: "Infographics",
            description: "Creation of visually appealing infographics to present data.",
            text: "My projects in the infographics category           ",
            nombre: 6,
          },
          {
            id: 3,
            title: "Icons",
            name: "Icons and Illustration",
            description: "Creation of custom icons for applications and user interfaces.",
            text: "My projects in the icons and illustration category",
            nombre: 17,
          }
          ,
          {
            id: 4,
            title: "livres",
            name: "Books",
            description: "Design of attractive and captivating book covers.",
            text: "My projects in the book covers category        ",
            nombre: 34,
          },
          
      {
        id: 5,
        title: "T-shirt",
        name: "T-shirt",
        description: "Design of t-shirt designs.",
        text: "My projects in the t-shirt design category",
        nombre: 18,
      },
          {
            id: 6,
            title: "Packaging",
            name: "Packaging",
            description: "Design of attractive packaging for products.",
            text: "My projects in the packaging category        ",
            nombre: 18,
          },
        ],
      },
    ];
    
 
  const titleVariants = {
    hidden: {  },
    visible: {
     
   
      transition: {
        staggerChildren: 0.05,
      },
    },
  };
  const letterVariants = {
    hidden: { opacity: 0, y: 500 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        //ease: [0.6, 0.01, -0.05, 0.9], // utiliser un tableau de nombres
        // ou
     
        //delay: (childIndex) => childIndex * 0.05,
        ease: (t) => t * t, // utiliser une fonction
      },
    },
  };
  
  function ProjectItem({ item ,ordre}) {
    const [ref, inView] = useInView({
      triggerOnce:true,
      threshold: 0.1
    });

   
    return (
   <motion.div className='project' ref={ref}
      key={item.id}
      initial={{ opacity:0 }}
      animate={inView ? { opacity:1  } : {}}
      transition={{ duration:1 , delay: 0.5}}

      >
        <div className='image' style={{backgroundImage:`url('/static/images/${item.title}/img (${ordre+1}).jpg')`}} >
      

        </div>
     
      </motion.div>
   
    );
  }
  const contenu = [
    {
      fr: [
        {
          id: 1,
          title: "Découvrez mes réalisations et projets récents",
        },
      ],
      eng: [
        {
          id: 1,
          title: "Explore My Achievements and Recent Projects  ",
        },
      ],
    },
  ];
  
  return (
    <Layout>
    <div className='project-page'>
      <div className='domaines'>
        {array_designer_project_domaine[0][props.langue].map((item)=>{

          return(
            <div className={item.id===domaine_clicked ? 'domaine_clicked' : 'domaine'} onClick={()=>setdomaine_clicked(item.id)}>
              <h1>{item.name}</h1>
            </div>
          )
        })}

      </div>
            <div className='big-title'>
  
        <h1 >
                        {array_designer_project_domaine [0][props.langue][domaine_clicked-1].text}
               
                          
                          
                        
                        </h1>

        </div>
        <div className='all-project'>

        {range(1,array_designer_project_domaine [0][props.langue][domaine_clicked-1].nombre).map((item,index) => (
           <ProjectItem key={index} item={array_designer_project_domaine [0][props.langue][domaine_clicked-1]} ordre={index}/>
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


}

}

export default connect(mapStateToProps, mapDispatchToProps)(projets)



