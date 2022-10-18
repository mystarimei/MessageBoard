import React from "react";
export default function Borad(props) {
    const { nickname, body, createdAt, id, date } = props.message
    const { handleDelete } = props;
    return (
        <div style={{ display: 'flex', flexDirection: 'column', border: "1px solid grey", borderRadius: 5, padding: 5, margin: 5, width: 500, height: 80, marginTop: 10, justifyContent: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <div>
                    <span>{nickname}－</span>
                    <span>{createdAt}</span>
                </div>
                <div>
                    <span style={{ color: 'grey' }}>{date}</span>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingTop: '10px' }}>
                <div>{body}</div>
                <div>
                    {createdAt === 1661678243011 ? <button onClick={() => handleDelete(id)}
                        style={{ width: 60, height: 35, background: 'red', color: 'white', borderColor: 'transparent', borderRadius: '5px' }}
                    >刪除
                    </button> : ''}
                </div>
            </div>
        </div>
    )
}