import {Provider} from 'mobx-react'
import rootStore from './RootStore';

const RootProvider = ({ children }) => {
  return <Provider {...rootStore}>{children}</Provider>
}; 

export default RootProvider