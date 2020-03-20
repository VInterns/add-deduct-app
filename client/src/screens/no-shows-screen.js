import React from "react";
import { Team } from "../components";
import { NoShowsTeam } from "../teams";

export const NoShowsScreen = () => {
    return (
        <Team
            teamName={NoShowsTeam.NAME}
            filePath={NoShowsTeam.SAMPLE_EXCEL_URL}
            tableHeader={NoShowsTeam.TABLE_HEADER}
        />
    );
} 