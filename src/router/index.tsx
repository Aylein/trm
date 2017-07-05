import * as React from "react"
import Bundle from "./bundle"

 //"bundle-loader?lazy&name=test!../view/test"
import TestLoader from "../view/test"
import Test2Loader from "../view/test2"

// const Test = () => <Bundle load={TestLoader}>{(Mod: any) => <Mod/>}</Bundle>
// const Test2 = () => <Bundle load={Test2Loader}>{(Mod: any) => <Mod/>}</Bundle>

export default [
    {path: "/", component: TestLoader},
    {path: "/test2", component: Test2Loader},
]