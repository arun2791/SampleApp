import React, {Component} from 'react';
import { View } from 'react-native';
import TransparentButton from '../TransparentButton';
import { connect } from 'react-redux';
import * as loginActions from 'app/actions/loginActions';
import styles from './styles';
class Logout extends Component{
    render(){
        return(
            <View style={styles.logoutView}>
                <TransparentButton
                    text={'Logout'}
                    isSelected={true}
                    onPress={this.logout}/>
            </View>
        );
    }

    logout = () => {
        this.props.logout();
    }
}

function mapDispatchToProps(dispatch) {
    return {
        logout:()=> {dispatch(loginActions.signout())},
    }
}
export default connect(
    null,
    mapDispatchToProps
)(Logout);