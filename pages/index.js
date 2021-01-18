import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react';
import Question from '../components/question';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', json: {}};
    this.handleChange = this.handleChange.bind(this);
    this.getExam = this.getExam.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});

    const reader = new FileReader();
    reader.onload = async (e) => { 
      const text = (e.target.result);
      this.setState({json: JSON.parse(text)});
    };
    reader.readAsText(event.target.files[0]);
  }
  getExam() {
    const listItems = this.state.json["preguntas"]?.map((question) =>
      <Question question={question}/>
    );

    return (
      <ul>{listItems}</ul>
    )
  }
  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
        <input type="file" id="file-selector" value={this.state.value} onChange={this.handleChange} accept=".txt, .json"/> 
        <div>
          {this.getExam()}
        </div>
        </main>
      </div>
    )
  }
}

export default Home;
