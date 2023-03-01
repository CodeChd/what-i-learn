

export default function FactLists({facts,Categories}) {
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
                            <button>👍 {fe.votesinterest}</button>
                            <button>🤯 {fe.votesMIndBlown}</button>
                            <button>⛔️ {fe.votesDislike}</button>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}
