import React from "react";
import { Team } from "../components";
import { Overtime } from "../teams";

export const OvertimeScreen = () => {
    return(
        <Team
            teamName={Overtime.NAME}
            filePath={Overtime.SAMPLE_EXCEL_URL}
            tableHeader={Overtime.TABLE_HEADER}
        />
    )
}