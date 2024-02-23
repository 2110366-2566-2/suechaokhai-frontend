"use client";
import { useState } from "react";
import Sidebar from "@/components/edit-profile/Sidebar";
import PersonalPage from "@/components/edit-profile/PersonalPage";
import OwnerPage from "@/components/edit-profile/OwnerPage";
import FinancialPage from "@/components/edit-profile/FinancialPage";
import { NotSavedPopUp } from "@/components/edit-profile/NotSavedPopUp";
type Tab = "personal" | "financial" | "owner";

const EditProfile = () => {
  const [tab, setTab] = useState<Tab>("personal");

  const [isChangesExist, setIsChangesExist] = useState<boolean>(false);
  const [isSwitchingTab, setIsSwitchingTab] = useState<boolean>(false);
  const switchToPersonal = () => setTab("personal");
  const switchToFinancial = () => {
    if (!isChangesExist) {
      setTab("financial");
    } else {
      setIsSwitchingTab(true);
    }
  };
  const switchToOwner = () => {
    if (!isChangesExist) {
      setTab("owner");
    } else {
      setIsSwitchingTab(true);
    }
  };
  return (
    <div className=" flex min-h-dvh  flex-row">
      <Sidebar
        personal={switchToPersonal}
        financial={switchToFinancial}
        owner={switchToOwner}
      />
      <div className="m-5 min-w-[40%] max-w-full">
        {tab === "personal" && (
          <PersonalPage setIsChangesExist={setIsChangesExist} />
        )}
        {tab === "financial" && <FinancialPage />}
        {tab === "owner" && <OwnerPage />}
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
export default EditProfile;
