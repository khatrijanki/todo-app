import { useState } from "react"

const DropArea = ({onDrop}) => {
    const [showDrop, setShowDrop] = useState(false)

    return (
        <div 
            onDragEnter={() => setShowDrop(true)} 
            onDragLeave={() => setShowDrop(false)} 
            onDrop={() => {
                onDrop();
                setShowDrop(false);
            }}
            onDragOver={(e) => e.preventDefault()}
            className={showDrop ? "drop_area": "hide_area"}>
                Drop Area
        </div>
    )
}

export default DropArea