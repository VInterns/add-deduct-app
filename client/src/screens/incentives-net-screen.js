import React from "react";
import { Team } from "../components";
import { IncentivesNetTeam } from "../teams";

export const IncentivesNetScreen = () => {
    return (
        <Team
            teamName={IncentivesNetTeam.NAME}
            filePath={IncentivesNetTeam.SAMPLE_EXCEL_URL}
            tableHeader={IncentivesNetTeam.TABLE_HEADER}
        />
    );
} 