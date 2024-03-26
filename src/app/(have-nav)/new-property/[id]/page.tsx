"use client"

import ImagesSlider from "@/components/new-property/ImagesSlider";
import PropertyDetail from "@/components/new-property/PropertyDetail";
import PropertyData from "@/models/PropertyData";
import getPropertyDetail from "@/services/property/getPropertyDetail";
import { useEffect, useState } from "react";

export default function PropertyPage({ params }: { params: { id: string } }) {
    const [property, setProperty] = useState<PropertyData>();
    useEffect(() => {
        async function getProperty() {
            try {
                const property = await getPropertyDetail(params.id);
                setProperty(property)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        getProperty();
    }, [])

    return (
        <div>
            {property ?
                <div className="flex flex-col items-center justify-center">
                    <ImagesSlider
                        imageList={property.property_images}
                        width={1920}
                        height={500}
                        loop={true}
                        autoPlay={true}
                        autoPlayInterval={3000}
                        showArrowControls={true}
                        showDotControls={true}
                        bgColor="none" />
                    <PropertyDetail property={property} />

                </div> : null}
        </div>

    )
}