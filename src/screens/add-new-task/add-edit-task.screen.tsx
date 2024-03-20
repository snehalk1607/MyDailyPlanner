import { Formik } from 'formik';
import React, { useState } from 'react';
import { Button, Keyboard, Platform, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { Text, View } from 'react-native';
import { CustomDatePicker, CustomDropDown, FieldLabel } from './components/form-components';
import { AddOrEditTaskStyles } from './add-edit-task.styles';
import { LabelsResource } from '../../../constants/labels-resource';
import { PRIORITY_LEVELS } from './add-edit-task.types';
import * as Yup from 'yup';
import Toast from 'react-native-toast-message';
import { useNavigation, useRoute } from '@react-navigation/native';
import { UPDATE_TASK } from '../../store/action.types';

const validationSchema = Yup.object().shape({
    title: Yup.string().required('Please fill this field'),
    description: Yup.string().min(3, 'Please enter minimum 3 characters'),
    dueDate: Yup.date().required('Please fill this field'),
    priority: Yup.string().required('Please fill this field')
});


export const AddOrEditTask = () => {
    const styles = AddOrEditTaskStyles; 
    const navigation = useNavigation();
    const {task, action}= useRoute().params;
    const dispatch = useDispatch();
    const isEditScreen = action === UPDATE_TASK;
    return ( 
    <View style={styles.rootView}>
    <View style={{flexDirection: 'row'}}>
    <Text style={styles.backText} onPress={() => navigation.goBack()}>{'< back'}</Text>
    <Text style={[styles.screenHeading]}>{isEditScreen ? LabelsResource.TASKLIST_ADD_EDIT_SCREEN_EDIT_HEADING : LabelsResource.TASKLIST_ADD_EDIT_SCREEN_HEADING}</Text>   
    </View>
    <Formik        
    initialValues={{title: task.title, description: task.description || '', dueDate: task.dueDate || new Date().toDateString(), priority: task.priority || PRIORITY_LEVELS.MEDIUM}}
    validationSchema={validationSchema}
    onSubmit={values => {
     Platform.OS === 'android' ? Keyboard.dismiss(): null;
        dispatch({
          type: action,
          payload: isEditScreen ? {...values, id: task.id} : {...values}
        });     
        Toast.show({ type: 'success', text1: isEditScreen ? LabelsResource.TASKLIST_UPDATED_TOAST_MESSAGE : LabelsResource.TASKLIST_ADDED_TOAST_MESSAGE, position: 'bottom', bottomOffset: 70, text1Style: {fontSize: 15}})
        setTimeout(() => {
          navigation.goBack();
        }, 1600);
      }}>
    {({handleSubmit, errors,  handleChange, values, setFieldValue, touched }) => (
      <View style={{flex:1}}>
        <Toast/>
        <FieldLabel title={LabelsResource.TASKLIST_ADD_EDIT_SCREEN_TASK_TITLE} required />
        <TextInput  style={styles.textInput} value={values.title}  onChangeText={handleChange('title')}></TextInput>
       {errors.title &&  touched.title && <Text style={styles.errorText}>{errors.title}</Text>}
        
        <FieldLabel title={LabelsResource.TASKLIST_ADD_EDIT_SCREEN_TASK_DESCRIPTION} />
        <TextInput  style={styles.textInput} value={values.description}  onChangeText={handleChange('description')}></TextInput>
        {errors.description && touched.description && <Text style={styles.errorText}>{errors.description}</Text>}

        <View style={{flexDirection:'row'}}>
        <FieldLabel title={LabelsResource.TASKLIST_ADD_EDIT_SCREEN_DUE_DATE} required/>
        <CustomDatePicker value={values.dueDate} onChange = { (date: string) => setFieldValue('dueDate', date)}/>
        </View>
        
        <FieldLabel title={LabelsResource.TASKLIST_ADD_EDIT_SCREEN_PRIORITY} />
        <CustomDropDown value={values.priority} onChange = {(priority: PRIORITY_LEVELS) => setFieldValue('priority', priority)}/>
        
        <TouchableOpacity style={styles.footer} onPress={() => handleSubmit()} >       
        <Text style={styles.addNewTaskText}>{ isEditScreen ? LabelsResource.TASKLIST_ADD_EDIT_SCREEN_SAVE_BUTTON :LabelsResource.TASKLIST_ADD_EDIT_SCREEN_SUBMIT}</Text>
        </TouchableOpacity>

      </View>
    )}
  </Formik> 
  </View>           
    );
}