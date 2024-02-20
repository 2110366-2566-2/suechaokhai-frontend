const myListingPage = () => {
    return ( 
        <div className="flex h-full flex-row mx-64 mt-8">
            {
                have prop ? (
                    <div className="text-4xl font-bold">My Listing</div>

                    <div className="flex">
                        {/* sort stuff here */}
                    </div>

                    <div className="flex">
                        {/* prop cards */}
                    </div>
                    <div className="flex">
                        {/* page slider */}
                    </div>
                    <div className="flex">
                        {/* num prop text here */}
                    </div>
                    <div className="flex absolute">
                        {/* create prop button */}
                    </div>

                ):
                (
                    <div className="text-4xl font-bold text-centerr">Empty property listing</div>

                    <div>
                        {/* icon here */}
                    </div>

                    <div className="text-2xl text-center">Your listing is empty.</div>
                    <div className="text-2xl text-center">Let's create a property on your listing.</div>

                    <div>
                         {/* create prop button */}
                    </div>

                )
            }
            
        </div> 
    );
}
 
export default myListingPage;