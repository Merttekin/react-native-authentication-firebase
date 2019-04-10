import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    const { subContainerStyle } = styles;
    return(
        <View style={subContainerStyle}>
            {props.children}
        </View>
    )
}

const styles = {
    subContainerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
}

export default CardSection;