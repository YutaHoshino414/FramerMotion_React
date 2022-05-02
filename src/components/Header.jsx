import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <header>
        <div className="logo">
        </div>
        <motion.div className="title" 
          initial={{y:-250}}
          animate={{y:0}}
          transition={{delay: 0.5, type: 'spring'}}
        >
          <h1>Pizza Joint</h1>
        </motion.div>
      </header>
    )
  }
  
  export default Header;