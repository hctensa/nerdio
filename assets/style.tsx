import * as Native from 'react-native';

const Style = Native.StyleSheet.create({
    Heading : {
        fontSize: 30,
    },
    Credits :{
        fontSize: 17,
        fontWeight: 'bold',
        margin:20,
        color: 'purple',
        textShadowColor: 'yellow',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
    },
    Container : {
        flex:1,
    },
    TopView: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    MiddleView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    BottomView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    BackgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    Logo: {
        marginTop: 100,
        width: 200,
        resizeMode: 'contain',
    },
    PlayButton: {
        backgroundColor: '#A134F6',
        padding: 15,
        borderRadius: 10,
    },
    PlayButtonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
    LevelButton: {

    },
    LevelButtonText: {

    }
})

export default Style;