import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';

import ContainerList from "../components/ListComponent";
import BasicListItem from '../components/BasicListItem';

import { getAllBooks, setBook } from '../actions/index';

class BookScreen extends React.Component {

    renderListItem = item => {
        return <BasicListItem 
                            item={item} 
                            title = {item.name}
                            subTitle = {`${item.publisher}, ${item.country}`}
                            onPress={this.itemOnPress} 
                />;
    };

    listItemKeyExtractor = item => {
        return item.url
    }

    itemOnPress = (item) => {
        this.props.setBook(item)
        this.props.navigation.navigate('BookDetails', item);
    }

    componentDidMount() {
        this.props.getAllBooks();
    }

    render() {
        if (this.props.books.length == 0) {
            return (
                <Spinner
                    visible={true}
                    textContent={"Loading..."}
                    textStyle={{ color: '#FFF' }}
                />
            )
        }

        return (
            <ContainerList
                containerStyle={styles.container}
                headerStyle={[
                    styles.header,
                    { textAlign: 'center' },
                    { textDecorationLine: 'none' },
                    { fontSize: 20 },
                ]}
                headerText={'The Books'}
                items={this.props.books}
                listItem={this.renderListItem}
                keyExtractor={this.listItemKeyExtractor}
            />
        );
    }
}

function mapToStateProps(state) {
    return {
        books: state.books
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getAllBooks: getAllBooks,
        setBook: setBook
    }, dispatch);
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

export default connect(mapToStateProps, mapDispatchToProps)(BookScreen);