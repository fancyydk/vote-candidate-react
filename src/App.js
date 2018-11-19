import React, { Component } from 'react';
import './App.css';
import Title from './Title/Title';
import Candidates from './Candidates/Candidates';
import Register from './Register/Register';
import Announcement from './Announcement/Announcement';

class App extends Component {
  static CANDIDATE_ID = 1;

  state = {
    title: '이곳을 클릭하여 제목을 수정하세요',
    isTitleEditMode: false,
    candidates: [],
    winMessage: '이곳에 당선 메시지를 입력하세요',
    isWinMessageEditMode: false,
    winner: null
  };

  titleClickedHandler = (editMode) => {
    this.setState({ isTitleEditMode: editMode });
  };

  titleChangedHandler = (event) => {
    this.setState({ title: event.target.value });
  };

  winMessageClickedHandler = (editMode) => {
    this.setState({ isWinMessageEditMode: editMode });
  };

  winMessageChangedHandler = (event) => {
    this.setState({ winMessage: event.target.value });
  };

  candidateAddedHandler = (name) => {
    const candidates = [...this.state.candidates];
    const candidate = {
      id: App.CANDIDATE_ID,
      name,
      count: 0
    };
    App.CANDIDATE_ID++;
    candidates.push(candidate);
    this.setState({ candidates });
  };

  candidateRemovedHandler = (id) => {
    const candidates = [...this.state.candidates];
    const candidateIndex = candidates.findIndex(c => c.id === id);
    candidates.splice(candidateIndex, 1);
    this.setState({ candidates });
  }

  tallyAddedHanlder = (id) => {
    const candidates = [...this.state.candidates];
    const candidateIndex = candidates.findIndex(c => c.id === id);
    candidates[candidateIndex].count++;
    this.setState({ candidates });
  };

  tallyRemovedHanlder = (id) => {
    const candidates = [...this.state.candidates];
    const candidateIndex = candidates.findIndex(c => c.id === id);
    if (candidates[candidateIndex].count > 0) {
      candidates[candidateIndex].count--;
    }
    this.setState({ candidates });
  };

  winnerSelectedHandler = (id) => {
    const winner = this.state.candidates.find(c => c.id === id);
    this.setState({ winner });
  };

  focusHandler = (event) => {
    event.target.select();
  };

  render() {
    return (
      <div className="App">
        <Title
          title={this.state.title}
          click={this.titleClickedHandler.bind(this, true)}
          change={this.titleChangedHandler}
          submit={this.titleClickedHandler.bind(this, false)}
          edit={this.state.isTitleEditMode}
          focus={this.focusHandler} />
        <Candidates
          candidates={this.state.candidates}
          increase={this.tallyAddedHanlder}
          decrease={this.tallyRemovedHanlder}
          remove={this.candidateRemovedHandler}
          select={this.winnerSelectedHandler} />
        <Register add={this.candidateAddedHandler} focus={this.focusHandler} />
        <Announcement winner={this.state.winner} />
      </div>
    );
  }
}

export default App;
