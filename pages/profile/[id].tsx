import { useRouter } from 'next/router'
import { Profile } from '../../components/Profile'
import { Header } from '../../components/Header'

const ProfilePage = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <>
            <Header />
            <div className='pt-10 pl-10 pb-10 pr-10 mt-30 container'>
                <Profile
                    fullname='Jack Sparrow'
                    username='Jack'
                    avatarUrl='https://animator36.ru/wp-content/uploads/2021/01/captain-jack-vorobey.jpg'
                    about='captain Jack Sparrow join to clubhouse.' />
            </div>
        </>
    )
}

export default ProfilePage