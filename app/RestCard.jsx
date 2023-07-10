import { View, Image, Text, StyleSheet } from "react-native"



export default function RestCard({restaurant}) {
    
    return(
        
            <View style={styles.card}>
                <Image style={styles.image}
                    source={{
                        uri: restaurant.photo_url,
                        cache: 'force-cache',
                    }} />
                <Text style={styles.title}>{restaurant.name}</Text>
                <Text style={styles.rating}>
                    {
                        (restaurant.rating.length > 0)
                        ? '⭐️'.repeat(restaurant.rating)
                        :""
                    }
                </Text>
            </View>

    )
}


const styles = StyleSheet.create({
    image:{
        width: 300,
        height: 200,
        borderRadius: 6,
        borderColor: 'gray',
        borderStyle: 'solid',
        borderWidth: 3,
        alignItems: "center",
    },
    card:{
        padding: 8,
        margin: 8,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.51,
        
    },
    title: {
        color: '#203040',
        fontSize: 28,
        textAlign: 'center',
        fontWeight: 700,
        marginTop: 12,
    },

    rating: {
        textAlign: "center",
    }
})