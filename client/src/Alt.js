import React, { Component } from 'react'
import { markdown } from 'markdown'

import mdFile from './test.md';

export default class test extends Component {
  constructor() {
    super()
    this.state = {
      mdData: ""
    }
  }

  componentDidMount() {
    this.convertMDtoHTML(mdFile)
  }

  convertMDtoHTML(markdownFile) {
    let html = "";
    let txt = "";
    fetch(mdFile)
      .then(res => res.text())
      .then(text => {
        txt = text
        html = markdown.toHTML(txt)
        console.log(html)
        this.setState({mdData: html})
      })
    return html
  }
  
  render() {
    return (
      <div>
        <h1>Alt Component</h1>
        <div dangerouslySetInnerHTML={{__html: this.state.mdData}}></div>
      </div>
    )
  }
}
