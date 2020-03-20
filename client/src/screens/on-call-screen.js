import React from "react";
import { Team } from "../components";
import { OnCallTeam } from "../teams";

export const OnCallScreen = () => {
    return (
        <Team
            teamName={OnCallTeam.NAME}
            filePath={OnCallTeam.SAMPLE_EXCEL_URL}
            tableHeader={OnCallTeam.TABLE_HEADER}
        />
    );
} 