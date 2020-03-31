const SAT = {
    "NAME": "Salary Adjustment",
    "COLLECTION_NAME": "salary-adjustment",
    "TABLE_HEADER": ["Vendor", "Staff ID", "Roles", "Name", "Basic Net", "GB", "Net Salary", "New Basic Net Salary", "GB New", "Total", "Effective Date"],
    "PANE_KEYS": ["Vendor", "Staff ID", "Roles", "Name", "Basic Net", "GB", "Net Salary", "New Basic Net Salary", "GB New", "Total", "Effective Date", "Submitted By", "Submitted At"],
    "SAMPLE_EXCEL_URL": "https://trello-attachments.s3.amazonaws.com/5e1f261085da7e5ef966e7ce/5e6f7b3e6701140739e1f29d/d0867743375c8fdcec5152090ecdba64/samples-sa.xlsx",
}

const OT = {
    "NAME": "Overtime",
    "COLLECTION_NAME": "overtime",
    "TABLE_HEADER": ["Vendor", "ID", "Name", "Overtime Hours", "Logged Out"],
    "PANE_KEYS": ["Vendor", "ID", "Name", "Overtime Hours", "Logged Out", "Submitted By", "Submitted At"],
    "SAMPLE_EXCEL_URL": "https://trello-attachments.s3.amazonaws.com/5e1f261085da7e5ef966e7ce/5e6f7b3e6701140739e1f29d/d2eee929f441939bdbbcd2f60620d069/samples-overtime.xlsx",
}

const NET = {
    "NAME": "Net Expenses",
    "COLLECTION_NAME": "net-expenses",
    "TABLE_HEADER": ["Vendor", "ID", "Amount"],
    "PANE_KEYS": ["Vendor", "ID", "Amount", "Submitted By", "Submitted At"],
    "SAMPLE_EXCEL_URL": "https://trello-attachments.s3.amazonaws.com/5e1f261085da7e5ef966e7ce/5e6f7b3e6701140739e1f29d/631c54f692788e926c628083d439ea76/samples-net-expenses.xlsx"
}

const NSADT = {
    "NAME": "Night Shift Amount Days",
    "COLLECTION_NAME": "night-shift-amount-days",
    "TABLE_HEADER": ["Vendor", "ID", "Night Shift Amount", "Night Shift Days"],
    "PANE_KEYS": ["Vendor", "ID", "Night Shift Amount", "Night Shift Days", "Submitted By", "Submitted At"],
    "SAMPLE_EXCEL_URL": "https://trello-attachments.s3.amazonaws.com/5e1f261085da7e5ef966e7ce/5e6f7b3e6701140739e1f29d/aaf14950e92ff42cc0489656b0a62431/samples-nsad.xlsx"
}

const LHT = {
    "NAME": "Lost Hours",
    "COLLECTION_NAME": "lost-hours",
    "TABLE_HEADER": ["Vendor", "ID", "Lost Hours Deduction", "Lost Hours Refund"],
    "PANE_KEYS": ["Vendor", "ID", "Lost Hours Deduction", "Lost Hours Refund", "Submitted By", "Submitted At"],
    "SAMPLE_EXCEL_URL": "https://trello-attachments.s3.amazonaws.com/5e1f261085da7e5ef966e7ce/5e6f7b3e6701140739e1f29d/fc8d293e2f9f6bf0a21ec380e3317900/samples-lost-hrs.xlsx"
}

const ORGT = {
    "NAME": "Overtime Reward Gross",
    "COLLECTION_NAME": "overtime-reward-gross",
    "TABLE_HEADER": ["Vendor", "Staff ID", "Name", "Total Reward Payment"],
    "PANE_KEYS": ["Vendor", "Staff ID", "Name", "Total Reward Payment", "Submitted By", "Submitted At"],
    "SAMPLE_EXCEL_URL": "https://trello-attachments.s3.amazonaws.com/5e1f261085da7e5ef966e7ce/5e6f7b3e6701140739e1f29d/7eeca50709e0ffcbe54abafc976b780d/samples-overtime-gross-reward.xlsx"
}

