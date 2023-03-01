import './App.css'
import Header from '../components/Header'
import Content from '../components/Content'
import FactLists from '../components/FactLists'
import CategoryFilter from '../components/CategoryFilter'
import { useState, useEffect } from "react"
import Form from '../components/Form'
import { Toaster } from 'react-hot-toast'
import { initialFacts } from '../helper/data'


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

  const [facts, setFacts] = useState(initialFacts)





  return (
    <div className="App">
      <Toaster/>
      <Header showform={showform} setShowForm={setShowForm} />

      {showform ? <Form setShowForm={setShowForm}  setFacts={setFacts} Categories={CATEGORIES} /> : null }

      <Content>

        <CategoryFilter Categories={CATEGORIES} />
        <FactLists facts={facts} Categories={CATEGORIES} />

      </Content>


    </div>


  )
}

export default App
