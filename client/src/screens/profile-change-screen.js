import React from "react";
import { Team } from "../components";
import { ProfileChangeTeam } from "../teams";

export const ProfileChangeScreen = () => {
    return (
        <Team
            teamName={ProfileChangeTeam.NAME}
            filePath={ProfileChangeTeam.SAMPLE_EXCEL_URL}
            collection={ProfileChangeTeam.COLLECTION_NAME}
            tableHeader={ProfileChangeTeam.TABLE_HEADER}
        />
    );
} 