import React from 'react';
import NetInfo, {NetInfoState} from '@react-native-community/netinfo';
import { Alert, AlertStatic } from 'react-native';
import { AlertType } from 'react-native';

export const NetworkContext = React.createContext({isConnected: true});

export class NetworkProvider extends React.PureComponent<{children: any }, {isConnected: boolean}> {
  constructor(props: { children: any; } | Readonly<{ children: any; }>) {
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
      {!this.state.isConnected &&  Alert.alert(
        'Your seem offline!',
        'Please continue, tasks will sync once device is online.',
        [{ text: 'OK' }]
      )}
      {this.props.children}
      </NetworkContext.Provider>;
  }
}
