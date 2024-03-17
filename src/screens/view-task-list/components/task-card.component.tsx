
import {Image, Text, TouchableOpacity, View } from 'react-native';
import { TaskCardStyles } from './task-card.styles';
import React from 'react';
import { CustomCheckBox } from './checkbox.component';
import { EditIcon } from '../../../../assets';


export const TaskCard = (props) => {
    const {title} = props;
    const styles = TaskCardStyles;
    return (
       <View style ={styles.cardRootView}>
        <View style = {styles.cardContentView}>
        <View style={styles.flexDirectionRow}>
        <Text style={styles.taskTitle}>{'My First Task'}</Text>
        <TouchableOpacity hitSlop={{bottom: 50, top: 50, left: 50, right: 50 }}>
        <Image source={EditIcon} style={{alignSelf:'flex-end', width: 20, height: 20, marginBottom: 10}} />
        </TouchableOpacity>
        </View>
        <Text style={styles.taskDueDate}>{'Due: 01 Jan 2024'}</Text>
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