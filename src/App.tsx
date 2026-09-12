import { Suspense } from "react"
import BannerSection from "./component/BannerSection"
import Footer from "./component/Footer"
import Navbar from "./component/Navbar"
import Technology from "./component/Technology/Technology"
import type { Itechnology } from "./TechnologyType"

const dataFetch = async():Promise<Itechnology[]>=>{
  const response = await fetch('/data.json')
  const data =response.json()
  return data
}


function App() {
 const dataPromise = dataFetch()
 console.log(dataPromise)
  return (
    <>
      <Navbar />
      <BannerSection />
      <Suspense fallback="Loading Please wait">
        <Technology dataPromise={dataPromise} />

      </Suspense>
      <Footer />
    </>
  )
}

export default App
