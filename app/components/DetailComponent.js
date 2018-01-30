import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';

import { camelToNormalCase, renderListIfNecessary } from '../services';

export default class DetailComponent extends Component {

    checkIfShouldRender(key, value) {
        if (key == 'url' || key == 'swornMembers') {
            return false
        }
        if (value && Array.isArray(value) && value.length > 0) {
            if (value.length > 1 || value[0].length > 0) {
                return true
            }
            return false 
        }
        if (value) {
            return true
        }
        return false
    }

    renderItem() {
        let items = [];
        for (const [key, value] of Object.entries(this.props.values)) {
            if (this.checkIfShouldRender(key, value)) {
                items.push(
                    <View key={key}>
                        <Text style={styles.detailsKeyLabel}>
                            {camelToNormalCase(key)}
                        </Text>
                        <Text style={styles.detailsValueLabel}>
                            {renderListIfNecessary(value)}
                        </Text>
                    </ View>
                )
            }
        }
        return items
    }

    render() {
        let items = this.renderItem();
        return (
            <View >
                <Text h4 style={styles.titleLabel}>
                    {this.props.title}
                </Text>
                {items}
            </View>
        );
    }

}
const styles = StyleSheet.create({
    titleLabel: {
        fontWeight: 'bold',
        fontSize: 22,
    },
    detailsKeyLabel: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    detailsValueLabel: {
        fontSize: 16,
    },
});