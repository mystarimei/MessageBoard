import React, { useState } from "react";
export default function Todo() {
    const [todos, setTodos] = useState([{
        "id": 1,
        "nickname": "Huli",
        "body": "Welcome to the message board!",
        "createdAt": 1604125999135
    },
    {
        "id": 2,
        "nickname": "路人",
        "body": "有人在家嗎？測試 <script>alert(1)",
        "createdAt": 1604125999135
    },
    {
        "nickname": "Julia",
        "body": "Humans - Decision Errors - Irregularities",
        "createdAt": 1661678243016,
        "id": 3
    }]);

    const [value, setValue] = useState("");

    const handleAdd = () => {
        setTodos([{
            nickname: "Jerry",
            id: todos.length + 1,
            body: value,
            createdAt: 1661678243011,
        }, ...todos]);
        setValue("");
    }

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <div>
            <div>
                <input type='text' placeholder="請輸入待辦事項..." value={value} onChange={handleChange} />
                <button onClick={() => handleAdd()}>送出</button>
            </div>
            <div>
                {todos.map((todo) => {
                    const { nickname, body, createdAt } = todo
                    return (
                        <div>
                            <div>{nickname}</div>
                            <div>{body}</div>
                            <div>{createdAt}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}