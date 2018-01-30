import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { camelToNormalCase, renderListIfNecessary } from '../services';
import DetailListItem from '../components/DetailListItem';
import ContainerList from "../components/ListComponent";

export default class DetailComponent extends Component {

    state = {
        headerTextAlign: 'left',
        headerTextDecoration: 'none',
        headerTextFontSize: 20
    };

    renderListItem = item => {
        return <DetailListItem item={item} />;
    };

    listItemKeyExtractor = item => {
        return item.key
    }

    converToItems(){
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
                    { textAlign: this.state.headerTextAlign },
                    { textDecorationLine: this.state.headerTextDecoration },
                    { fontSize: this.state.headerTextFontSize },
                ]}
                headerText={this.props.values.name}
                items={this.converToItems()}
                listItem={this.renderListItem}
                keyExtractor={this.listItemKeyExtractor}
            />
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    header: {
        flex: 0,
        marginTop: 8,
        fontWeight: 'bold',
    }
});