const NSDT = {
    "NAME": "No Show Detailed",
    "COLLECTION_NAME": "no-show-detailed",
    "TABLE_HEADER": ["IEX", "Date", "Exception", "Name", "MU", "MU Name", "Manager", "Supervisor", "Staff Number", "Account", "Vendor"],
    "PANE_KEYS": ["IEX", "Date", "Exception", "Name", "MU", "MU Name", "Manager", "Supervisor", "Staff Number", "Account", "Vendor", "Submitted By", "Submitted At"],
    "SAMPLE_EXCEL_URL": "https://trello-attachments.s3.amazonaws.com/5e1f261085da7e5ef966e7ce/5e6f7b3e6701140739e1f29d/ab45987f853e98a91f44ee11be36ea81/samples-no-show-detailed.xlsx"
}

const NST = {
    "NAME": "No Shows",
    "COLLECTION_NAME": "no-shows",
    "TABLE_HEADER": ["Vendor", "ID", "Name", "Total Deducted Days", "Refunded Days"],
    "PANE_KEYS": ["Vendor", "ID", "Name", "Total Deducted Days", "Refunded Days", "Submitted By", "Submitted At"],
    "SAMPLE_EXCEL_URL": "https://trello-attachments.s3.amazonaws.com/5e1f261085da7e5ef966e7ce/5e6f7b3e6701140739e1f29d/25650c0777089b550477ba0b75bad8bf/samples-no-shows.xlsx"
}

const IGT = {
    "NAME": "Incentives Gross",
    "COLLECTION_NAME": "incentives-gross",
    "TABLE_HEADER": ["Vendor", "Staff ID", "Name", "Total Gross Incentives", "Account"],
    "PANE_KEYS": ["Vendor", "Staff ID", "Name", "Total Gross Incentives", "Account", "Submitted By", "Submitted At"],
    "SAMPLE_EXCEL_URL": "https://trello-attachments.s3.amazonaws.com/5e1f261085da7e5ef966e7ce/5e6f7b3e6701140739e1f29d/979790eda2c934443f67e170b942e434/samples-incentives-gross.xlsx"
}

const INT = {
    "NAME": "Incentives Net",
    "COLLECTION_NAME": "incentives-net",
    "TABLE_HEADER": ["Vendor", "Staff ID", "Name", "Amount"],
    "PANE_KEYS": ["Vendor", "Staff ID", "Name", "Amount", "Submitted By", "Submitted At"],
    "SAMPLE_EXCEL_URL": "https://trello-attachments.s3.amazonaws.com/5e1f261085da7e5ef966e7ce/5e6f7b3e6701140739e1f29d/e5f829e68c9011276b7f139764a7a7a2/samples-incentives-net.xlsx"
}

const MBT = {
    "NAME": "Mobile Bill",
    "COLLECTION_NAME": "mobile-bill",
    "TABLE_HEADER": ["Staff ID", "Name", "Total Open Amount", "Vendor"],
    "PANE_KEYS": ["Staff ID", "Name", "Total Open Amount", "Vendor", "Submitted By", "Submitted At"],
    "SAMPLE_EXCEL_URL": "https://trello-attachments.s3.amazonaws.com/5e1f261085da7e5ef966e7ce/5e6f7b3e6701140739e1f29d/040a681046b3510ce32cfa7c806cc26d/samples-mobile-bill.xlsx"
}

const SLDT = {
    "NAME": "Sick Leave Detailed",
    "COLLECTION_NAME": "sick-leave-detailed",
    "TABLE_HEADER": ["IEX", "Date", "Exception", "Name", "MU", "MU Name", "Manager", "Supervisor", "Staff Number", "Account", "Vendor"],
    "PANE_KEYS": ["IEX", "Date", "Exception", "Name", "MU", "MU Name", "Manager", "Supervisor", "Staff Number", "Account", "Vendor", "Submitted By", "Submitted At"],
    "SAMPLE_EXCEL_URL": "https://trello-attachments.s3.amazonaws.com/5e1f261085da7e5ef966e7ce/5e6f7b3e6701140739e1f29d/ffd26567d4e4e33124102647f800b5aa/samples-sick-leave-detailed.xlsx"
}

const SLCT = {
    "NAME": "Sick Leave Cons",
    "COLLECTION_NAME": "sick-leave-cons",
    "TABLE_HEADER": ["Vendor", "ID", "Name", "Sum of Sick to be Deducted"],
    "PANE_KEYS": ["Vendor", "ID", "Name", "Sum of Sick to be Deducted", "Submitted By", "Submitted At"],
    "SAMPLE_EXCEL_URL": "https://trello-attachments.s3.amazonaws.com/5e1f261085da7e5ef966e7ce/5e6f7b3e6701140739e1f29d/5d5df96cee865385c97a115fc8241ff4/samples-sick-leave-cons.xlsx"
}

