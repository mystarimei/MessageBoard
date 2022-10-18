import React, { Component } from "react";

export default class Message extends Component {
    constructor(props) {
        super(props)
        this.state = {
            textarea: "",
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    handleAdd = (e) => {
        e.preventDefault();
        const { onAdd } = this.props
        const { textarea } = this.state
        onAdd(textarea)
        this.setState({
            textarea: ""
        })

    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAdd}>
                    <textarea
                        name="textarea"
                        value={this.state.textarea}
                        placeholder="請輸入你想打得留言..."
                        onChange={this.handleChange}
                        style={{ width: 500, height: 100, fontSize :20}}
                        required
                    />
                    <div>
                        <button
                            onClick={() => this.handleAdd()}
                            style={{ width: 60, height: 35, background: 'grey', color: 'white', borderColor: 'transparent', borderRadius: '5px' }}
                        >
                            送出
                        </button>
                    </div>
                </form >
            </div >
        )
    }
}