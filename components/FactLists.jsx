import Fact from "./Fact"

export default function FactLists({ facts, Categories,  setFacts}) {


    if (facts.length === 0)
        return (
            <p className='message'>
                No facts for this category yet! Create the first one ✌️
            </p>
        );

    return (
        <section>
            <ul>
                {facts.map((fact) => (
                    <Fact key={fact.id} facts={fact} setFacts={setFacts} Categories={Categories} />
                ))}
            </ul>
        </section>
    )
}
