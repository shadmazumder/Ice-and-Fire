import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';

import ContainerList from "../components/ListComponent";
import BasicListItem from '../components/BasicListItem';

import { setCharacter } from '../actions/index';

class CharacterList extends React.Component {

    renderListItem = item => {
        return <BasicListItem 
                            item={item} 
                            title = {item.name}
                            subTitle = {`AKA: ${this.getTitle(item.titles)}`}
                            onPress={this.itemOnPress} 
                />;
    };

    getTitle(titles) {
        if (titles.length > 0) {
          return titles[0]
        }
        return ""
      }

    listItemKeyExtractor = item => {
        return item.url
    }

    itemOnPress = (item) => {
        this.props.navigation.navigate(this.props.navScreen, item);
        this.props.setCharacter(item);
    }

    render() {
        if (this.props.characters.length == 0) {
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
                    { textAlign: 'left' },
                    { textDecorationLine: 'none' },
                    { fontSize: 20 },
                ]}
                headerText={this.props.headline}
                items={this.props.characters}
                listItem={this.renderListItem}
                keyExtractor={this.listItemKeyExtractor}
            />
        );
    }
}

function mapToStateProps(state) {
    return {
        characters: state.characters
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setCharacter: setCharacter
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

export default connect(mapToStateProps, mapDispatchToProps)(CharacterList);