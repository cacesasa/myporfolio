import styles from './contact.module.css'
import { useState } from 'react'
import emailjs from '@emailjs/browser'


export default function Contact() {

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        emailjs.sendForm('service_pgtr20p', 'template_8w81ayt', event.target,'GFHeKllm8V9PmVa8S').then((result) => {
            console.log(result.text);
            alert('Message sent!')
            setForm({name: '', email: '', message: ''})
        }, (error) => {
            console.log(error.text);
        })
    }
    
    return (
        <>
            <section className={styles.contact} id="contact">
                <h2 className={styles.title}>Get In Touch</h2>
                <div className={styles.contactContainer}>
                    <form className={styles.form} onSubmit={handleSubmit}>                        
                        <input type="text" id="name" name="name" placeholder="Your name" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} />                        
                        <input type="email" id="email" name="email" placeholder="Your email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                        <textarea id="message" name="message" placeholder="Your message" required minLength="10"
                            value={form.message} onChange={e => setForm({...form, message: e.target.value})}>
                        </textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </section>
        </>
    )
}