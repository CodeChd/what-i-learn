import supabase from "../helper/supabase"



export default function FactLists({ facts, Categories }) {

    if (facts.length === 0)
        return (
            <p>There are no facts here. Add your own</p>
        )

    async function handleVotes(columnName) {


        const { data: updatedFact, error } = await supabase
            .from('facts')
            .update({ [columnName]: facts[columnName] + 1 })
            .eq('id', facts.id)
            .select();

            console.log(updatedFact)


    }

    return (
        <section>
            <ul>
                {facts.map((fe) => (
                    <li key={fe.id} className="fact"  >
                        <p >
                            {fe.text}
                            <a href={fe.source} target="_blank" className="source">(Source)</a>
                        </p>
                        <span className="tag"
                            style={
                                {
                                    backgroundColor: Categories.find((e) => e.name === fe.category).color
                                }
                            }>
                            {fe.category}
                        </span>
                        <div className="vote-buttons">
                            <button onClick={() => handleVotes('votesinterest')}>👍 {fe.votesinterest}</button>
                            <button>🤯 {fe.votesMIndBlown}</button>
                            <button>⛔️ {fe.votesDislike}</button>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}
