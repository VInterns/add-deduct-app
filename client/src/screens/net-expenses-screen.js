import React from "react";
import { Team } from "../components";
import { NetExpensesTeam } from "../teams";

export const NetExpensesScreen = () => {
    return(
        <Team
        teamName={NetExpensesTeam.NAME}
        filePath={NetExpensesTeam.SAMPLE_EXCEL_URL}
        collection={NetExpensesTeam.COLLECTION_NAME}
        tableHeader={NetExpensesTeam.TABLE_HEADER}
        />
    )
}