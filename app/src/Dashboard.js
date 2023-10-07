import React from 'react';
import {useState} from 'react'
import './global.css';
import './index.css';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react"

function Dashboard() {
    const [messages, setMessages] = useState([
        {
            message: "Hello, I am Fin, your chatbot!",
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
        
    }

    return (
        <div className="dash-page">
            <div style={{position: "relative", height: "500px", width: "400px"}}>
                <MainContainer>
                    <ChatContainer>
                        <MessageList>
                            {messages.map((message, i) => {
                                return <Message key={i} model={message} />
                            })}
                        </MessageList>
                        <MessageInput placeholder='Type message here' onSend={handleSend}/>
                    </ChatContainer>
                </MainContainer>
            </div>
            <div className="frame">
                <div className="frame1">
                    <div className="app-name">App Name</div>
                    <img className="configuration-edit-gear-option-icon" alt="" src="%PUBLIC_URL%/1904675-configuration-edit-gear-options-preferences-icon-1.svg" />
                </div>
                <div className="frame2">

    <div className="user-data-div">User Data</div>
    <div className="chart-div">Chart</div>
    <div className="spending">Spending</div>

    <div className="chart-header">
        <div className="frame-parent">
            <div className="frame3">
                <div className="legend-7">
                    <div className="shape"></div>
                    <div className="label">Customer Experience</div>
                </div>
                <div className="label1">3.7 / 5</div>
            </div>
            <div className="rectangle-wrapper">
                <div className="frame-inner"></div>
            </div>
        </div>
        
        <div className="frame4">
            <b className="chart-header1">Chart Header</b>
            <div className="frame-group">
                <div className="frame5">
                    <div className="legend-5">
                        <div className="shape1"></div>
                        <div className="label2">Deliverable</div>
                    </div>
                    <div className="label1">2.5 / 5</div>
                </div>
                <div className="rectangle-wrapper">
                    <div className="rectangle-div"></div>
                </div>
            </div>

            <div className="frame-container">
                <div className="frame3">
                    <div className="legend-3">
                        <div className="shape2"></div>
                        <div className="label4">Delivery Culture</div>
                    </div>
                    <div className="div">4/5</div>
                </div>
                <div className="rectangle-wrapper">
                    <div className="frame-child1"></div>
                </div>
            </div>

            <div className="frame-div">
                <div className="frame3">
                    <div className="legend-31">
                        <div className="shape2"></div>
                        <div className="label5">Infrastructure</div>
                    </div>
                    <div className="div">1/5</div>
                </div>
                <div className="rectangle-wrapper">
                    <div className="frame-child2"></div>
                </div>
            </div>

            <div className="frame-parent1">
                <div className="frame3">
                    <div className="legend-32">
                        <div className="shape2"></div>
                        <div className="label6">Value Adds</div>
                    </div>
                    <div className="div">2/5</div>
                </div>
                <div className="rectangle-wrapper">
                    <div className="frame-child3"></div>
                </div>
            </div>
        </div>
    </div>

    <div className="csp-score">
        <div className="frame9">
            <div className="container"></div>
        </div>
        <div className="frame10">
            <div className="frame11">
                <b className="chart-header2">October 2023</b>
            </div>
            <div className="frame12">
                <div className="ellipse-parent">
                    <div className="ellipse-div"></div>
                    <div className="frame-child4"></div>
                    <div className="frame-child5"></div>
                    <div className="label7">28</div>
                    <div className="label8">Oct</div>
                </div>
                <div className="frame13">
                    <div className="frame-parent2">
                        <div className="frame14">
                            <div className="label-parent">
                                <div className="label9">Food</div>
                                <div className="shape-parent">
                                    <div className="shape5"></div>
                                    <div className="label10">70%</div>
                                </div>
                            </div>
                            <div className="label-group">
                                <div className="label11">Bills</div>
                                <div className="shape-group">
                                    <div className="shape6"></div>
                                    <div className="label10">20%</div>
                                </div>
                            </div>
                        </div>
                        <div className="label-container">
                            <div className="label13">Fun</div>
                            <div className="shape-container">
                                <div className="shape7"></div>
                                <div className="label10">10%</div>
                            </div>
                        </div>
                    </div>
                    <div className="label14">$5,000</div>
                </div>
            </div>
        </div>
    </div>
</div>

            </div>
            <div className="frame15">
                <div className="frame16">
                    <div className="frame17">
                        <div className="welcome-anthony">Welcome Anthony.</div>
                    </div>
                    <div className="frame18">
                        <img className="rectangle-icon" alt="" src="%PUBLIC_URL%/rectangle-13.svg" />
                        <div className="financial-literacy-tips">Financial Literacy Tips</div>
                    </div>
                </div>
                <div className="frame19">
                    <img className="frame-child6" alt="" src="%PUBLIC_URL%/rectangle-12.svg" />
                    <div className="ai-chatbot">AI Chatbot</div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
