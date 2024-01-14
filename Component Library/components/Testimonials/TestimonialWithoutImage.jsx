import React from "react"
import Testimonial from "./Testimonial"

export default function TestimonialWithoutImage() {
    return (
        <Testimonial>
            <div className="text-testimonial-container">
                <img src="./components/Testimonials/Logo.png" className="text-testimonial-logo" />
                <p className="text-testimonial-quote">“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”</p>
                <div className="text-testimonial-bottom-content">
                    <p className="text-testimonial-name">May Andersons</p>
                    <p className="divider">/</p>
                    <p className="text-testimonial-role">Workcation, CTO</p>
                </div>
            </div>
        </Testimonial>
    )
}