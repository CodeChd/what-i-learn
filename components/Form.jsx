import { useState } from "react"
import { toast } from "react-hot-toast";

function isValidHttpUrl(string) {
    let url;
    try {
      url = new URL(string);
    } catch (_) {
      return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
  }


export default function Form({ setFacts,setShowForm,Categories }) {
    const [text, setText] = useState("")
    const [source, setSource] = useState("")
    const [category, setCategory] = useState("")
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(text,source,category.toUpperCase()  )

        if (text &&isValidHttpUrl(source) && category && text.length <= 200 ){
            toast.success("Sucess")

            const newFact = {
                 id: Math.round(Math.random()*300),
                 text,
                 source,
                 category,
                 votesinterest: 0,
                 votesMIndBlown: 0 ,
                 votesDislike: 0,
                 createdIn: new Date().getFullYear()
            }

            setFacts((facts) => [newFact, ...facts])

        }else if(!text && !source && !category){
            toast.error("No data")
        }  else{
                toast.error("Invalid data")
        }

            setText('')
            setSource('')
            setCategory('')

            setShowForm((show) => !show)

}

    return (
        <form className="fact-form " onSubmit={handleSubmit}>

            <input type="text" placeholder="Share a fact with the world..." value={text} onChange={(e) => setText(e.target.value)}  disabled={text.length === 199 ? true: false}/>

            <span>{200 - text.length}</span>

            <input type="text" placeholder="http://example.com" value={source} onChange={(e) => setSource(e.target.value)} />

            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="" >Choose Category:</option>
                {
                    Categories.map((e) => (

                        <option key={e.name} value={e.name} style={{ textTransform: "uppercase" }}>{e.name.toUpperCase()}</option>
                        ))
                    }

            </select>

            <button className="btn btn-large">Post</button>
    
        </form>
    )
}
