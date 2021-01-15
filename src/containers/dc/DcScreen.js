import React from 'react'
import { HeroList } from '../../components/HeroList'

export const DcScreen = (props) => {
    return (
        <div>
            <h1>DcScreen</h1>
            <hr/>
            <HeroList publisher="DC Comics"/>
        </div>
    )
}
