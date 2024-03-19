
import {Image, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { SwipeViewStyles, TaskCardStyles } from './task-card.styles';
import React from 'react';
import { CustomCheckBox } from './checkbox.component';
import { EditIcon } from '../../../../assets';
import { useNavigation } from '@react-navigation/native';
import { ROOT_NAVIGATOR_SCREENS } from '../../../router.enum';
import { DELETE_TASK, UPDATE_TASK } from '../../../store/action.types';
import { useDispatch } from 'react-redux';
import { LabelsResource } from '../../../../constants/labels-resource';
import { PRIORITY_LEVELS } from '../../add-new-task/add-edit-task.types';


export const TaskCard = (props) => {
    const {title, description, dueDate, priority, id, isComplete} = props.task;
    const navigation = useNavigation();
    const styles = TaskCardStyles;

    const getPriorityText = (key: number) => {
        return key === 1 ? PRIORITY_LEVELS.HIGH : key === 2 ? PRIORITY_LEVELS.MEDIUM : PRIORITY_LEVELS.LOW;
    }
    return (
       <TouchableHighlight style ={styles.cardRootView}>
        <View style = {styles.cardContentView}>
        <View style={styles.flexDirectionRow} >
        <Text style={styles.taskTitle}>{title}</Text>
        <TouchableOpacity hitSlop={{bottom: 50, top: 50, left: 50, right: 20 }} onPress={() => navigation.navigate(ROOT_NAVIGATOR_SCREENS.ADD_EDIT_TASK, {task: props.task, action: UPDATE_TASK})}>
        <Image source={EditIcon} style={{alignSelf:'flex-end', width: 20, height: 20, marginBottom: 10}}  />
        </TouchableOpacity>
        </View>
       {!isComplete && <Text style={styles.taskDueDate}>{`Due: ${new Date(dueDate).toDateString()}`}</Text>}
        {description && <Text style={styles.taskDescription}>{description ?? ''}</Text> }      
        <View style={styles.flexDirectionRow}>
        <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
        <CustomCheckBox id={id} isComplete={isComplete}/>
        </View>
        <Text style={styles.taskPriority}>{getPriorityText(priority)}</Text>
        </View>
        </View>
       </TouchableHighlight>
    )
}

export const SwipeToDelete = (props) => {
    const styles = SwipeViewStyles;
    const dispatch = useDispatch();
    return (
        <TouchableOpacity style={styles.rootView} onPress={() => dispatch({
            type: DELETE_TASK,
            payload: props.id
          })}>           
            <Text style={styles.deleteText}>{LabelsResource.TASKLIST_ADD_EDIT_SCREEN_DELETE}</Text>           
        </TouchableOpacity>
    )
}