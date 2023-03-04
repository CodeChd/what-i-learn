import Fact from "./Fact"

export default function FactLists({ facts, Categories,  setFacts}) {


    if (facts.length === 0)
        return (
            <p className='message spinner'>
             There are no facts in the databases for this category! Add your own :)
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