const UKDET = {
    "NAME": "UK-DE Referral Prog Net Amount",
    "COLLECTION_NAME": "ukde-referral-prog-net-amount",
    "TABLE_HEADER": ["Vendor", "ID", "Name", "Net"],
    "PANE_KEYS": ["Vendor", "ID", "Name", "Net", "Submitted By", "Submitted At"],
    "SAMPLE_EXCEL_URL": "https://trello-attachments.s3.amazonaws.com/5e1f261085da7e5ef966e7ce/5e6f7b3e6701140739e1f29d/18d0d2b044101d4c792ca243575585a0/samples-ukde.xlsx"
}

const AGAT = {
    "NAME": "Award Gross Amount",
    "COLLECTION_NAME": "award-gross-amount",
    "TABLE_HEADER": ["Vendor", "Staff ID", "Names", "Amount of Reward"],
    "PANE_KEYS": ["Vendor", "Staff ID", "Names", "Amount of Reward", "Submitted By", "Submitted At"],
    "SAMPLE_EXCEL_URL": "https://trello-attachments.s3.amazonaws.com/5e1f261085da7e5ef966e7ce/5e6f7b3e6701140739e1f29d/96720131e78b3b4c571d677086cc2546/samples-award-gross-amount.xlsx"
}

const GYMT = {
    "NAME": "GYM",
    "COLLECTION_NAME": "gym",
    "TABLE_HEADER": ["Vendor", "ID", "Name", "Amount"],
    "PANE_KEYS": ["Vendor", "ID", "Name", "Amount", "Submitted By", "Submitted At"],
    "SAMPLE_EXCEL_URL": "https://trello-attachments.s3.amazonaws.com/5e1f261085da7e5ef966e7ce/5e6f7b3e6701140739e1f29d/5052110b048cfa1e540e8a9becd4cbb9/samples-gym.xlsx"
}

const PDT = {
    "NAME": "Penalties Detailed",
    "COLLECTION_NAME": "penalties-detailed",
    "TABLE_HEADER": ["Vendor", "ID", "Violater Name", "Violation Type", "Incident Details", "Incident Date", "Penalty Applied", "Penalty Receiving Date"],
    "PANE_KEYS": ["Vendor", "ID", "Violater Name", "Violation Type", "Incident Details", "Incident Date", "Penalty Applied", "Penalty Receiving Date", "Submitted By", "Submitted At"],
    "SAMPLE_EXCEL_URL": "https://trello-attachments.s3.amazonaws.com/5e1f261085da7e5ef966e7ce/5e6f7b3e6701140739e1f29d/61cc012b546cce479b37758769218c0d/samples-penalties-detailed.xlsx"
}

const OCT = {
    "NAME": "On Call",
    "COLLECTION_NAME": "on-call",
    "TABLE_HEADER": ["Vendor", "ID", "Name", "Days"],
    "PANE_KEYS": ["Vendor", "ID", "Name", "Days", "Submitted By", "Submitted At"],
    "SAMPLE_EXCEL_URL": "https://trello-attachments.s3.amazonaws.com/5e1f261085da7e5ef966e7ce/5e6f7b3e6701140739e1f29d/aefa922b26fa1a99982a53884128a040/samples-on-call.xlsx"
}

const PCT = {
    "NAME": "Profile Change",
    "COLLECTION_NAME": "profile-change",
    "TABLE_HEADER": ["ID", "Vendor", "Name", "Effective Date", "Account", "New Basic", "New GB", "New Total"],
    "PANE_KEYS": ["ID", "Vendor", "Name", "Effective Date", "Account", "New Basic", "New GB", "New Total", "Submitted By", "Submitted At"],
    "SAMPLE_EXCEL_URL": "https://trello-attachments.s3.amazonaws.com/5e1f261085da7e5ef966e7ce/5e6f7b3e6701140739e1f29d/30a0b4aa887a99d3efead9dd832c7ec3/samples-profile-change.xlsx"
}

module.exports = {
    SAT,
    OT,
    NET,
    NSADT,
    LHT,
    ORGT,
    NSDT,
    NST,
    IGT,
    INT,
    MBT,
    SLDT,
    SLCT,
    UKDET,
    AGAT,
    GYMT,
    PDT,
    OCT,
    PCT
}