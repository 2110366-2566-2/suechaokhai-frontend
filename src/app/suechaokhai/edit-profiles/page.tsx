"use client";
import getCurrentUser from "@/libs/getCurrentUser";
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
    <div className="flex h-full flex-row ">
      <Sidebar
        personal={switchToPersonal}
        financial={switchToFinancial}
        owner={switchToOwner}
      />
      {tab === "personal" && <PersonalPage />}
      {tab === "financial" && <FinancialPage />}
      {tab === "owner" && <OwnerPage />}
    </div>
  );
};
export default editProfile;
