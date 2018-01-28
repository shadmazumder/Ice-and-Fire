import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';

import { camelToNormalCase, renderListIfNecessary } from '../services';

export default class DetailComponent extends Component {

    renderItem() {
        let items = [];
        for (const [key, value] of Object.entries(this.props.values)) {
            if (value && key != 'url' && key != 'swornMembers') {
                items.push(
                    <View key={key} >
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
            <View>
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