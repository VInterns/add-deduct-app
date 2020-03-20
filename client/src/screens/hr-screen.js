import React from "react";
import { HRTeam } from "../components";

const HEADER = [
    "Final Excel File",
    "Last Upload By",
    "Last Upload At",
    ""
]

export const HRScreen = () => {
    return (
        <HRTeam
            teamName={"Human Resources"}
            tableHeader={HEADER}
        />
    )
}