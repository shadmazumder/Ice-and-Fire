import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { camelToNormalCase, renderListIfNecessary } from '../services';
import DetailListItem from '../components/DetailListItem';
import ContainerList from "../components/ListComponent";

export default class DetailComponent extends Component {

    renderListItem = item => {
        return <DetailListItem item={item} />;
    };

    listItemKeyExtractor = item => {
        return item.key
    }

    getItems(){
        let items = [];
        for (const [key, value] of Object.entries(this.props.values)) {

            if (this.getValidKey(key) && this.getValidValue(value)) {
                items.push(
                    {
                        'key': camelToNormalCase(key),
                        'value': Array.isArray(value) ? 
                                    renderListIfNecessary(value) : 
                                    JSON.stringify(value),
                    }
                )
            }
        }
        return items 
    }

    getValidKey(key){
        return (key != 'url' && key != 'swornMembers') ? 
                    camelToNormalCase(key) : null
    }

    getValidValue(value){
        if (Array.isArray(value)){
            return value.length > 0 ? renderListIfNecessary(value) : null
        }else if(value.length > 0){
            return JSON.stringify(value)
        }
        return null
    }

    render(){
        return(
            <ContainerList
                containerStyle={styles.container}
                headerStyle={[
                    styles.header,
                    { textAlign: 'left' },
                    { textDecorationLine: 'none' },
                    { fontSize: 20 },
                ]}
                headerText={this.props.values.name}
                items={this.getItems()}
                listItem={this.renderListItem}
                keyExtractor={this.listItemKeyExtractor}
            />
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 0,
        fontWeight: 'bold',
    }
});