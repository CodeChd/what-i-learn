import './App.css'
import Header from '../components/Header'
import Content from '../components/Content'
import FactLists from '../components/FactLists'
import CategoryFilter from '../components/CategoryFilter'
import Form from '../components/Form'
import { Toaster } from 'react-hot-toast'
import { useState, useEffect } from "react"
import supabase from '../helper/supabase'
import { PropagateLoader } from 'react-spinners'




const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];



function App() {
  const [showform, setShowForm] = useState(false)
  const [facts, setFacts] = useState([])
  const [loading, setIsLoading] = useState(false)
  const [currentCategory, setCurrentCategory] = useState("all")
  
  
  useEffect(() => {
// Fetch
    async function load() {

      setIsLoading(true)

      let q = supabase.from('facts').select('*')

      if (currentCategory !== "all") {
    q.eq("category", currentCategory)
      }

      const { data, error } = await q
        .order("text", { ascending: true })

         if (!error) setFacts(data);
        setIsLoading(false)
    }

    load()


  }, [currentCategory])

  return (
    <div className="App">
      <Toaster />
      <Header showform={showform} setShowForm={setShowForm} />

      {showform ? <Form setShowForm={setShowForm} setFacts={setFacts} Categories={CATEGORIES} /> : null}

      <Content>
        <CategoryFilter setCurrentCategory={setCurrentCategory} Categories={CATEGORIES} />

        {loading ?

          <PropagateLoader
            className='spinner'
            color='#f5f5f4'
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"

          />

          :

          <FactLists facts={facts} setFacts={setFacts} Categories={CATEGORIES} />
        }

      </Content>
    </div>
  )
}

export default App
