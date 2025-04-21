import React, { useState } from 'react'
import styles from './Chatbot.module.css'
import OpenAI from 'openai'

export function ChatBot( { isVisible }) {
    const [input, setInput] = useState('')
    const [response, setResponse] = useState('')
    const [loading, setLoading] = useState(false)
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

        if (!input) return

        setLoading(true)

        try {
            const res = await openai.chat.completions.create({
                messages: [{ role: 'system', content: 'You are a helpful assistant.' }],
                model: 'deepseek-chat',
            })

            console.log(res.choices[0].message.content)
            // const res = await fetch('https://api.deepseek.com/chat/completions', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'Authorization': `Bearer ${apiKey}`,
            //     },
            //     body: JSON.stringify({
            //         model: 'deepseek-chat',
            //         messages: [
            //             { role: 'system', content: 'You are a helpful assistant.'},
            //             { role: 'user', content: input }
            //         ],
            //         stream: false
            //         // max_tokens: 150,
            //         // temperature: 0.7,
            //     }),
            // })

            // const data = await res.json()
            // setResponse(data.choices[0].message.content)
        } catch (err) {
            console.error('Error fetching response from API:', err)
            setResponse('Sorry, something went wrong.')
        } finally {
            await new Promise(resolve => setTimeout(resolve, 5000)); // Wait 5 seconds between requests
            setLoading(false)
            setResponse('')
        }
    }
    
    return (
        <div className={`${styles.container} ${isVisible ? styles.show : styles.hide}`}>
            <h1>Chat with Banana AI!</h1>
            <div className={styles.chat_box}>
                <div className={styles.chat_log}>
                    {response && <div className={styles.chat_response} >{response}</div>}
                    {loading && <div className={styles.loading}>Banana AI is thinking...</div>}
                </div>
                <form className={styles.user} onSubmit={handleSubmit}>
                    <textarea 
                        value={input}
                        onChange={handleInputChange}
                        placeholder='Ask Banana AI something...'
                        className={styles.input}
                    />
                    <button type='submit' className={styles.submit_btn} disabled={loading}>{loading ? 'Sending' : 'Send'}</button>
                </form>
            </div>
        </div>
    )

}