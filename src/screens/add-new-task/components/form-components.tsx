/**
 * fileName: form-components.tsx
 * description: This file contains components to build the form
 */

import React, { useState } from 'react';
import { View, Text, Button, Platform } from 'react-native';
import RNDateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';

import { FormComponentsStyles } from './form-components.styles';
import { ColorPalete } from '../../../../constants/color-palete';
import { SelectList } from 'react-native-dropdown-select-list';
import { PRIORITY_LEVELS } from '../add-edit-task.types';


const styles = FormComponentsStyles;

/**
 * @export
 * @function FieldLabel
 * @description It returns label of the fields
 */
export const FieldLabel = (props: {title: string, required?: boolean}): React.ReactElement => {  
    const {title, required} = props;
    return (
    <Text style={styles.textInputLabel}>{title}
    <Text style={[styles.textInputLabel, {color: ColorPalete.ORANGE_DARK}]}>{ required ? '*' : null}</Text>
    </Text>
    );
};

/**
 * @export
 * @function CustomDatePicker
 * @description It returns custom date picker with android adjustments
 */
export const CustomDatePicker = (props:{value: string; onChange(_: string): void}): React.ReactElement => {
    const {value, onChange} = props;
    const isAndroid = Platform.OS === 'android';
    const [showCalendar, setShowCalendar] = useState(isAndroid ? false : true);
    const [selectedDate] = useState(value);

    const setDateSelection = (event: DateTimePickerEvent, selectedDate: Date | undefined) => {
        if(event.type === 'set') onChange(selectedDate?.toDateString() || new Date().toDateString());
       isAndroid && setShowCalendar(false);
    };
   return (
        <View style={{marginLeft: 20, marginBottom: 10}}>
        {isAndroid && <Button title={value} onPress={() => setShowCalendar(true)}></Button>}
        {showCalendar &&  <RNDateTimePicker
        mode={'date'}
        minimumDate={new Date('2023-01-01')}
        aria-modal = {false}
        style={isAndroid ? {marginLeft: 18} : {marginLeft: 0}}
        collapsable={true}
        value={new Date(selectedDate)}
        onChange={(e, date) => setDateSelection(e, date)}
        />}
        </View>               
    );
};

/**
 * @export
 * @function FieldLabel
 * @description It returns custom drop down based on SelectList
 */
export const CustomDropDown = (props: {value: number; onChange(_: number): void}): React.ReactElement => {
    const {onChange} = props;
    const data = [
        {key: 1, value:PRIORITY_LEVELS.HIGH},
        {key: 2, value:PRIORITY_LEVELS.MEDIUM},
        {key: 3, value:PRIORITY_LEVELS.LOW}]
    return (
        <SelectList 
        dropdownTextStyles={styles.dropDownList}
        inputStyles={styles.dropDownList}
        setSelected={(priority: number) => onChange(priority) }
        data={data}
        defaultOption={{key: 2, value: PRIORITY_LEVELS.MEDIUM}}
    />
    );
};