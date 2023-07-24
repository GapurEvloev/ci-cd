import {useState} from "react";

function App() {
    const [value, setValue] = useState(0)

    const increment = () => setValue(prev => prev + 1);

    return (
        <div className="App">
            <h1 style={{fontSize: 72, color: 'darkgreen'}}>value = {value}</h1>
            <button
                style={{background: 'black', color: "white", padding: 15}}
                onClick={increment}
            >
                incremernt
            </button>
        </div>
    );
}

export default App;
