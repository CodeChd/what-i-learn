
import { useState } from "react"
import supabase from "../helper/supabase"

export default function Fact({ facts, setFacts, Categories }) {
    const [isUpdating, setUpdating] = useState(false)
    const isDisputed = facts.votesMIndBlown + facts.votesinterest + 6 < facts.votesDislike; 

    // Update
    async function handleVotes(columnName) {
        setUpdating(true)
        const { data: updatedFact, error } = await supabase
            .from('facts')
            .update({ [columnName]: facts[columnName] + 1 })
            .eq("id", facts.id)
            .select()

        setUpdating(false)

        if (!error) setFacts((fact) => fact.map(e => e.id === facts.id ? updatedFact[0] : e))



    }

    return (
        <li key={facts.id} className="fact"  >


            <p >

                    {isDisputed ? <span className="disputed">[⛔️ DIISPUTED]</span>: ""}

                {facts.text}
                <a href={facts.source} target="_blank" className="source">(Source)</a>
            </p>
            <span className="tag"
                style={
                    {
                        backgroundColor: Categories.find((e) => e.name === facts.category).color
                    }
                }>
                {facts.category}
            </span>
            <div className="vote-buttons">
                <button onClick={() => handleVotes("votesinterest")} disabled={isUpdating}>👍 {facts.votesinterest}</button>
                <button onClick={() => handleVotes("votesMIndBlown")} disabled={isUpdating}>🤯 {facts.votesMIndBlown}</button>
                <button onClick={() => handleVotes("votesDislike")} disabled={isUpdating}>⛔️ {facts.votesDislike}</button>
            </div>
        </li>
    )
}
