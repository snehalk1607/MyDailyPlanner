import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { viewTaskListStyles } from './view-tasklist.styles';
import { TaskListImage } from '../../../assets';
import { LabelsResource } from '../../../constants/labels-resource';
import { TaskCard } from './components/task-card.component';
import { useNavigation } from '@react-navigation/native';
import { ROOT_NAVIGATOR_SCREENS } from '../../router.enum';
import { store } from '../../store/store';


export const ViewTaskList = () => {
    const navigation = useNavigation();
    const [taskList, setTaskList] = useState([]);
    const list = useSelector(() => store.getState().taskList);

    useEffect(() => {
        setTaskList(list);
    },[list]);

    const HeaderComponent = () => {
        return (
            <View style={viewTaskListStyles.header}>     
            <Text style={viewTaskListStyles.headerText}>{LabelsResource.TASKLIST_HEADER_USER}</Text>
            <Text style={[viewTaskListStyles.headerText, {textAlign:'center'}]}>{LabelsResource.TASKLIST_HEADER_WELCOME_TEXT}</Text>        
            </View>
        )
    };

    const AddNewTaskButton = () => {
        return (
             <TouchableOpacity style={viewTaskListStyles.footer} onPress={() => navigation.navigate(ROOT_NAVIGATOR_SCREENS.ADD_EDIT_TASK)} >
                <Text style={viewTaskListStyles.addNewTaskText}>{LabelsResource.TASKLIST_ADD_TASK_BUTTON}</Text>
            </TouchableOpacity>
           
        )
    };

    const EmptyList = () => {
        return (
            <View style={viewTaskListStyles.emptyListView}>
                <Image source={TaskListImage}/>
                <Text style={viewTaskListStyles.emptyListText}>{LabelsResource.TASKLIST_NO_TASKS}</Text>
            </View>
        )
    }
    
    return (
        <View style={viewTaskListStyles.rootView}>
            {HeaderComponent()}          
            <FlatList data={taskList} renderItem={({item}) => <TaskCard task={item}/>}  ListEmptyComponent={() => EmptyList()}></FlatList>          
            {AddNewTaskButton()}
        </View>
    )
}