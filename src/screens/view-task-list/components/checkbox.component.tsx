import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import { CheckedCheckBox, UnCheckedCheckBox } from '../../../../assets';
import { ColorPalete } from '../../../../constants/color-palete';
import { MARK_TASK_COMPLETE } from '../../../store/action.types';
import {useDispatch} from 'react-redux';
import { LabelsResource } from '../../../../constants/labels-resource';

export const CustomCheckBox = (props) => {
    const {id, isComplete} = props;
    const dispatch = useDispatch();
    return (
        <TouchableOpacity style={{ flexDirection:'row', alignItems:'center'}} onPress={() => dispatch({ type: MARK_TASK_COMPLETE, payload: {id, isComplete}})}>
           <Image source={isComplete ? CheckedCheckBox : UnCheckedCheckBox} style={[isComplete ? {width: 30, height: 30, marginRight: 4}: {width: 23, height:30, marginRight: 4}]} resizeMode={'contain'}/>
           <Text style={{color: ColorPalete.GREEN, fontSize: 15, fontWeight:'500'}}>{isComplete ? LabelsResource.TASKLIST_VIEW_TASKS_LIST_COMPLETE : LabelsResource.TASKLIST_VIEW_TASKS_LIST_INCOMPLETE}</Text>
        </TouchableOpacity>
    )
}