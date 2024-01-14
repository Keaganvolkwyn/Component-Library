import React from "react"
import Card from "./Card"

export default function Cards() {
    return (
        <>
            <h2 className="component-title">Cards</h2>
            <div className="cards-container">
                <Card>
                    <h2 className="component-description">Ordinary</h2>
                    <div className="card">
                        <img src="./components/Cards/Icon.png" className="icon" />
                        <h2 className="card-title">Easy Deployment</h2>
                        <p className="card-text">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
                    </div>
                </Card>
                <Card>
                    <h2 className="component-description">Hoverable</h2>
                    <div className="card-hover">
                        <img src="./components/Cards/Icon.png" className="icon" />
                        <h2 className="card-title">Easy Deployment</h2>
                        <p className="card-text">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
                    </div>
                </Card>
            </div>
        </>
    )
}