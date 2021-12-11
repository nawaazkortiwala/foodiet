import { Pool } from 'pg'

const pool = new Pool({
    user: 'pos-dev',
    database: 'foodiet',
    password: '1q2w3e4r5t6y',
    host: '139.59.84.5',
    port: 5432,
})

export default pool
