/**
 * fileName: task-card.component.tsx
 * description: This files returns individual card of tasks with details to view tasklist screen
 */
import React from 'react';
import {Image, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import { SwipeViewStyles, TaskCardStyles } from './task-card.styles';
import { CustomCheckBox } from './checkbox.component';
import { EditIcon } from '../../../../assets';
import { ROOT_NAVIGATOR_SCREENS, TaskListParamList } from '../../../router.types';
import { DELETE_TASK, UPDATE_TASK } from '../../../store/action.types';
import { LabelsResource } from '../../../../constants/labels-resource';
import { PRIORITY_LEVELS } from '../../add-new-task/add-edit-task.types';
import { Task } from '../../../services/task.types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';

type TaskCardParamsList = NativeStackNavigationProp<TaskListParamList, 'ADD_EDIT_TASK'>;

/**
 * @export
 * @function TaskCard
 * @description It returns single card for a task with it's details
 */
export const TaskCard = (props: {task: Task}): React.ReactNode => {
    const {title, description, dueDate, priority, id, isComplete} = props.task;
    const navigation = useNavigation<TaskCardParamsList>();
    const styles = TaskCardStyles;

    const getPriorityText = (key: number): PRIORITY_LEVELS => {
        return key === 1 ? PRIORITY_LEVELS.HIGH : key === 2 ? PRIORITY_LEVELS.MEDIUM : PRIORITY_LEVELS.LOW;
    };

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
    );
};

/**
 * @export
 * @function SwipeToDelete
 * @description It returns function to swipe a card to delete
 */
export const SwipeToDelete = (props: {id: number}): React.ReactNode => {
    const styles = SwipeViewStyles;
    const dispatch = useDispatch();
    return (
        <TouchableOpacity style={styles.rootView} onPress={() => dispatch({
            type: DELETE_TASK,
            payload: {id : props.id}
          })}>           
            <Text style={styles.deleteText}>{LabelsResource.TASKLIST_ADD_EDIT_SCREEN_DELETE}</Text>           
        </TouchableOpacity>
    );
};