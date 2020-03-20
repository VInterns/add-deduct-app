import React from "react";
import { Team } from "../components";
import { GYMTeam } from "../teams";

export const GYMScreen = () => {
    return (
        <Team
            teamName={GYMTeam.NAME}
            filePath={GYMTeam.SAMPLE_EXCEL_URL}
            tableHeader={GYMTeam.TABLE_HEADER}
        />
    );
} 