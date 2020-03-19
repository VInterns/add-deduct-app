import React from "react";
import { Team } from "../components";
import { SalaryAdjustment } from "../teams";

export const SalaryAdjustmentScreen = () => {
    return (
        <Team
            teamName={SalaryAdjustment.NAME}
            filePath={SalaryAdjustment.SAMPLE_EXCEL_URL}
            tableHeader={SalaryAdjustment.TABLE_HEADER}
        />
    );
} 