import React from "react";
import { Tab } from "semantic-ui-react";
import { MenuItem } from '../components';
import {
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
} from "../teams";

const panes = [
    { menuItem: SAT.NAME, render: () => <MenuItem paneHeader={SAT.NAME} fileName={SAT.COLLECTION_NAME} paneKeys={SAT.TABLE_HEADER} /> },
    { menuItem: OT.NAME, render: () => <MenuItem paneHeader={OT.NAME} fileName={OT.COLLECTION_NAME} paneKeys={OT.TABLE_HEADER}/> },
    { menuItem: NET.NAME, render: () => <MenuItem paneHeader={NET.NAME} fileName={NET.COLLECTION_NAME} paneKeys={NET.TABLE_HEADER}/> },
    { menuItem: NSADT.NAME, render: () => <MenuItem paneHeader={NSADT.NAME} fileName={NSADT.COLLECTION_NAME} paneKeys={NSADT.TABLE_HEADER}/> },
    { menuItem: LHT.NAME, render: () => <MenuItem paneHeader={LHT.NAME} fileName={LHT.COLLECTION_NAME} paneKeys={LHT.TABLE_HEADER}/> },
    { menuItem: ORGT.NAME, render: () => <MenuItem paneHeader={ORGT.NAME} fileName={ORGT.COLLECTION_NAME} paneKeys={ORGT.TABLE_HEADER}/> },
    { menuItem: NSDT.NAME, render: () => <MenuItem paneHeader={NSDT.NAME} fileName={NSDT.COLLECTION_NAME} paneKeys={NSDT.TABLE_HEADER}/> },
    { menuItem: NST.NAME, render: () => <MenuItem paneHeader={NST.NAME} fileName={NST.COLLECTION_NAME} paneKeys={NST.TABLE_HEADER}/> },
    { menuItem: IGT.NAME, render: () => <MenuItem paneHeader={IGT.NAME} fileName={IGT.COLLECTION_NAME} paneKeys={IGT.TABLE_HEADER}/> },
    { menuItem: INT.NAME, render: () => <MenuItem paneHeader={INT.NAME} fileName={INT.COLLECTION_NAME} paneKeys={INT.TABLE_HEADER}/> },
    { menuItem: MBT.NAME, render: () => <MenuItem paneHeader={MBT.NAME} fileName={MBT.COLLECTION_NAME} paneKeys={MBT.TABLE_HEADER}/> },
    { menuItem: SLDT.NAME, render: () => <MenuItem paneHeader={SLDT.NAME} fileName={SLDT.COLLECTION_NAME} paneKeys={SLDT.TABLE_HEADER}/> },
    { menuItem: SLCT.NAME, render: () => <MenuItem paneHeader={SLCT.NAME} fileName={SLCT.COLLECTION_NAME} paneKeys={SLCT.TABLE_HEADER}/> },
    { menuItem: UKDET.NAME, render: () => <MenuItem paneHeader={UKDET.NAME} fileName={UKDET.COLLECTION_NAME} paneKeys={UKDET.TABLE_HEADER}/> },
    { menuItem: AGAT.NAME, render: () => <MenuItem paneHeader={AGAT.NAME} fileName={AGAT.COLLECTION_NAME} paneKeys={AGAT.TABLE_HEADER}/> },
    { menuItem: GYMT.NAME, render: () => <MenuItem paneHeader={GYMT.NAME} fileName={GYMT.COLLECTION_NAME} paneKeys={GYMT.TABLE_HEADER}/> },
    { menuItem: PDT.NAME, render: () => <MenuItem paneHeader={PDT.NAME} fileName={PDT.COLLECTION_NAME} paneKeys={PDT.TABLE_HEADER}/> },
    { menuItem: OCT.NAME, render: () => <MenuItem paneHeader={OCT.NAME} fileName={OCT.COLLECTION_NAME} paneKeys={OCT.TABLE_HEADER}/> },
    { menuItem: PCT.NAME, render: () => <MenuItem paneHeader={PCT.NAME} fileName={PCT.COLLECTION_NAME} paneKeys={PCT.TABLE_HEADER}/> },
]

export const HRTeamTable = () => {
    return (
        <div>
            <Tab
                panes={panes}
                menu={{ fluid: true, vertical: true, tabular: true, color: 'red'}}
            />
        </div>
    )
}

