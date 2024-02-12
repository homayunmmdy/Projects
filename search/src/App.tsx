import { useState } from "react"
import {Namelist} from "../data"

interface DataItem {
  id:number;
  name:string;
}

const App = () => {
  const [searchTerm , setSeaerchTerm] = useState('');
  const [searchResults , setSearchResults] = useState<DataItem[]>([]);

  const handleSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSeaerchTerm(term);
    const results = Namelist.filter(item  => (
      item.name.toLowerCase().includes(term.toLowerCase())
    ));
    setSearchResults(results)
  }
  return (
    <div className="max-w-md mx-auto mt-8 p-4 border rounded-lg shadow-lg">
    <h1 className="text-2xl font-bold mb-4">JSON Search</h1>
    <input
      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
      type="text"
      placeholder="Search by name"
      value={searchTerm}
      onChange={handleSearch}
    />
    <ul className="mt-4">
      {searchResults.map(item => (
        <li key={item.id} className="py-2 border-b last:border-b-0">{item.name}</li>
      ))}
    </ul>
  </div>
  )
}

export default App
