import { useState, useEffect } from "react";
import { properties } from '../utility/data';
import Card from "./Card";
import "../styles/gallery.scss";


export default function Gallery() {
    let [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        let handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize(); // Check on initial render
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    let listItems = properties.slice(0, isMobile ? 3 : 6).map((property) => (
                <Card
                    key={property.id}
                    id={property.id}
                    image={property.cover}
                    title={property.title}
                />
    ));

    return (
        <div className="gallery-grid-container">
            {listItems}
        </div>
    );
}
