import React from "react";
import { Team } from "../components";
import { AwardGrossAmountTeam } from "../teams";

export const AwardGrossAmountScreen = () => {
    return (
        <Team
            teamName={AwardGrossAmountTeam.NAME}
            filePath={AwardGrossAmountTeam.SAMPLE_EXCEL_URL}
            tableHeader={AwardGrossAmountTeam.TABLE_HEADER}
        />
    );
} 