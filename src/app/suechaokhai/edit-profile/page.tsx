"use client";
import getCurrentUser from "@/services/users/getCurrentUser";
import { useState, useEffect } from "react";
import Sidebar from "@/components/edit-profile/Sidebar";
import PersonalPage from "@/components/edit-profile/PersonalPage";
import OwnerPage from "@/components/edit-profile/OwnerPage";
import FinancialPage from "@/components/edit-profile/FinancialPage";
type Tab = "personal" | "financial" | "owner";
const editProfile = () => {
  const [tab, setTab] = useState<Tab>("personal");
  const switchToPersonal = () => setTab("personal");
  const switchToFinancial = () => setTab("financial");
  const switchToOwner = () => setTab("owner");

  return (
    <div className=" flex min-h-dvh  flex-row">
      <Sidebar
        personal={switchToPersonal}
        financial={switchToFinancial}
        owner={switchToOwner}
      />
      <div className="m-5 min-w-[40%] ">
        {tab === "personal" && <PersonalPage />}
        {tab === "financial" && <FinancialPage />}
        {tab === "owner" && <OwnerPage />}
      </div>
    </div>
  );
};
export default editProfile;
