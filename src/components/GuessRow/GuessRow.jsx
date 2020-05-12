import React from 'react'
import GuessPegs from '../GuessPegs/GuessPegs'
import GuessScore from '../GuessScore/GuessScore'

const GuessRow = () => (
    <div className='component'>
        guess row #
        <GuessPegs />
        <GuessScore />
    </div>
)

export default GuessRow