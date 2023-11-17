import { useEffect, useState } from 'react';
import './App.css';


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.sampleapis.com/codingresources/codingResources')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <table>
          <thead>
            <tr>
                <th>Description</th>
                <th>Types</th>
                <th>Topics</th>
                <th>URL</th>
              
            </tr>
          </thead>
          <tbody>
            {data.map(resource => (
              <tr key={resource.id}>
                <td>{resource.description}</td>
                <td>{resource.types.join(', ')}</td>
                <td>{resource.topics.join(', ')}</td>
                <td><a href={resource.url}>อ่านเพิ่มเติม</a></td> 
              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}


export default App;
