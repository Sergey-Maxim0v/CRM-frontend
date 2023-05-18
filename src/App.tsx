import {useState} from "react";
import Header from "./components/header";
import Content from "./components/content";
import {Context, IContext} from "./context/context";

function App() {
    const [filter, setFilter] = useState<string | undefined>(undefined)

    const contextValue: IContext = {
        filter, setFilter
    }

    return (
        <Context.Provider value={contextValue}>
            <Header/>
            <Content/>
        </Context.Provider>
    )
}

export default App
