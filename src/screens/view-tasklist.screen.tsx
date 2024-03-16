import React from 'react';
import { View, Text, Image, Button, TouchableOpacity } from 'react-native';
import { viewTaskListStyles } from './view-tasklist.styles';
import { TaskListImage } from '../../assets';
import { ColorPallete } from './constants/color-pallete';


export const ViewTaskList = () => {

    const HeaderComponent = () => {
        return (
            <View style={viewTaskListStyles.header}>
            <Text style={viewTaskListStyles.headerText}>{'Hello Marta,'}</Text>
            <Text style={[viewTaskListStyles.headerText, {textAlign:'center'}]}>{'Welcome to your planner!'}</Text>        
            </View>
        )
    };

    const AddNewTaskButton = () => {
        return (
             <View style={viewTaskListStyles.footer}>
               <Button title={'Add New Task'} onPress={() => ''} color={ColorPallete.WHITE}></Button>
            </View>
           
        )
    };

    const EmptyList = () => {
        return (
            <View style={viewTaskListStyles.emptyListView}>
                <Image source={TaskListImage} resizeMode='cover'/>
                <Text style={viewTaskListStyles.emptyListText}>{"Let's start planning.."}</Text>
            </View>
        )
    }
    
    return (
        <View style={viewTaskListStyles.rootView}>
            {HeaderComponent()}
            {EmptyList()}
            {AddNewTaskButton()}
        </View>
    )
}