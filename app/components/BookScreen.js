import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import ContainerList from "./ListComponent";
import ConnectionManager from '../services/ConnectionManager';
import BasicListItem from './BasicListItem';
// from 'react-navigation'

export default class BookScreen extends React.Component {
    state = {

        items: [],
        headerTextAlign: 'center',
        headerText: 'The Books',
        headerTextDecoration: 'none',
        headerTextFontSize: 20
    };

    updateItems = items => {

        this.setState ({items: items});
    };

    renderListItem = item => {

        return <BasicListItem item={item} onPress = {this.itemOnPress} />;
    };

    itemOnPress(item){
        
        this.props.navigation.navigate('DetailsScreen', item);
    }

    componentDidMount () {

        let connectionManger = new ConnectionManager ();
        connectionManger.updateItems = this.updateItems;
        connectionManger.getAllBooks();
    }

    render() {
        return (
            <ContainerList
                containerStyle={styles.container}
                headerStyle={[
                    styles.header,
                    {textAlign: this.state.headerTextAlign},
                    {textDecorationLine: this.state.headerTextDecoration},
                    {fontSize: this.state.headerTextFontSize},
                ]}
                headerText={this.state.headerText}
                items={this.state.items}
                listItem={this.renderListItem}
            />
        );
    }
}

const styles = StyleSheet.create ({
    container: {
      flex: 1,
      marginTop: 20,
    },
    header: {
      flex: 0,
      marginTop: 8,
      fontWeight: 'bold',
    },
  });