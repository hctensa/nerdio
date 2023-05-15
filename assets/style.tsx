import * as Native from 'react-native';

const Style = Native.StyleSheet.create({
    Heading : {
        fontSize: 40,
    },
    Subheading: {
        fontSize: 20,
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
    HandInButton:{
        backgroundColor: '#8A2BE2', // Purple color
        borderRadius: 25, // Round shape with radius
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 20,
        marginBottom: -30,
    },
    HandInButtonText:{
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    LevelButtonView: {
        flexDirection: 'row',
    },
    LevelButtonEasy: {
        marginBottom: 20,
        marginHorizontal: 10,
        marginVertical: 10,
        backgroundColor: 'green', // Purple color
        borderRadius: 25, // Round shape with radius
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    LevelButtonMedium: {
        marginBottom: 20,
        marginHorizontal: 10,
        marginVertical: 10,
        backgroundColor: 'orange', // Purple color
        borderRadius: 25, // Round shape with radius
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    LevelButtonHard: {
        marginBottom: 20,
        marginHorizontal: 10,
        marginVertical: 10,
        backgroundColor: 'red', // Purple color
        borderRadius: 25, // Round shape with radius
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    LevelButtonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
    QuestionBackgroundImage: {
        flex:1,
        width:280,
        height:270,
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex:9,
    },
    ScoreCounter:{
        fontSize:40,
        color:'purple',
    },
    Countdown: {
        fontSize: 20
    },
    Question:{
        fontSize:25,
        zIndex:10,
        color: 'purple',
    },
    AnswerBox:{
        backgroundColor: '#EDEDED',
        marginTop: 30,
        borderRadius: 10,
        padding: 10,
        fontSize: 16,
        alignItems: 'center',
    },
    Answer:{
        fontSize: 30,
        marginTop: 20,
    },
    NumpadContainer: {
        flex:0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#A134F6'
    },
    NumpadTutorial: {
        color: 'yellow',
        fontSize: 23,
        margin: 10
    },
    Numpad: {
        backgroundColor: '#D5D716',
        marginBottom:4,
        marginHorizontal: 10,
        borderRadius: 25, // Round shape with radius
        paddingVertical: 10,
        paddingHorizontal: 30,
    },
    NumpadText: {
        color: 'purple',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    NumpadRow: {
        flex:0,
        flexDirection: 'row',
    }
})

export default Style;