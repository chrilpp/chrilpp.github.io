import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Home from '../pages/Home'
import About from '../pages/About'
import Media from '../pages/Media'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

const pageTransition = {
  duration: 0.3,
  ease: 'easeInOut',
}

export default function AnimatedRoutes() {
  const location = useLocation()

  return (
    <div className='page-wrapper'>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route
            path='/'
            element={
              <motion.div variants={pageVariants} initial='initial' animate='animate' exit='exit' transition={pageTransition}>
                <Home />
              </motion.div>
            }
          />
          <Route
            path='/projects'
            element={
              <motion.div variants={pageVariants} initial='initial' animate='animate' exit='exit' transition={pageTransition}>
                <Projects />
              </motion.div>
            }
          />
          <Route
            path='/media'
            element={
              <motion.div variants={pageVariants} initial='initial' animate='animate' exit='exit' transition={pageTransition}>
                <Media />
              </motion.div>
            }
          />
          <Route
            path='/about'
            element={
              <motion.div variants={pageVariants} initial='initial' animate='animate' exit='exit' transition={pageTransition}>
                <About />
              </motion.div>
            }
          />
          <Route
            path='/contact'
            element={
              <motion.div variants={pageVariants} initial='initial' animate='animate' exit='exit' transition={pageTransition}>
                <Contact />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  )
}
