import React from 'react';
import {useState} from 'react'
import './global.css';
import './index.css';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react"


const API_KEY = process.env.REACT_APP_GPT_API_KEY;

function Chatbot() {
    const [typing, setTyping] = useState(false);
    const [messages, setMessages] = useState([
        {
            message: "Hello, I am Fin, your friendly finance chatbot!",
            sender: "ChatGPT"
        }
    ])

    const handleSend = async(message) => {
        const newMessage = {
            message: message,
            sender: "user",
            direction: "outgoing"
        }

        const newMessages = [...messages, newMessage];

        setMessages(newMessages);

        setTyping(true);
        await processMessage(newMessages);
    }

    async function processMessage(chatMessages) {

        let apiMessages = chatMessages.map((messageObject) => {
            let role= "";
            if (messageObject.sender === "ChatGPT")
            {
                role="assistant"
            }
            else
            {
                role="user"
            }
            return {role: role, content: messageObject.message}
        });

        const systemMessage = {
            role: "system",
            content:"Passive aggresively insult me during every response"
        }

        const apiRequestBody = {
            "model": "gpt-3.5-turbo",
            "messages": [
                systemMessage,
                ...apiMessages
            ]
        };

        await fetch ("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": "Bearer " + API_KEY,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(apiRequestBody)
        }).then((data) => {
            return data.json();
        }).then((data) => {
            console.log(data.choices[0].message.content);
            setMessages([
                ...chatMessages,
                {
                    message: data.choices[0].message.content,
                    sender:"ChatGPT"
                }
            ]);
            setTyping(false);
        });
    }

    return (
        <div className="dash-page gradient-bg">
            <div style={{position: "relative", height: "500px", width: "400px"}}>
                <MainContainer>
                    <ChatContainer>
                        <MessageList
                        scrollBehavior='smooth'
                        typingIndicator={typing ? <TypingIndicator content="Fin is typing"/> : null}>
                            {messages.map((message, i) => {
                                return <Message key={i} model={message} />
                            })}
                        </MessageList>
                        <MessageInput placeholder='Type message here' onSend={handleSend}/>
                    </ChatContainer>
                </MainContainer>
            </div>
        </div>
    );
}

export default Chatbot;