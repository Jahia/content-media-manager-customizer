import React from "react";
import {TableHead, TableRow, TableCell, TableSortLabel, withStyles} from "@material-ui/core";
import {translate} from "react-i18next";

const styles = theme => ({
    columnLabel: {
        color: "#5E6565 !important"
    },
    columnLabelInactive: {
        fontWeight: "normal"
    },
    columnLabelActiveAsc: {
        fontWeight: "bold",
        transform: "rotate(180deg)"
    },
    columnLabelActiveDesc: {
        fontWeight: "bold",
    },
    columnLabelIcon: {
        display: "none"
    }
});

class ContentListHeader extends React.Component {

    handleSort(order, orderBy){
        this.props.onRequestSort(order, orderBy);
    };

    render() {

        const {order, orderBy, columnData, t, classes} = this.props;
        let direction = order==="DESC" ? "ASC" : "DESC";

        return <TableHead className={classes.head}>
            <TableRow className={classes.contentRow}>
                <TableCell/>
                {columnData.map(column => {
                    if (column.sortable) {

                        let active = (orderBy === column.property);
                        let rootClass = classes.columnLabel;
                        if (active) {
                            rootClass += (" " + (direction == 'ASC' ? classes.columnLabelActiveAsc : classes.columnLabelActiveDesc));
                        } else {
                            rootClass += (" " + classes.columnLabelInactive);
                        }

                        return <TableCell
                            classes={column.id !== 'createdBy' ? {root: classes.paddingCell} : {}}
                            key={column.id}
                            className={classes[column.id] + ' ' + classes.tableCellHeight}
                            sortDirection={orderBy === column.property ? order.toLowerCase() : false}
                        >
                            <TableSortLabel
                                classes={{
                                    root: rootClass,
                                    icon: classes.columnLabelIcon
                                }}
                                active={active}
                                direction={direction.toLowerCase()}
                                onClick={() => this.handleSort(direction, column.property)}
                            >
                                {t(column.label)}
                            </TableSortLabel>
                        </TableCell>;
                    } else {
                        return <TableCell
                            key={column.id}
                            className={classes[column.id] + ' ' + classes.tableCellHeight}
                            sortDirection={orderBy === column.property ? order.toLowerCase() : false}
                        >
                            {t(column.label)}
                        </TableCell>;
                    }
                }, this)}
            </TableRow>
        </TableHead>;
    }
}

ContentListHeader = withStyles(styles)(translate()(ContentListHeader));

export {ContentListHeader};