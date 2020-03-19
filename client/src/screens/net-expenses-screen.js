import React from "react";
import { Team } from "../components";
import { NetExpensesTeam } from "../teams";

export const NetExpensesScreen = () => {
    return(
        <Team
        teamName={NetExpensesTeam.NAME}
        filePath={NetExpensesTeam.SAMPLE_EXCEL_URL}
        tableHeader={NetExpensesTeam.TABLE_HEADER}
        />
    )
}