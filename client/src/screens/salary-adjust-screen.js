import React from "react";
import { Team } from "../components";
import { SalaryAdjustmentTeam } from "../teams";

export const SalaryAdjustmentScreen = () => {
    return (
        <Team
            teamName={SalaryAdjustmentTeam.NAME}
            filePath={SalaryAdjustmentTeam.SAMPLE_EXCEL_URL}
            tableHeader={SalaryAdjustmentTeam.TABLE_HEADER}
        />
    );
} 