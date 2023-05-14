import * as Native from 'react-native';

const Style = Native.StyleSheet.create({
    Heading : {
        fontSize: 30,
    },
    Credits :{
        fontSize: 15,
    },
    Container : {
        flex:1,
    },
    topView: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
        middleView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
        bottomView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
})

export default Style;