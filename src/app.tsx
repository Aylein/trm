import * as React from "react"
import { Link } from "react-router-dom"

class App extends React.Component<{}, {}>{
    render(){
        return <div>
            <Link to="/">Index</Link>
            <br/>
            <Link to="/test2">Test2</Link>
            <br/>
            {this.props.children}
        </div>
    }
}

export default App