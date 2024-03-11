"use client"

import { useState } from "react";
import ListingDetailPage from "@/components/create-property/ListingDetailPage";

export default function CreateProperty() {
    const [createStage, changeState] = useState(0);

    function nextStage() {
        changeState((createStage + 1) % 2);
    }

    function backStage() {
        changeState((createStage - 1) % 2);
    }

    return <div> {createStage === 0 ? (
        <ListingDetailPage
        />
      ) : null}
      
      {createStage === 1 ? "": null}

      </div>
}