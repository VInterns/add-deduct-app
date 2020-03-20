import React from "react";
import { Team } from "../components";
import { IncentivesGrossTeam } from "../teams";

export const IncentivesGrossScreen = () => {
    return (
        <Team
            teamName={IncentivesGrossTeam.NAME}
            filePath={IncentivesGrossTeam.SAMPLE_EXCEL_URL}
            tableHeader={IncentivesGrossTeam.TABLE_HEADER}
        />
    );
} 