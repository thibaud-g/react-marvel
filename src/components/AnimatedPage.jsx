import {motion} from 'framer-motion'


const AnimatedPage = ({children}) => {
    const animations = {
        initial : {opacity : 0, y : -30},
        animate : {opacity : 1 , y : 0},
        exit : {opacity : 0 , y : 30}
    }

    return ( 
        <motion.div variants={animations} initial="initial" animate="animate" exit="exit">
            {children}
        </motion.div>
     );
    }
 
export default AnimatedPage;