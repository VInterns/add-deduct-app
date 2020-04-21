import {
    IGT,
    INT,
    NHT,
    OVT,
    OCT,
    PCT,
    SAT,
    NEXT,
    NSAT,
    NSDT,
    ORGT,
    UKDET,
    AGAT
} from '../teams';
import _ from "lodash";

export const IG_keys = IGT.PANE_KEYS.map(key => {
    return _.camelCase(key)
});

export const IN_keys = INT.PANE_KEYS.map(key => {
    return _.camelCase(key)
});

export const NH_keys = NHT.PANE_KEYS.map(key => {
    return _.camelCase(key)
})

export const OC_keys = OCT.PANE_KEYS.map(key => {
    return _.camelCase(key)
});

export const OV_keys = OVT.PANE_KEYS.map(key => {
    return _.camelCase(key)
});

export const PC_keys = PCT.PANE_KEYS.map(key => {
    return _.camelCase(key)
})

export const SA_keys = SAT.PANE_KEYS.map(key => {
    return _.camelCase(key)
})

export const AGA_keys = AGAT.PANE_KEYS.map(key => {
    return _.camelCase(key)
});

export const NEX_keys = NEXT.PANE_KEYS.map(key => {
    return _.camelCase(key)
});

export const NSA_keys = NSAT.PANE_KEYS.map(key => {
    return _.camelCase(key)
});

export const NSD_keys = NSDT.PANE_KEYS.map(key => {
    return _.camelCase(key)
});

export const ORG_keys = ORGT.PANE_KEYS.map(key => {
    return _.camelCase(key)
});

export const UKDE_keys = UKDET.PANE_KEYS.map(key => {
    return _.camelCase(key)
});

