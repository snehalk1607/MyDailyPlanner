/**
 * fileName: view-tasklist.styles.ts
 * description: Stylesheet for view tasklist screen
 */

import { StyleSheet } from "react-native"
import { ColorPalete } from "../../../constants/color-palete";

export const viewTaskListStyles =
    StyleSheet.create({
        rootView: {
            flex:1,
            backgroundColor: 'white',
        },
        header:{            
        backgroundColor: ColorPalete.BLUE,
        paddingTop: 8         
        },
        headerText:{
        fontSize: 18, 
        marginLeft: 15,
        marginBottom:12,
        color: ColorPalete.WHITE,
        fontWeight:'600'
        },
        footer:{
        bottom:30,
        left:12,
        right:12,
        position:'absolute',
        borderRadius: 8,
        backgroundColor:ColorPalete.ORANGE_BUTTON,
        alignItems:'center'
        },
        emptyListView:{
            alignItems:'center', 
            marginTop: '50%'           
        },
        emptyListText:{
            fontSize: 15,
            fontWeight: '500',
            paddingVertical: 12,
            color: ColorPalete.GREY
        }, 
        addNewTaskText:{
            fontSize: 18,
            color: ColorPalete.WHITE,
            fontWeight: '500',
            paddingVertical: 8
        },
        sortText:{
            fontSize: 16,
            padding: 7,
            color: ColorPalete.NAVY_BLUE,
            fontWeight: '500'    
        },
        sortButton:{
            marginVertical: 10,
            marginRight: 12,
            fontWeight: '500',
            borderRadius: 15,
            borderColor: ColorPalete.ORANGE_DARK,
            borderWidth: 1,
        },
        selectedButton:{
            backgroundColor: ColorPalete.SELECTION_COLOR,
            marginVertical: 10,
            marginRight: 12,
            fontWeight: '500',
            borderRadius: 15,
            borderColor: ColorPalete.NAVY_BLUE,
            borderWidth: 1
        }
    });