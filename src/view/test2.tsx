import * as React from "react"
import { observer } from "mobx-react"
import store, { ListItem, Todo, todo } from "../store"

@observer
class Test2 extends React.Component<{}, {}> {
    todo: Todo

    constructor(){
        super()
        this.todo = todo
        this.add = this.add.bind(this)
        this.delete = this.delete.bind(this)
    }

    render(){
        return <div>
            <div>Hello Testing 2 {this.todo.length} <a onClick={this.add}>Add 1</a></div>
            {this.todo.data.map((item: ListItem, i: number): any => <div key={i} onClick={() => { this.delete(i) }}>
                <span>{item.id}</span>-
                <span>{item.name}</span>-
                <span>{item.status}</span>
            </div>)}
        </div>
    }

    add(){
        let { length } = this.todo
        this.todo.add(Object.assign({}, new ListItem(length)))
    }

    delete(i: number){
        this.todo.delete(i)
    }
}

export default Test2