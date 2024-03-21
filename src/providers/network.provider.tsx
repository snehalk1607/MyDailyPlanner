import React from 'react';
import NetInfo, {NetInfoState} from '@react-native-community/netinfo';
import { Alert } from 'react-native';
import Toast from 'react-native-toast-message';

export const NetworkContext = React.createContext({isConnected: true});

export class NetworkProvider extends React.PureComponent<{}, {isConnected: boolean}> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isConnected: true
    };
  }

  componentDidMount() {
    NetInfo.addEventListener(state => this.handleConnectivityChange(state));
  }

  public handleConnectivityChange(state: NetInfoState) {
    state.isConnected ? this.setState({isConnected: true}) : this.setState({isConnected: false});
  }
        
  render() {
    return <NetworkContext.Provider value={this.state}>
      {!this.state.isConnected ?  Alert.alert(
        'Your seem to be offline!',
        'Please continue, transactions will sync once device is online.',
        [{ text: 'OK' }]
      ): null }
      {this.props.children}
      </NetworkContext.Provider>;
  }
}
