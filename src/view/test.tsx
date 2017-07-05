import * as React from "react"
import { observer } from "mobx-react"
import store, { ListItem, Todo, todo } from "../store"

const makeList = (i: number = 0): Array<ListItem> => {
    let arr: Array<ListItem> = [];
    for(let z = i + 10; i < z; i++) arr.push({ id: i, name: i.toString(), status: 0 })
    return arr;
}

@observer
class Test extends React.Component<{}, {}> {
    todo: Todo

    constructor(){
        super()
        this.todo = todo
        this.add = this.add.bind(this)
        this.clear = this.clear.bind(this)
        this.click = this.click.bind(this)
    }

    render(){
        return <div>
            <div>Hello Testing <a onClick={this.add}>Add 10</a> - <a onClick={this.clear}>Clear</a></div>
            {this.todo.data.map((item: ListItem, i: number): any => <div key={i} onClick={() => { this.click(i) }}>
                <span>{item.id}</span>-
                <span>{item.name}</span>-
                <span>{item.status}</span>
            </div>)}
        </div>
    }

    add(){
        makeList(this.todo.length).forEach(item => { this.todo.add(item) })
    }

    clear(){
        this.todo.clear()
    }

    click(i: number){
        this.todo.setStatus(i)
    }
}

export default Test