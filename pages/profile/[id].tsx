import { useRouter } from 'next/router'
import { Profile } from '../../components/Profile'
import { Header } from '../../components/Header'

const ProfilePage = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <>
            <Header />
            <div className='mt-20 container'>
                <Profile
                    fullname='Jack Sparrow'
                    username='Jack'
                    avatarUrl='https://animator36.ru/wp-content/uploads/2021/01/captain-jack-vorobey.jpg'
                    about='Captain Jack Sparrow &copy; Pirates of the Caribbean.' />
            </div>
        </>
    )
}

export default ProfilePage