import { Formik } from 'formik';
import React, { useState } from 'react';
import { Button, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { Text, View } from 'react-native';
import { CustomDatePicker, CustomDropDown, CustomTextInput, FieldLabel } from './components/form-components';
import { AddOrEditTaskStyles } from './add-edit-task.styles';
import { LabelsResource } from '../../../constants/labels-resource';
import { PRIORITY_LEVELS } from './add-edit-task.types';
import * as Yup from 'yup';
import Toast from 'react-native-toast-message';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ADD_TASK, UPDATE_TASK } from '../../store/action.types';

const validationSchema = Yup.object().shape({
    title: Yup.string().required('Please fill this field'),
    description: Yup.string().min(3, 'Enter Description'),
    dueDate: Yup.date().required('Please fill this field'),
    priority: Yup.string().required('Please fill this field')
});


export const AddOrEditTask = (props) => {
    const styles = AddOrEditTaskStyles; 
    const navigation = useNavigation();
    const {task, action}= useRoute().params;
    const dispatch = useDispatch();
    return ( 
    <View style={styles.rootView}>
    <Text style={styles.screenHeading}>{LabelsResource.TASKLIST_ADD_EDIT_SCREEN_HEADING}</Text>
    <Formik        
    initialValues={{title: task.title, description: task.description, dueDate: task.dueDate || new Date(), priority: task.priority}}
    validationSchema={validationSchema}
    onSubmit={values => {
        dispatch({
          type: action,
          payload: action === UPDATE_TASK ? {...values, id: task.id} : {...values}
        });
        Toast.show({ type: 'success', text1: 'Task Added Successfully', position: 'bottom', bottomOffset: 70})
        navigation.goBack();
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
        <Text style={styles.addNewTaskText}>{LabelsResource.TASKLIST_ADD_EDIT_SCREEN_SUBMIT}</Text>
        </TouchableOpacity>

      </View>
    )}
  </Formik> 
  </View>           
    );
}