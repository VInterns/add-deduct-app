import React from "react";
import { Team } from "../components";
import { ProfileChangeTeam } from "../teams";

export const ProfileChangeScreen = () => {
    return (
        <Team
            teamName={ProfileChangeTeam.NAME}
            filePath={ProfileChangeTeam.SAMPLE_EXCEL_URL}
            tableHeader={ProfileChangeTeam.TABLE_HEADER}
        />
    );
} 