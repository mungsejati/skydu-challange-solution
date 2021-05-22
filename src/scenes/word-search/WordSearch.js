import React, { Component } from "react";
import {WordSearchContainer} from "./WordSearch.styled";
import Layout from "../../components/Layout";

export default class WordSearch extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      words: ['kamu', 'adalah', 'anak', 'gembala', 'selalu', 'riang', 'serta', 'gembira'],
      time: 0,
      showWordIndex: 0,
    }
  }

  startTime() {
    const interval = setInterval(() => {
      this.setState({
        time: this.state.time + 0.01
      });
      if(this.state.words.length === 0) {
        clearInterval(interval)
      }
    }, 10)
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  convertToTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = (time % 60).toFixed(2) ;
    return `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`
  }

  deleteWord(index) {
    if(this.state.time === 0) {
      this.startTime();
    }
    if(index === this.state.showWordIndex) {
      let deletedWords = this.state.words;
      deletedWords.splice(index, 1);
      this.setState({
        words: deletedWords,
        showWordIndex: this.getRandomInt(deletedWords.length - 1)
      })
    }
  }

  componentDidMount() {
    this.setState({
      showWordIndex: this.getRandomInt(this.state.words.length - 1)
    })
  }

  render() {
    return (
      <Layout>
        <WordSearchContainer>
          <h1>Cari Kata</h1>
          <h4>{this.convertToTime(this.state.time)}</h4>
          <div>
            <div>{
              this.state.words.length
                ? this.state.words[this.state.showWordIndex]
                : "Selamat Anda Menang!"
            }</div>
          </div>
          <ul>
            {this.state.words.map( (word, index) => (
              <li key={index} onClick={() => this.deleteWord(index)}>{word}</li>
            ) )}
          </ul>
        </WordSearchContainer>
      </Layout>
    )
  }
}