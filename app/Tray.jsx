import { View, Text, StyleSheet, TouchableOpacity } from "react-native" 

export default function Tray({ setSelectRestaurant }) {

    const choose = () => {
        const chosen = Math.random()
        setSelectRestaurant(chosen)
    }
     
    const clear = () => {
        setSelectRestaurant(0)
    }

    return (
        <View style={styles.tray}>
            <View style={styles.buttonList}>
                <TouchableOpacity onPress={choose} style={styles.button} >
                    <Text style={styles.buttonText}>🔀 Shuffle Now</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={clear} style={styles.resetButton} >
                    <Text style={styles.resetButtonText}>🔄 Reset</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonList:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: "space-evenly",
        
    },
    button:{
        backgroundColor: "#ed714d",
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 20,
        borderStyle: 'solid',
        borderColor: '#f79477'
        
    },

    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 800,
    },

    resetButton: {
        backgroundColor: 'snow',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 20,
        borderStyle: 'solid',
        borderWidth: 1,
        color: 'gray',
    },

    resetButtonText: {
        color: 'dimgray',
        fontSize: 20,
        fontWeight: 800,
    },


    tray: {
        width: '100%',
        height: 70,
        backgroundColor: '#e9eeff',
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 30,
        height: 120,
        paddingTop: 30,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: -7,
        },
        shadowOpacity: 0.08,
        shadowRadius: 9.51,
        elevation: 15,
    },
})