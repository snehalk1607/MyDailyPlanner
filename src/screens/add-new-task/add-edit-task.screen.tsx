import { Formik } from 'formik';
import React from 'react';
import { Button, TextInput, TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native';
import { CustomDatePicker, CustomDropDown, CustomTextInput, FieldLabel } from './components/form-components';
import { AddOrEditTaskStyles } from './add-edit-task.styles';
import { ColorPalete } from '../../../constants/color-palete';

export const AddOrEditTask = () => {
    const styles = AddOrEditTaskStyles; 
    return ( 
    <View style={{flex:1, marginVertical: 30, marginHorizontal: 15, justifyContent:'center',  }}>
    <Text style={{alignSelf:'center', fontSize: 20, color: ColorPalete.ORANGE_DARK, fontWeight: 'bold', marginBottom: 18}}>{'Add New Task'}</Text>
    <Formik           
    initialValues={{ email: '' }}
    onSubmit={values => console.log(values)}>
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <View style={{flex:1}}>
        <FieldLabel title={'Enter Title'} required />
        <CustomTextInput/>
        <FieldLabel title={'Enter Description'} />
        <CustomTextInput />
        <View style={{flexDirection:'row'}}>
        <FieldLabel title={'Select Due Date'} required/>
        <CustomDatePicker />
        </View>
        <FieldLabel title={'Select Priority'} />
        <CustomDropDown />
        <TouchableOpacity style={styles.footer} onPress={() => ''} >
                <Text style={styles.addNewTaskText}>{'Add Task'}</Text>
            </TouchableOpacity>
      </View>
    )}
  </Formik> 
  </View>           
    );
}