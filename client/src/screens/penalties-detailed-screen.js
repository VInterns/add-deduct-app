import React from "react";
import { Team } from "../components";
import { PenaltiesDetailedTeam } from "../teams";

export const PenaltiesDetailedScreen = () => {
    return (
        <Team
            teamName={PenaltiesDetailedTeam.NAME}
            filePath={PenaltiesDetailedTeam.SAMPLE_EXCEL_URL}
            tableHeader={PenaltiesDetailedTeam.TABLE_HEADER}
        />
    );
} 