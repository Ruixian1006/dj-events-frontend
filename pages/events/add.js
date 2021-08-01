import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/Link'
import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'
import styles from '@/styles/Form.module.css'

export default function AddEventPage() {
    return (
        <Layout title='Add New Event'>
            <h1>Add Event</h1>
        </Layout>
    )
}
