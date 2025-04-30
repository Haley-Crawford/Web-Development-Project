import React, { useEffect, useState } from 'react'
import styles from './Chatbot.module.css'
import OpenAI from 'openai'
import { BotMessageSquare as Bot } from 'lucide-react'
import ReactMarkdown from 'react-markdown'

function ThinkingBubble() {
    return (
      <div className={styles.bubble_wrapper}>
        <div className={styles.bubble}>
          <div className={styles.dots}>
            <span className={styles.dot}>.</span>
            <span className={styles.dot}>.</span>
            <span className={styles.dot}>.</span>
          </div>
        </div>
      </div>
    );
  }

export function ChatBot( { isVisible }) {
    const [messages, setMessages] = useState([
        {
            id: '1',
            text: 'Hello! I am your Banana AI assistant!',
            sender: 'bot',
            timestamp: new Date(),
        }
    ])
    const [input, setInput] = useState('')
    const [isThinking, setIsThinking] = useState(false)
    const [isTyping, setIsTyping] = useState(false)
    const [response, setResponse] = useState('')
    const apiKey = process.env.REACT_APP_DEEPSEEK_KEY

    const openai = new OpenAI({
        baseURL: 'https://api.deepseek.com',
        apiKey: `${apiKey}`,
        dangerouslyAllowBrowser: true
    })

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!input.trim()) return

        const userMsg = {
            id: Date.now.toString(),
            text: input,
            sender: 'user',
            timestamp: new Date(),
        }

        setMessages((prev) => [...prev, userMsg])
        setInput('')
        setIsTyping(true)

        try {
            const apiMessages = messages
            .concat(userMsg)
            .map((msg) => {
              if ('sender' in msg) {
                return {
                  role: msg.sender === 'user' ? 'user' : 'assistant',
                  content: msg.text,
                }
              } else {
                return {
                  role: msg.role,
                  content: msg.content,
                };
              }
            })

            const res = await fetch('http://127.0.0.1:11434/api/chat', { //openai.chat.completions.create({
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    model: 'deepseek-r1:1.5b',
                    messages: apiMessages,
                    stream: true,
                    prompt: "Please think of all of your music knowledge. Please provide the user with clear recommendations at the end of the interaction.\
                    For clarification, ask follow up questions from this question set and use that for your final recommendations\
                    Question Set: \
                    {Genre: What genre of music do you enjoy listening to? (e.g., pop, rock, country, etc.),\
                    Artist: What artist(s) do you frequent the most?\
                    Language: What language do you prefer to listen to? (e.g., Spanish, French, English) This will help identify cultural factors or musical niches.}.",
                  }),
                // messages: [{ role: 'system', content: 'You are a helpful assistant.' }],
                // model: 'deepseek-chat',
            })

            if (!res.body) {
                throw new Error('Response body is null!')
            }

            const reader = response.body.getReader()
            const decoder = new TextDecoder('utf-8')
            let done = false
            let messageContent = ''
            let reasoningContent = ''

            while (!done) {
                const { value, done } = await reader.read()
                //done = doneReading

                if (value) {
                    const chunkContent = decoder.decode(value, { stream: true })
                    try {
                        const data = JSON.parse(`[${chunkContent.replace(/}{/g, '},{')}]`)
                        messageContent += data.map((d) => d.message?.content || '').join('')

                        if (chunkContent.includes('<think>')) {
                            setIsThinking(true)
                            reasoningContent += chunkContent.substring(chunkContent.indexOf('<think>') + 7)
                        }
                        if (chunkContent.includes('</think>')) {
                            setIsThinking(false)
                            reasoningContent += chunkContent.substring(0, chunkContent.indexOf('</think>'))
                        }
                        if (isThinking && !chunkContent.includes('<think>') && !chunkContent.includes('</think>')) {
                            reasoningContent += chunkContent
                        }
                    } catch (e) {
                        console.error('Error parsing JSON chunk:', e, chunkContent);
                    }
                }
            }

            const assistantMessage = {
                role: 'assistant',
                content: messageContent.replace(/<think>.*?<\/think>/gs, '').trim(),
                reasoning: reasoningContent.trim(),
            }

            setMessages((prev) => [...prev, assistantMessage])
            } catch (error) {
                console.error('Error streaming response:', error)
            } finally {
                setIsTyping(false);
            }
        }

    useEffect(() => {
        const bot = document.getElementById('bot')
        isVisible ? bot.style.zIndex = '' : (
            setTimeout(() => {
                bot.style.zIndex = '-1'
            }, 1000))            
    }, [isVisible])
    
    return (
        <div className={`${styles.container} ${isVisible ? styles.show : styles.hide}`} id='bot'>
            <div className={styles.header}>
                <h1 className={styles.heading}>Chat with Banana AI!</h1>
            </div>
            <div className={styles.chat_box}>
                <div className={styles.chat_log}>
                    {messages.map((msg, index) => (
                        <>
                            <div
                                className={`${styles.message_wrapper} ${
                                    'sender' in msg && msg.sender === 'user'
                                    ? styles.justify_end
                                    : styles.justify_start
                                }`}
                            >
                                <div
                                    className={`${styles.message} ${
                                        'sender' in msg && msg.sender === 'user'
                                        ? styles.user_msg
                                        : styles.bot_msg
                                    }`}
                                >
                                    {'sender' in msg && msg.sender === 'bot' && (
                                        <div className={styles.bot_header}>
                                            <Bot size={30} />
                                            <span>
                                                {('text' in msg && <p>{msg.text}</p>) ||
                                                ('content' in msg && <ReactMarkdown>{msg.content}</ReactMarkdown>)}
                                            </span>
                                        </div>
                                    )}

                                    {'role' in msg &&
                                        msg.role === 'assistant' &&
                                        msg.reasoning && (
                                        <div className={styles.reasoning}>
                                            <p>Reasoning: {msg.reasoning}</p>
                                        </div>
                                    )}

                                    {'timestamp' in msg && (
                                        <span className={styles.timestamp}>
                                        {msg.timestamp?.toLocaleTimeString()}
                                        </span>
                                    )}   
                                </div>
                            </div>
                            {index === messages.length - 1 && isTyping && <ThinkingBubble />}
                        </>
                    ))}
                    {/* {response && <div className={styles.chat_response} >{response}</div>}
                    {loading && <div className={styles.loading}>Banana AI is thinking...</div>} */}
                </div>
                <form className={styles.user} onSubmit={handleSubmit}>
                    <textarea 
                        value={input}
                        onChange={handleInputChange}
                        placeholder='Ask Banana AI something...'
                        className={styles.input}
                    />
                    <button type='submit' className={styles.submit_btn} disabled={isThinking}>{isThinking ? 'Sent' : 'Send'}</button>
                </form>
            </div>
        </div>
    )

}