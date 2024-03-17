import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { FormComponentsStyles } from './form-components.styles';
import { ColorPalete } from '../../../../constants/color-palete';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { SelectList } from 'react-native-dropdown-select-list';


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
    )
}

export const CustomDatePicker = () => {
    return ( 
       
        <RNDateTimePicker
        mode={'date'}
        aria-modal = {true}
        style={{marginLeft: 18, marginBottom: 12}}
        collapsable={true}
        value={new Date()}
        />   
               
    );
}

export const CustomDropDown = () => {
    const data = [
        {key: 1, value:'High'},
        {key: 2, value:'Medium'},
        {key: 3, value:'Low'}]
    return (
        <SelectList 
        setSelected={() => ''} 
        dropdownTextStyles={styles.dropDownList}
        inputStyles={styles.dropDownList}
        data={data} 
        defaultOption={{key: 2, value:'Medium'}}
    />
    )
}