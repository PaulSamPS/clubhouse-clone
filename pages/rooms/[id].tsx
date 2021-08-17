import { Header } from '../../components/Header'
import { BackButton } from '../../components/BackButton'
import { Room } from '../../components/Room'
import Axios from '../../core/axios'
import Link from 'next/link'

const RoomPage = ({ room }) => {
    return (
        <>
            <Header />
            <div className='mt-20 container'>
                <Link href='/rooms' passHref>
                    <BackButton title='All rooms' href='/'/>
                </Link>
                <Room title={ room.title }/>
            </div>
        </>
    )
}

export default RoomPage

export const getServerSideProps = async (ctx) => {
    try {
        const { data } = await Axios.get('/rooms.json')
        const roomId = ctx.query.id
        const room = data.find((obj) => obj.id === roomId)
        return {
            props: {
                room
            }
        }
    } catch (error) {
        return {
            props: {
                rooms: []
            }
        }
    }
}