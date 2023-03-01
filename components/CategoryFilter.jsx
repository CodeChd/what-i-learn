

export default function CategoryFilter({setCurrentCategory,Categories}) {
  return (
    <aside>
        <ul>
        <li className="category"><button className="btn btn-all-categories " onClick={() => setCurrentCategory("all")}>All</button></li>

          {Categories.map((e) => (
              <li key={e.name} className="category">
                <button className="btn btn-category" value={e.name} style={{backgroundColor: e.color}} onClick={() => setCurrentCategory(e.name)}>{e.name}</button></li>
          ))}
       
        </ul>
    </aside>
  )
}   
