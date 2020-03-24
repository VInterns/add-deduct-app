import React from "react";
import { Team } from "../components";
import { IncentivesNetTeam } from "../teams";

export const IncentivesNetScreen = () => {
    return (
        <Team
            teamName={IncentivesNetTeam.NAME}
            filePath={IncentivesNetTeam.SAMPLE_EXCEL_URL}
            collection={IncentivesNetTeam.COLLECTION_NAME}
            tableHeader={IncentivesNetTeam.TABLE_HEADER}
        />
    );
} 