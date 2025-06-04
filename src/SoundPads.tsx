import { useState } from 'react'
import './sound-pads.css'
import pads from './pads'

const SoundPad = ({  color, on, onClick }: { color: string; on: boolean; onClick: () => void }) => {
    return (
        <button
            className={`pad ${on ? 'active' : ''}`}
            style={{ backgroundColor: color }}
            onClick={onClick}
        ></button>
    )
}

const SoundPads = () => {
    const [padsState, setPadsState] = useState(pads)

    const handlePadClick = (id: number) => {
        setPadsState(padsState.map(pad =>
            pad.id === id ? { ...pad, on: !pad.on } : pad
        ))
    }

    return (
        <div className="pad-container">
            {padsState.map((pad) => (
                <SoundPad
                    key={pad.id}
                    {...pad}
                    onClick={() => handlePadClick(pad.id)}
                />
            ))}
        </div>
    )
}

export default SoundPads;