import React from "react";
import { Table } from "semantic-ui-react";

export const TeamTableBodyRow = (props) => {
    let renderKeys = Object.keys(props.keys);
    return renderKeys.map((key, index) => {
        return <Table.Cell key={props.data[key]}>{props.data[key]}</Table.Cell>
    })
}