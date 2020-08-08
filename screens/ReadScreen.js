import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class ReadScreen extends React.Component {
    render(){
        return(
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Text style={styles.text}>GET READY TO LISTEN TO YOUR STORY!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        color: "red",
        backgroundColor: "yellow",
        fontWeight: "bold",
        fontSize: 25,
    }
})