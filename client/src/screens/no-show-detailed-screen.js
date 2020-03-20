import React from "react";
import { Team } from "../components";
import { NoShowDetailedTeam } from "../teams";

export const NoShowDetailedScreen = () => {
    return (
        <Team
            teamName={NoShowDetailedTeam.NAME}
            filePath={NoShowDetailedTeam.SAMPLE_EXCEL_URL}
            tableHeader={NoShowDetailedTeam.TABLE_HEADER}
        />
    );
} 