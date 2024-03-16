import { StyleSheet } from "react-native"
import { ColorPallete } from "./constants/color-pallete";


export const viewTaskListStyles =
    StyleSheet.create({
        rootView: {
            flex:1,
            backgroundColor: 'white',
            marginHorizontal: 0
        },
        header:{            
        backgroundColor: ColorPallete.BLUE,           
        },
        headerText:{
        fontSize: 18, 
        margin: 10,
        color: ColorPallete.WHITE,
        fontWeight:'600'
        },
        footer:{
        bottom:6,
        left:12,
        right:12,
        position:'absolute',
        borderRadius: 8,
        backgroundColor:ColorPallete.ORANGE_BUTTON,
        alignItems:'center'
        },
        emptyListView:{
            alignItems:'center', 
            alignSelf:'center', 
            top: '30%'
        },
        emptyListText:{
            fontSize: 15,
            fontWeight: '500',
            paddingVertical: 12,
            color: ColorPallete.GREY
        }, 
        addNewTaskText:{
            fontSize: 18,
            color: ColorPallete.WHITE,
            fontWeight: '500',
            paddingVertical: 8
        }
        

    });