const NumPageText = ({page,numProperty,text}:{page:number,numProperty:number,text:string}) => {
    return ( 

        <div className="flex h-[100px] pt-16 pb-24 items-center justify-center text-2xl">
            {/* num prop text here */}
            <div>
                {10*(page-1)} - {numProperty<10*page ? numProperty : 10*page } of {numProperty} properties {text}
            </div>
        </div>
     );
}
 
export default NumPageText;