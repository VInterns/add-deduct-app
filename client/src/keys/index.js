import {
    OVT,
    NEXT,
    NSAT,
    NSDT,
    ORGT,
    IGT,
    INT,
    UKDET,
    AGAT,
    OCT
} from '../teams';
import _ from "lodash";

export const IG_keys = IGT.PANE_KEYS.map(key => {
    return _.camelCase(key)
});

export const IN_keys = INT.PANE_KEYS.map(key => {
    return _.camelCase(key)
});

export const OC_keys = OCT.PANE_KEYS.map(key => {
    return _.camelCase(key)
});

export const OV_keys = OVT.PANE_KEYS.map(key => {
    return _.camelCase(key)
});

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

