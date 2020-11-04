import React from 'react'

export default function HeroError({heroName}) {
    if(heroName==="Joker"){
        throw new Error('Not an Hero');
    }
    return (
        <div>
            {heroName}
        </div>
    )
}
