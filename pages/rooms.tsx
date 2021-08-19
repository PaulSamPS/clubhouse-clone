import React from 'react'
import { Header } from '../components/Header'
import { Button } from '../components/Button'
import { ConversationCard } from '../components/ConversationCard'
import Link from 'next/link'
import Axios from '../core/axios'
import { Footer } from '../components/Footer'

const RoomsPages = ({ rooms = [] }) => {
    return (
        <>
            <Header />
            <div className='container'>
                <div className='mt-40 mb-40 d-flex align-items-center justify-content-between media'>
                    <h1 className='title-size'>All conversations</h1>
                    <Button color='green'>
                        + Start room
                    </Button>
                </div>
                <div className='cards'>
                    {
                        rooms.map((obj) => (
                            <Link key={ obj.id } href={`/rooms/${obj.id}`} passHref>
                                <div className='wrapper-cards'>
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
            <Footer />
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