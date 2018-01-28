import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';

import ContainerList from "../components/ListComponent";
import BasicListItem from '../components/BasicListItem';

import { getAllBooks } from '../actions/index';

class BookScreen extends React.Component {
    state = {
        headerTextAlign: 'center',
        headerText: 'The Books',
        headerTextDecoration: 'none',
        headerTextFontSize: 20
    };

    renderListItem = item => {
        return <BasicListItem item={item} onPress = {this.itemOnPress}/>;
    };

    itemOnPress = (item) => {
        console.log('pinged me !!!')
        console.log(item);

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
                    { textAlign: this.state.headerTextAlign },
                    { textDecorationLine: this.state.headerTextDecoration },
                    { fontSize: this.state.headerTextFontSize },
                ]}
                headerText={this.state.headerText}
                items={this.props.books}
                listItem={this.renderListItem}
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
        getAllBooks: getAllBooks
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