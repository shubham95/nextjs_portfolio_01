import Image from 'next/image'
import NavBar from './components/NavBar'
import MainPage from './components/MainPage'
import AboutPage from './components/AboutPage'
import SkillPage from './components/SkillPage'
import Projectpage from './components/ProjectPage'
import Contact from './components/Contact'

export default function Home() {
  return (
    <div>
      <NavBar/>
      <MainPage />
      <AboutPage />
      <SkillPage />
      <Projectpage />
      <Contact />
    </div>
  )
}
