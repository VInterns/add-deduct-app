import React from "react";
import { Team } from "../components";
import { PenaltiesDetailedTeam } from "../teams";

export const PenaltiesDetailedScreen = () => {
    return (
        <Team
            teamName={PenaltiesDetailedTeam.NAME}
            filePath={PenaltiesDetailedTeam.SAMPLE_EXCEL_URL}
            collection={PenaltiesDetailedTeam.COLLECTION_NAME}
            tableHeader={PenaltiesDetailedTeam.TABLE_HEADER}
        />
    );
} 