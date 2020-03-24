import React from "react";
import { Team } from "../components";
import { SickLeaveConsTeam } from "../teams";

export const SickLeaveConsScreen = () => {
    return (
        <Team
            teamName={SickLeaveConsTeam.NAME}
            filePath={SickLeaveConsTeam.SAMPLE_EXCEL_URL}
            collection={SickLeaveConsTeam.COLLECTION_NAME}
            tableHeader={SickLeaveConsTeam.TABLE_HEADER}
        />
    );
} 