import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { viewTaskListStyles } from './view-tasklist.styles';
import { TaskListImage } from '../../../assets';
import { LabelsResource } from '../../../constants/labels-resource';
import { SwipeToDelete, TaskCard } from './components/task-card.component';
import { useNavigation } from '@react-navigation/native';
import { ROOT_NAVIGATOR_SCREENS } from '../../router.enum';
import { store } from '../../store/store';
import { ADD_TASK} from '../../store/action.types';
import {SwipeListView} from 'react-native-swipe-list-view';
import { PRIORITY_OBJECT } from './taskList.interface';
import { SelectList } from 'react-native-dropdown-select-list';


export const ViewTaskList = () => {
    const navigation = useNavigation();
    const styles = viewTaskListStyles;
    const taskList = useSelector(() => store.getState().taskList)
    const [sortByDate, setSortByDate] = useState(false);
    const [sortByPriority, setSortByPriority] = useState(false);
    const [sortingFlag, updateSortingFlag] = useState ({
        sortByDate : false,
        sortByPriority: false
    });


    useEffect(() => {
        getSortedData();
    }, [sortByDate, sortByPriority])

    const HeaderComponent = () => {
        return (
            <View style={styles.header}>     
            <Text style={styles.headerText}>{LabelsResource.TASKLIST_HEADER_USER}</Text>
            <Text style={[styles.headerText, {textAlign:'center'}]}>{LabelsResource.TASKLIST_HEADER_WELCOME_TEXT}</Text>        
            </View>
        )
    };

    const AddNewTaskButton = () => {
        return (          
             <TouchableOpacity style={styles.footer} onPress={() => navigation.navigate(ROOT_NAVIGATOR_SCREENS.ADD_EDIT_TASK, {task: {}, action: ADD_TASK})} >
                <Text style={styles.addNewTaskText}>{LabelsResource.TASKLIST_ADD_TASK_BUTTON}</Text>
            </TouchableOpacity>        
        )
    };

    const EmptyList = () => {
        return (
            <View style={styles.emptyListView}>
                <Image source={TaskListImage}/>
                <Text style={styles.emptyListText}>{LabelsResource.TASKLIST_NO_TASKS}</Text>
            </View>
        )
    }

    const getSortedData = () => {
     const tempList = taskList;
     const sortedData =   sortingFlag.sortByDate ?  tempList.sort((a, b) => new Date(b.dueDate) - new Date(a.dueDate)): 
     sortingFlag.sortByPriority ?  tempList.sort((a, b) => a.priority - b.priority)  : taskList;
     return sortedData;
    };

    return (
        <View style={styles.rootView}>
            {HeaderComponent()} 
            <View style={{flexDirection: 'row', alignSelf:'flex-end'}}>            
            <TouchableOpacity style={[sortingFlag.sortByDate ? styles.selectedButton: styles.sortButton]} onPress={() => updateSortingFlag({sortByDate: true, sortByPriority: false})}>
            <Text style={styles.sortText}>{'Sort by Date'}</Text> 
            </TouchableOpacity>   
            <TouchableOpacity style={[sortingFlag.sortByPriority ? styles.selectedButton: styles.sortButton]} onPress={() =>  updateSortingFlag({sortByDate: false, sortByPriority: true})}>
            <Text style={styles.sortText}>{'Sort by Priority'}</Text> 
            </TouchableOpacity>    
            </View>             
            <SwipeListView
             data={getSortedData()} 
             style={{marginBottom: 50}}
             renderItem={({item}) => <TaskCard task={item}/>}  
             ListEmptyComponent={() => EmptyList()}
             renderHiddenItem={ ({item}) => <SwipeToDelete id={item.id} />}
            leftOpenValue={75}
            disableRightSwipe
            rightOpenValue={-75}
             >
            </SwipeListView>          
            {AddNewTaskButton()}
        </View>
    )
}