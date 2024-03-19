import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { FormComponentsStyles } from './form-components.styles';
import { ColorPalete } from '../../../../constants/color-palete';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { SelectList } from 'react-native-dropdown-select-list';
import { PRIORITY_LEVELS } from '../add-edit-task.types';


const styles = FormComponentsStyles;

export const FieldLabel = (props: {title: string, required?: boolean}) => {
   
    const {title, required} = props;
    return (
    <Text style={styles.textInputLabel}>{title}
    <Text style={[styles.textInputLabel, {color: ColorPalete.ORANGE_DARK}]}>{ required ? '*' : null}</Text>
    </Text>
    );
}

export const CustomTextInput = (props) => {
    const styles = FormComponentsStyles;
    return (        
        <TextInput style={[styles.textInput]} {...props}></TextInput>        
    );
}

export const CustomDatePicker = (props) => {
    const {value, onChange} = props;
    return (        
        <RNDateTimePicker
        mode={'date'}
        minimumDate={new Date('2023-01-01')}
        aria-modal = {true}
        style={{marginLeft: 18, marginBottom: 14}}
        collapsable={true}
        value={new Date(value)}
        onChange={(_, selectedDate) => onChange(selectedDate?.toDateString())}
        />   
               
    );
}

export const CustomDropDown = (props) => {
    const {value, onChange} = props;
    const data = [
        {key: 1, value:PRIORITY_LEVELS.HIGH},
        {key: 2, value:PRIORITY_LEVELS.MEDIUM},
        {key: 3, value:PRIORITY_LEVELS.LOW}]
    return (
        <SelectList 
        dropdownTextStyles={styles.dropDownList}
        inputStyles={styles.dropDownList}
        setSelected={(priority: PRIORITY_LEVELS) => onChange(priority) }
        data={data}
        defaultOption={{key: PRIORITY_LEVELS.MEDIUM, value: PRIORITY_LEVELS.MEDIUM}}
    />
    );
}