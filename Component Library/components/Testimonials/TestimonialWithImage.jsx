import React from "react"
import Testimonial from "./Testimonial"

export default function TestimonialWithImage() {
    return (
        <Testimonial>
            <div className="image-testimonial-container">
                <img src="./components/Testimonials/Image.png" className="image-testimonial-img" />
                <div className="image-testimonial-text">
                    <img src="./components/Testimonials/Icon.png" className="image-testimonial-icon" />
                    <p className="image-testimonial-quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.</p>
                    <p className="image-testimonial-name">May Andersons</p>
                    <p className="image-testimonial-role">Workcation, CTO</p>
                </div>
            </div>
        </Testimonial>
    )
}