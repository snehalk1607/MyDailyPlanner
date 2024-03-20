/**
 * fileName: checkbox.component.tsx
 * description: This file returns checkbox with text to be displayed on list tasks screen
 */

import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import {useDispatch} from 'react-redux';

import { CheckedCheckBox, UnCheckedCheckBox } from '../../../../assets';
import { ColorPalete } from '../../../../constants/color-palete';
import { MARK_TASK_COMPLETE } from '../../../store/action.types';
import { LabelsResource } from '../../../../constants/labels-resource';
import { Task } from '../../../services/task.types';


/**
 * @export
 * @function CustomCheckBox
 * @description It returns checkbox with label
 */
type Props = Pick<Task, 'id' | 'isComplete'>;

export const CustomCheckBox = (props: Props): React.ReactElement => {
    const {id, isComplete} = props;
    const dispatch = useDispatch();
    return (
        <TouchableOpacity style={{ flexDirection:'row', alignItems:'center'}} onPress={() => dispatch({ type: MARK_TASK_COMPLETE, payload: {id, isComplete}})}>
           <Image source={isComplete ? CheckedCheckBox : UnCheckedCheckBox} style={[isComplete ? {width: 30, height: 30, marginRight: 4}: {width: 23, height:30, marginRight: 4}]} resizeMode={'contain'}/>
           <Text style={{color: ColorPalete.GREEN, fontSize: 15, fontWeight:'500'}}>{isComplete ? LabelsResource.TASKLIST_VIEW_TASKS_LIST_COMPLETE : LabelsResource.TASKLIST_VIEW_TASKS_LIST_INCOMPLETE}</Text>
        </TouchableOpacity>
    );
};