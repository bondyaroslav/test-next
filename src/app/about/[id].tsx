import React from "react"

interface TargetPageProps {
    id: number
}

const TargetPage: React.FC<TargetPageProps> = ({id}) => {
    return (
        <div>
            Target Page {id}
        </div>
    )
}

export default TargetPage