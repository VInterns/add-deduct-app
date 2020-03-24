import React from "react";
import { Team } from "../components";
import { SickLeaveDetailedTeam } from "../teams";

export const SickLeaveDetailedScreen = () => {
    return (
        <Team
            teamName={SickLeaveDetailedTeam.NAME}
            filePath={SickLeaveDetailedTeam.SAMPLE_EXCEL_URL}
            collection={SickLeaveDetailedTeam.COLLECTION_NAME}
            tableHeader={SickLeaveDetailedTeam.TABLE_HEADER}
        />
    );
} 