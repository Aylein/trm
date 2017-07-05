import { observable, computed, action, extendObservable } from "mobx"

export class Store {
    state: any = {}
    set(key: string, value: any) { this.state[key] = value }
    get(key: string) { return this.state[key] }
    exist(key: string) { return !!this.state[key] }
}

export class ListItem {
    id: number
    name: string
    status: number

    constructor(index: number){
        this.id = index
        this.name = index.toString()
        this.status = 0
    }
}

export class Todo {
    @observable data: Array<ListItem>
    @computed get length(){ return this.data.length }

    constructor(){
        this.make([])
    }

    make = action((data: Array<ListItem>) => { this.data = data })
    add = action((item: ListItem) => { this.data.push(item) })
    delete = action((i: number) => { this.data.splice(i, 1) })
    clear = () => { this.make([]) }

    setStatus = action((i: number) => { this.data[i].status++ })
}

export const todo = new Todo()

export default new Store()