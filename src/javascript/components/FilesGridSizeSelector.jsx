import React from 'react';
import {Radio, withStyles} from '@material-ui/core';
import {RadioButtonChecked, RadioButtonUnchecked} from "@material-ui/icons";

const styles = theme => ({
    root: {
        margin: 5
    },
    radioButton: {
        padding: 0,
    },
    radioButtonChecked: {
        color: theme.palette.primary.contrastText + " !important"
    },
});

class FilesGridSizeSelector extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: props.initValue,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, value) {
        this.setState({
            value
        });
        this.props.onChange(value);
    };

    render() {

        let {classes} = this.props;

        return <span className={classes.root}>
            {_.map(_.range(1, 6), (value => <Radio
                key={value}
                value={value}
                checked={value === this.state.value}
                onChange={(event) => this.handleChange(event, Number(event.target.value))}
                icon={<RadioButtonUnchecked fontSize={'small'}/>}
                checkedIcon={<RadioButtonChecked fontSize={'small'}/>}
                classes={{
                    root: classes.radioButton,
                    checked: classes.radioButtonChecked
                }}
            />))}
        </span>;
    }
}

FilesGridSizeSelector = withStyles(styles)(FilesGridSizeSelector);

export {FilesGridSizeSelector};