import { StyleSheet } from "react-native";
import { ColorPalete } from "../../../../constants/color-palete";

const uniformFontSize = 16; 
export const FormComponentsStyles = StyleSheet.create({
    textInputLabel:{
        fontSize: 17,
        color: ColorPalete.NAVY_BLUE,
        marginTop: 4,
        marginBottom: 5,
        fontWeight: 'bold', 
        marginLeft: 2
    }, 
    textInput:{
        borderColor: ColorPalete.GREY_DARK,
        borderRadius: 6,
        borderWidth: 0.5,
        fontSize: uniformFontSize,
        height: 45,
        paddingHorizontal: 5,
        marginBottom: 14,
        textAlignVertical: 'center',
        color: ColorPalete.GREY_DARK
    }, 
    dropDownList:{
        fontSize: uniformFontSize
    },
    submitButton:{
            bottom:6,
            left:12,
            right:12,
            position:'absolute',
            borderRadius: 8,
            backgroundColor:ColorPalete.ORANGE_BUTTON,
            alignItems:'center'
            }
    
});