import React from "react";
import { Team } from "../components";
import { OvertimeRewardGrossTeam } from "../teams";

export const OvertimeRewardGrossScreen = () => {
    return (
        <Team
            teamName={OvertimeRewardGrossTeam.NAME}
            filePath={OvertimeRewardGrossTeam.SAMPLE_EXCEL_URL}
            tableHeader={OvertimeRewardGrossTeam.TABLE_HEADER}
        />
    );
} 