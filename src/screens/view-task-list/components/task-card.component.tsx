
import {Image, Text, TouchableOpacity, View } from 'react-native';
import { TaskCardStyles } from './task-card.styles';
import React from 'react';
import { CustomCheckBox } from './checkbox.component';
import { EditIcon } from '../../../../assets';
import { useNavigation } from '@react-navigation/native';
import { ROOT_NAVIGATOR_SCREENS } from '../../../router.enum';
import { UPDATE_TASK } from '../../../store/action.types';


export const TaskCard = (props) => {
    const {title, description, dueDate, priority} = props.task;
    const navigation = useNavigation();
    const styles = TaskCardStyles;
    return (
       <View style ={styles.cardRootView}>
        <View style = {styles.cardContentView}>
        <View style={styles.flexDirectionRow} >
        <Text style={styles.taskTitle}>{title}</Text>
        <TouchableOpacity hitSlop={{bottom: 50, top: 50, left: 50, right: 50 }} onPress={() => navigation.navigate(ROOT_NAVIGATOR_SCREENS.ADD_EDIT_TASK, {task: props.task, action: UPDATE_TASK})}>
        <Image source={EditIcon} style={{alignSelf:'flex-end', width: 20, height: 20, marginBottom: 10}}  />
        </TouchableOpacity>
        </View>
        <Text style={styles.taskDueDate}>{`Due: ${new Date(dueDate).toDateString()}`}</Text>
        <Text style={styles.taskDescription}>{description ?? ''}</Text>       
        <View style={styles.flexDirectionRow}>
        <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
        <CustomCheckBox/>
        </View>
        <Text style={styles.taskPriority}>{priority}</Text>
        </View>
        </View>
       </View>
    )
}