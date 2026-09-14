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

  return (
    <>
      <Navbar />
      <BannerSection />
      <Suspense  fallback={<> <h2 className="text-center">Loading Please wait</h2></>}>
        <Technology dataPromise={dataPromise} />
      </Suspense>
      <Footer />
    </>
  )
}

export default App
