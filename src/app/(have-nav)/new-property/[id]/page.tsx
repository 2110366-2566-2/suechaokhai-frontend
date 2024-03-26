import ImageSlider from "@/components/property-description/ImageSlider";

export default function PropertyPage({params}:{params:{pid:string}}){

    return(
        <div className="flex flex-col">
            test {params.pid}
        </div>
    )
}