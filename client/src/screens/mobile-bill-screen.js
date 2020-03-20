import React from "react";
import { Team } from "../components";
import { MobileBillTeam } from "../teams";

export const MobileBillScreen = () => {
    return (
        <Team
            teamName={MobileBillTeam.NAME}
            filePath={MobileBillTeam.SAMPLE_EXCEL_URL}
            tableHeader={MobileBillTeam.TABLE_HEADER}
        />
    );
} 