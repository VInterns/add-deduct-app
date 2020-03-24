import React from "react";
import { Team } from "../components";
import { UKDEReferralProgNetAmountTeam } from "../teams";

export const UKDEReferralProgNetAmountScreen = () => {
    return (
        <Team
            teamName={UKDEReferralProgNetAmountTeam.NAME}
            filePath={UKDEReferralProgNetAmountTeam.SAMPLE_EXCEL_URL}
            collection={UKDEReferralProgNetAmountTeam.COLLECTION_NAME}
            tableHeader={UKDEReferralProgNetAmountTeam.TABLE_HEADER}
        />
    );
} 