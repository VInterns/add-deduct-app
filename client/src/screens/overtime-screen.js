import React from "react";
import { Team } from "../components";
import { OvertimeTeam } from "../teams";

export const OvertimeScreen = () => {
    return(
        <Team
            teamName={OvertimeTeam.NAME}
            filePath={OvertimeTeam.SAMPLE_EXCEL_URL}
            tableHeader={OvertimeTeam.TABLE_HEADER}
        />
    )
}