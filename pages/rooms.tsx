import React from 'react'
import { Header } from '../components/Header'
import { Button } from '../components/Button'
import { ConversationCard } from '../components/ConversationCard'
import Link from 'next/link'
import Axios from '../core/axios'

const RoomsPages = ({ rooms = [] }) => {
    return (
        <>
            <Header />
            <div className='container'>
                <div className='mt-20 mb-30 d-flex align-items-center justify-content-between media'>
                    <h1>All conversations</h1>
                    <Button color='green'>
                        + Start room
                    </Button>
                </div>
                <div className='grid'>
                    {
                        rooms.map((obj) => (
                            <Link key={ obj.id } href={`/rooms/${obj.id}`} passHref>
                                <div>
                                    <a>
                                        <ConversationCard
                                            title={ obj.title }
                                            avatars={ obj.avatars }
                                            guests={ obj.guests }
                                            guestsCount={ obj.guestsCount }
                                            speakersCount={ obj.speakersCount }
                                        />
                                    </a>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default RoomsPages

export const getServerSideProps = async () => {
    try {
        const { data } = await Axios.get('/rooms.json')
        return {
            props: {
                rooms: data
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