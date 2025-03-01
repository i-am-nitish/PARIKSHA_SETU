import { useState } from 'react'

import './App.css'
// Fix the import - use HeroDemo from hero.jsx
import { HeroDemo } from './components/Hero/hero'
// import { WordRotateDemo } from './components/magicui/wordrotate'

function App() {
  const [] = useState(0)

  return (
    <>
    <div>
      <HeroDemo />
    </div>
    </>
  )
}

export default App