import { StyleSheet } from "react-native";
import { ColorPalete } from "../../../constants/color-palete";

export const AddOrEditTaskStyles = StyleSheet.create({
    footer:{
        bottom:6,
        left:12,
        right:12,
        position:'absolute',
        borderRadius: 8,
        backgroundColor:ColorPalete.ORANGE_BUTTON,
        alignItems:'center'
        },
        addNewTaskText:{
            fontSize: 18,
            color: ColorPalete.WHITE,
            fontWeight: '500',
            paddingVertical: 8
        }
})