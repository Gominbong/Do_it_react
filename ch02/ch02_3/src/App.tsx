import {Component} from 'react'
import ClassComponent from './ClassComponent'
import ArrowComponent from './ArrowComponent'

export default class App extends Component {
  render() {
    return (
      <ul>
        <ClassComponent href="http://google.com" text="go to Google" />
        <ArrowComponent href="https://twitter.com" text="go to Twitter" />
      </ul>
    )
  }
}
