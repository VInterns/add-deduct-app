const SalaryAdjustmentTeam = {
    "NAME": "Salary Adjustment",
    "TABLE_HEADER": [ "Vendor", "Staff ID", "Roles", "Name", "Basic Net", "GB", "Net Salary", "New Basic Net Salary", "GB New", "Total", "Effective Date" ],
    "SAMPLE_EXCEL_URL": "https://trello-attachments.s3.amazonaws.com/5e1f261085da7e5ef966e7ce/5e6f7b3e6701140739e1f29d/d0867743375c8fdcec5152090ecdba64/samples-sa.xlsx"
}

const OvertimeTeam = {
    "NAME": "Overtime",
    "TABLE_HEADER": ["Vendor", "ID", "Name", "Overtime Hours", "Logged Out"],
    "SAMPLE_EXCEL_URL": "https://trello-attachments.s3.amazonaws.com/5e1f261085da7e5ef966e7ce/5e6f7b3e6701140739e1f29d/b4cf280ca20790b58db1d2ab05ac4195/samples-overtime.xlsx"

}

const NetExpensesTeam = {
    "NAME": "Net Expenses",
    "TABLE_HEADER": ["Vendor", "ID", "Amount"],
    "SAMPLE_EXCEL_URL": "https://trello-attachments.s3.amazonaws.com/5e1f261085da7e5ef966e7ce/5e6f7b3e6701140739e1f29d/631c54f692788e926c628083d439ea76/samples-net-expenses.xlsx"
}

const NightShiftAmountDaysTeam = {
    "NAME": "Night Shift Amount Days",
    "TABLE_HEADER": ["Vendor", "ID", "Night Shift Amount", "Night Shift Days"],
    "SAMPLE_EXCEL_URL": "https://trello-attachments.s3.amazonaws.com/5e1f261085da7e5ef966e7ce/5e6f7b3e6701140739e1f29d/aaf14950e92ff42cc0489656b0a62431/samples-nsad.xlsx"
}

const LostHoursTeam = {
    "NAME": "Lost Hours",
    "TABLE_HEADER": ["Vendor", "ID", "Lost Hours Deduction", "Lost Hours Refund"],
    "SAMPLE_EXCEL_URL": "https://trello-attachments.s3.amazonaws.com/5e1f261085da7e5ef966e7ce/5e6f7b3e6701140739e1f29d/fc8d293e2f9f6bf0a21ec380e3317900/samples-lost-hrs.xlsx"
}

/* const TeamName = {
    "NAME": "",
    "TABLE_HEADER": [],
    "SAMPLE_EXCEL_URL": ""
} */

module.exports = {
    SalaryAdjustmentTeam,
    OvertimeTeam,
    NetExpensesTeam,
    NightShiftAmountDaysTeam,
    LostHoursTeam
}