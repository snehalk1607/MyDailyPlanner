import { StyleSheet } from "react-native";
import { ColorPalete } from "../../../constants/color-palete";

export const TaskCardStyles = StyleSheet.create({
    cardRootView :{
        backgroundColor:'white',
        margin: 15,
        borderRadius: 12,
        shadowColor: ColorPalete.GREY,
        elevation: 15,
        flex:1,
        shadowRadius: 12,
        shadowOpacity: 0.4
    }, 
    cardContentView:{
        margin: 14
    }, 
    flex1: {flex:1},
    flexDirectionRow:{flexDirection: 'row'},
    taskTitle: {
        flex:1,
        color: ColorPalete.NAVY_BLUE,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
    },
    taskDueDate:{
        color: ColorPalete.ORANGE_DARK,
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 5
    },
    taskDescription:{
        color: ColorPalete.GREY_DARK,
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 5,
        lineHeight: 20
    },
    taskPriority:{
        color: ColorPalete.MEDIUM_PRIORITY,
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 5
    }


});