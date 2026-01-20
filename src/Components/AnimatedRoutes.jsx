import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Start from '../pages/Start'
import About from '../pages/About'
import Media from '../pages/Media'
import SelectList from '../pages/SelectList'
import ColorConverter from '../pages/ColorConverter'

const pageVariants = {
  initial: { y: '100%', opacity: 0 },
  animate: { y: '0%', opacity: 1 },
  exit: { y: '100%', opacity: 0 },
}

const pageTransition = {
  duration: 0.2,
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
                <Start />
              </motion.div>
            }
          />
          <Route
            path='/start'
            element={
              <motion.div variants={pageVariants} initial='initial' animate='animate' exit='exit' transition={pageTransition}>
                <Start />
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
            path='/media'
            element={
              <motion.div variants={pageVariants} initial='initial' animate='animate' exit='exit' transition={pageTransition}>
                <Media />
              </motion.div>
            }
          />
          <Route
            path='/color-converter'
            element={
              <motion.div variants={pageVariants} initial='initial' animate='animate' exit='exit' transition={pageTransition}>
                <ColorConverter />
              </motion.div>
            }
          />
          <Route
            path='/list'
            element={
              <motion.div variants={pageVariants} initial='initial' animate='animate' exit='exit' transition={pageTransition}>
                <SelectList />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  )
}
