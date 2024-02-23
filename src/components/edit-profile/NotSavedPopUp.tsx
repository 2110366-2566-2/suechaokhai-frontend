export const NotSavedPopUp = ({
  setIsChangesExist,
  setIsSwitchingTab,
}: {
  setIsChangesExist: Function;
  setIsSwitchingTab: Function;
}) => {
  return (
    <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-20">
      <div className=" space-y-8 rounded-xl bg-white px-4 py-6">
        <div className="flex flex-col justify-start space-y-4">
          <div className="font-bold">Changes have not been saved</div>
          <div>Do you want to leave this tab without saving?</div>
        </div>
        <div className="flex justify-end space-x-6">
          <button
            className="rounded-md bg-ci-dark-gray px-6 py-2 text-white"
            onClick={() => {
              setIsSwitchingTab(false);
            }}
          >
            Cancel
          </button>
          <button
            className="rounded-md bg-ci-red px-6 py-2 text-white"
            onClick={() => {
              setIsChangesExist(false);
              setIsSwitchingTab(true);
            }}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};
