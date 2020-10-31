import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete'

export default function CoolButton() {
    return(
        <ButtonGroup
            variant = "contained"
            color = "primary">
            <Button
                startIcon={<SaveIcon />}
            >
               Add Exam
            </Button>
            <Button 
                endIcon={<DeleteIcon />}
            >
                Delete 
            </Button>

        </ButtonGroup>
    )
}
