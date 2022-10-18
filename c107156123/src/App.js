import React, { Component } from "react";
import Message from "./Message";
import Borad from "./Board";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        {
          "id": 1,
          "nickname": "Huli",
          "body": "Welcome to the message board!",
          "createdAt": 1604125999135,
          "date": "2022/1/20"
        },
        {
          "id": 2,
          "nickname": "路人",
          "body": "有人在家嗎？測試 <script>alert(1)",
          "createdAt": 1604125999135,
          "date": "2022/7/28"
        },
        {
          "id": 3,
          "nickname": "Jerry",
          "body": "真酷的REACT!",
          "createdAt": 1661678243011,
          "date": "2022/6/28"
        },
        {
          "nickname": "Julia",
          "body": "Humans - Decision Errors - Irregularities",
          "createdAt": 1661678243016,
          "id": 4,
          "date": "2022/2/2"
        }
      ]
    }
  }

  handleAdd = (message) => {
    this.setState({
      messages: [
        ...this.state.messages,
        {
          nickname: "Jerry",
          id: this.state.messages.length + 1,
          body: message,
          createdAt: 1661678243011,
          date: new Date().getFullYear() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getDate(),
        }
      ]
    });
    alert("留言成功 !")
  }
  handleDelete = (id) => {
    const { messages } = this.state;
    const newMessage = messages.map((message) => {
      return message.id === id ? { ...message, delete: true } : { ...message, delete: false }
    });
    this.setState({
      messages: newMessage.filter((message) => {
        return message.delete === false
      })
    });
  };
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: 'linear-gradient(45deg,#8460ed,#ff1252)' }}>
        <div style={{ border: '1px solid grey', padding: 25, borderRadius: 10, boxShadow: '0 0 8px black', background: 'white' }}>
          <div style={{ color: 'grey', textAlign: 'center', fontSize: 32 }}>
            React 留言板
          </div>
          <div >
            <div style={{ fontSize: 20 }}>
              留言內容
            </div>
            <Message onAdd={this.handleAdd} />
          </div>
          <div>
            <div style={{ fontSize: 20, paddingLeft: 5, paddingTop: 10 }}>
              留言區
            </div>
            <div>
              {this.state.messages.map((message) => {
                return <Borad key={message.id} message={message} handleDelete={this.handleDelete} />
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
