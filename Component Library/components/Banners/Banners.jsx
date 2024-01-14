import React from "react"
import Banner from "./Banner"

export default function Banners() {
    return (
        <>
            <h2 className="component-title">Banners</h2>
            <h2 className="component-description">Single Line</h2>
            <div className="single-line-banners">
                <Banner variant="success" line="single">Congratulations!</Banner>
                <Banner variant="warning" line="single">Attention</Banner>
                <Banner variant="error" line="single">There is a problem with your application</Banner>
                <Banner variant="neutral" line="single">Update available</Banner>
            </div>
            <h2 className="component-description">Multi Line</h2>
            <div className="multi-line-banners">
                <Banner variant="success" line="multi">
                    <p>Congratulations!</p>
                    <p className="multi-line-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
                </Banner>
                <Banner variant="warning" line="multi">
                    <p>Attention</p>
                    <p className="multi-line-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
                </Banner>
                <Banner variant="error" line="multi">
                    <p>There is a problem with your application</p>
                    <p className="multi-line-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
                </Banner>
                <Banner variant="neutral" line="multi">
                    <p>Update available</p>
                    <p className="multi-line-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
                </Banner>
            </div>
        </>
    )
}