import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { CheckedCheckBox, UnCheckedCheckBox } from '../../../../assets';
import { ColorPalete } from '../../../../constants/color-palete';

export const CustomCheckBox = () => {
    const [checked, setChecked] = React.useState<boolean>(false);
    return (
        <TouchableOpacity style={{ flexDirection:'row', alignItems:'center'}} onPress={() => setChecked(!checked)}>
           <Image source={checked ? CheckedCheckBox : UnCheckedCheckBox} style={[checked ? {width: 30, height: 30, marginRight: 4}: {width: 23, height:30, marginRight: 4}]} resizeMode={'contain'}/>
           <Text style={{color: ColorPalete.GREEN, fontSize: 15, fontWeight:'500'}}>{checked ? 'Completed' : 'Mark as Complete'}</Text>
        </TouchableOpacity>
    )
}