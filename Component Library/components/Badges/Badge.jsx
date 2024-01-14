import React from "react"
import classnames from "classnames"

export default function Badge({ children, shape, color }) {
    let shapeClass = shape && `badge badge-${shape}`
    let colorClass = color && `badge badge-${color}`
    const allClasses = classnames(shapeClass, colorClass)
    
    return (
        <div className={allClasses}>
            {children}
        </div>
    )
}