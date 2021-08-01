import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'
import styles from '@/styles/Form.module.css'

export default function AddEventPage() {
    const [values, setValues] = useState({
        name: '',
        performers: '',
        venue: '',
        address: '',
        date: '',
        time: '',
        description: ''
    })
    const rounter = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(values);
    }
    const handleInput = (e) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }
    return (
        <Layout title='Add New Event'>
            <Link href='/events'>Go Back</Link>
            <h1>Add Event</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.grid}>
                    <div>
                        <label htmlFor="name">Event Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={values.name}
                            onChange={handleInput} />
                    </div>
                    <div>
                        <label htmlFor="performers">Performers</label>
                        <input
                            type="text"
                            id="performers"
                            name="performers"
                            value={values.performers}
                            onChange={handleInput} />
                    </div>
                    <div>
                        <label htmlFor="venue">Venue</label>
                        <input
                            type="text"
                            id="venue"
                            name="venue"
                            value={values.venue}
                            onChange={handleInput} />
                    </div>
                    <div>
                        <label htmlFor="address">Address</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={values.address}
                            onChange={handleInput} />
                    </div>
                    <div>
                        <label htmlFor="date">Date</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={values.date}
                            onChange={handleInput} />
                    </div>
                    <div>
                        <label htmlFor="time">Time</label>
                        <input
                            type="text"
                            id="time"
                            name="time"
                            value={values.time}
                            onChange={handleInput} />
                    </div>
                </div>
                <input className="btn" type="submit" value="Add Event" />
            </form>
        </Layout>
    )
}
