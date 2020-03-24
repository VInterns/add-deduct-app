import React from "react";
import { Team } from "../components";
import { OnCallTeam } from "../teams";

export const OnCallScreen = () => {
    return (
        <Team
            teamName={OnCallTeam.NAME}
            filePath={OnCallTeam.SAMPLE_EXCEL_URL}
            collection={OnCallTeam.COLLECTION_NAME}
            tableHeader={OnCallTeam.TABLE_HEADER}
        />
    );
} 