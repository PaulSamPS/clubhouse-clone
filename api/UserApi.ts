import { Axios } from '../core/axios'
import { UserData } from '../pages'

export const UserApi = {
    getMe: (): Promise<UserData> => Axios.get('/auth/me')
}