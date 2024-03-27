"use client";
import { useState } from "react";
import Sidebar from "@/components/edit-profile/Sidebar";
import PersonalPage from "@/components/edit-profile/PersonalPage";
import OwnerPage from "@/components/edit-profile/OwnerPage";
import FinancialPage from "@/components/edit-profile/FinancialPage";
import { NotSavedPopUp } from "@/components/edit-profile/NotSavedPopUp";
type Tab = "Listing Details" | "Additional Details" | "Contact Details";

const EditProperty = ({params}:{params:{id:string}}) => {
  const [tab, setTab] = useState<Tab>("Listing Details");

  const [isChangesExist, setIsChangesExist] = useState<boolean>(false);
  const [isSwitchingTab, setIsSwitchingTab] = useState<boolean>(false);
  const switchToListing = () => setTab("Listing Details");
  const switchToAdditional = () => {
    if (!isChangesExist) {
      setTab("Additional Details");
      setIsSwitchingTab(false);
    } else {
      setIsSwitchingTab(true);
    }
  };
  const switchToContact = () => {
    if (!isChangesExist) {
      setTab("Contact Details");
      setIsSwitchingTab(false);
    } else {
      setIsSwitchingTab(true);
    }
  };
  return (
    <div className=" flex min-h-dvh  flex-row">
      <Sidebar
        switchTo1={switchToListing}
        switchTo2={switchToAdditional}
        switchTo3={switchToContact}
        header="Edit Profile"
        text1="Personal Information"
        text2="Financial Informations"
        text3="Owner Information"
        iconSrc1={""}
        iconSrc2={""}
        iconSrc3={""}
      />
      <div className="m-5 min-w-[40%] max-w-full">
        {tab === "Listing Details" && (
          <PersonalPage setIsChangesExist={setIsChangesExist} />
        )}
        {tab === "Additional Details" && <FinancialPage setIsChangesExist={setIsChangesExist} />}
        {tab === "Contact Details" && <OwnerPage />}
      </div>
      {isSwitchingTab && isChangesExist && (
        <NotSavedPopUp
          setIsChangesExist={setIsChangesExist}
          setIsSwitchingTab={setIsSwitchingTab}
        />
      )}
    </div>
  );
};
export default EditProperty;
