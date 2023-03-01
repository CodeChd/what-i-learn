
export default function Header({showform,setShowForm}) {

  return (
    <header className="header">
    <div className="logo">
    <img src="logo.png"  lt="logo" />
    <h1>What I Learn</h1>
  </div>
    <button className="btn btn-large open" onClick={() => setShowForm((show)=> !show) }>{showform ? "Close" : "Share a Fact"}</button>

  </header>
  )
}
