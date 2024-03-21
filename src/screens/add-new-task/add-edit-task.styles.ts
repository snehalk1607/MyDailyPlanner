/**
 * fileName: add-edit-task.styles.ts 
 * description: This file contains styles for add or edit task screen
 */
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
        }, 
        rootView:{
            flex:1,
            paddingVertical: 30, 
            paddingHorizontal: 15, 
            justifyContent:'center',
            backgroundColor: ColorPalete.WHITE
        },
        screenHeading:{
             justifyContent: 'center',
             fontSize: 20, 
             color: ColorPalete.ORANGE_DARK, 
             fontWeight: 'bold', 
             marginBottom: 18, 
             textAlign:'center', 
             marginLeft: 0,
             flex:0.9,          
            },
            textInput:{
                borderColor: ColorPalete.GREY_DARK,
                borderRadius: 6,
                borderWidth: 0.5,
                fontSize: 16,
                height: 45,
                paddingHorizontal: 5,
                marginBottom: 10,
                textAlignVertical: 'center'
            },
        backText:{
           fontSize: 18, color: ColorPalete.ORANGE_DARK, marginBottom: 18, alignSelf: 'flex-start'
        },
        errorText:{
            fontSize: 14, color: 'red', marginBottom: 12, marginLeft: 6
        }       
});