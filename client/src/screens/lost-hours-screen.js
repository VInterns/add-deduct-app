import React from "react";
import { Team } from "../components";
import { LostHoursTeam } from "../teams";

export const LostHoursScreen = () => {
    return (
        <Team
            teamName={LostHoursTeam.NAME}
            filePath={LostHoursTeam.SAMPLE_EXCEL_URL}
            collection={LostHoursTeam.COLLECTION_NAME}
            tableHeader={LostHoursTeam.TABLE_HEADER}
        />
    )
}