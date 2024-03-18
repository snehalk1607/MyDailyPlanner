import { StyleSheet } from "react-native";
import { ColorPalete } from "../../../../constants/color-palete";

export const TaskCardStyles = StyleSheet.create({
    cardRootView :{
        backgroundColor:'white',
        margin: 15,
        borderRadius: 12,
        shadowColor: ColorPalete.GREY,
        elevation: 15,
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
        fontSize: 19,
        fontWeight: 'bold',
        marginBottom: 2
    },
    taskDueDate:{
        color: ColorPalete.ORANGE_DARK,
        fontSize: 15,
        fontWeight: '500',
        marginBottom: 4
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

export const SwipeViewStyles = StyleSheet.create({
    rootView:{
            backgroundColor:'white',
            opacity: 30,
            flex:1,
            margin: 15,
            alignItems:'flex-end',
            justifyContent:'center',
            borderRadius: 12,
            shadowColor: ColorPalete.GREY,
        },
        deleteText:{
            color:'red', fontWeight: 'bold', marginRight: 10}
    }
);