import React from "react"
import {LoadScreen, Ring, LoadText} from './preLoaderComponents'


function PreLoader(){
    return <LoadScreen>
        <Ring/>
        <Ring/>
        <LoadText>Loading...</LoadText>
    </LoadScreen>
}

export default PreLoader;