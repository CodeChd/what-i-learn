

export default function CategoryFilter({Categories}) {
  return (
    <aside>
        <ul>
        <li className="category"><button className="btn btn-all-categories ">All</button></li>

          {Categories.map((e) => (
              <li key={e.name} className="category"><button className="btn btn-category" style={{backgroundColor: e.color}}>{e.name}</button></li>
          ))}
       
        </ul>
    </aside>
  )
}   
