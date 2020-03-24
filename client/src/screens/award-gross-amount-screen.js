import React from "react";
import { Team } from "../components";
import { AwardGrossAmountTeam } from "../teams";

export const AwardGrossAmountScreen = () => {
    return (
        <Team
            teamName={AwardGrossAmountTeam.NAME}
            filePath={AwardGrossAmountTeam.SAMPLE_EXCEL_URL}
            collection={AwardGrossAmountTeam.COLLECTION_NAME}
            tableHeader={AwardGrossAmountTeam.TABLE_HEADER}
        />
    );
} 