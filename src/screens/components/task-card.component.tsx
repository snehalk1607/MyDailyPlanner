
import {Image, Text, View } from 'react-native';
import { TaskCardStyles } from './task-card.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import { CheckedCheckBox } from '../../../assets';
import { CustomCheckBox } from './checkbox.component';


export const TaskCard = (props) => {
    const {title} = props;
    const styles = TaskCardStyles;
    return (
       <View style ={styles.cardRootView}>
        <View style = {styles.cardContentView}>
        <View style={styles.flexDirectionRow}>
        <Text style={styles.taskTitle}>{'My First Task'}</Text>
        <Text style={styles.taskDueDate}>{'01 Jan 2024'}</Text>
        </View>
        <Text style={styles.taskDescription}>{'This is a long text for the description of the first task'}</Text>       
        <View style={styles.flexDirectionRow}>
        <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
        <CustomCheckBox/>
        </View>
        <Text style={styles.taskPriority}>{'Medium'}</Text>
        </View>
        </View>
       </View>
    )
}