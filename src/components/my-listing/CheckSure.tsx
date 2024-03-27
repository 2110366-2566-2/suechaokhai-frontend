import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

const CheckSure = () => {
  const { toast } = useToast();

  return (
    <div className="fixed left-[0] top-[0] z-40 flex h-[100vh] w-[100%] flex-col items-center justify-center bg-black bg-opacity-20">
      <div className="relative flex h-2/5 w-1/3 flex-col items-center justify-around rounded-2xl bg-white p-[32px]">
        <div className="text-4xl font-bold ">Delete a Property</div>
        <div className="small-text mb-1 mt-10">
          Are you sure you want to delete this property ?
        </div>
        <div className="medium-text mb-10 mt-1 font-semibold ">
          {propData.property_name}
        </div>

        <div className="flex-roe  flex w-full items-center justify-center">
          <button
            className="medium-text mx-2 my-2 h-[60px] w-1/3 rounded-md bg-[#B3B3B3] px-4 font-bold text-[#DFDFDF] shadow "
            onClick={() => {
              setDel(!isDeleting);
            }}
          >
            Cancel
          </button>
          <button
            className="medium-text mx-2 my-2 h-[60px] w-1/3 rounded-md bg-ci-red px-4 font-bold text-[#DFDFDF] shadow "
            onClick={async () => {
              setDel(!isDeleting);
              const res = await deleteProperty(propData.property_id);
              if (res) {
                window.location.href = "/listing";
                toast({
                  title: "Deleted",
                  description: "Your property has been deleted successfully.",
                });
              }
              console.log(res.message);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckSure;
