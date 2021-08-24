import express from 'express'
import { Code, User } from '../../models'
import { generateRandomCode } from '../urils/generateRandeomCode'

class AuthController {
    getMe (req: Express.Request, res: Express.Response) {
        res.json(req.user)
    }

    authCallback (req: Express.Request, res: Express.Response) {
    res.send(`<script>window.opener.postMessage('${ JSON.stringify(
        req.user) }', '*');window.close()</script>`
)
}

    async activate (req: Express.Request, res: Express.Response) {
        const userId = req.user.id
        const smsCode = req.query.code

        if (!smsCode) {
            return res.status(400).json({ message: 'Введите код активации' })
        }

        const whereQuery = { code: smsCode, user_id: userId }

        try {
            const findCode = await Code.findOne({
                where: whereQuery
            })
            if (findCode) {
                await Code.destroy({
                    where: whereQuery
                })
                await User.update({ isActive: 1 }, { where: { id: userId } })
                return res.send()
            } else {
                res.status(400).json({
                    message: 'Код не найден!'
                })
            }

        } catch (e) {
            res.status(500).json({
                message: 'Ошибка при активации аккаунта!'
            })
        }
    }

    async sendSMS (req: Express.Request, res: Express.Response) {
        const phone = req.query.phone
        const userId = req.user.id
        const smsCode = generateRandomCode()

        if (!phone) {
            return res.status(400).json({
                message: 'Номер телефона не указан!'
            })
        }

        try {
        // await Axios.get(`https://sms.ru/sms/send?api_id=${ process.env.SMS_API_KEY }&to=79225576656&msg=${ smsCode }`)
            const findCode = await Code.findOne({
                where: {
                    user_id: userId
                }
            })

            if (findCode) {
                return res.status(400).json({ message: 'Код уже отправлен!' })
            }

            await Code.create({
                code: smsCode,
                user_id: userId
            })
            res.status(201).send()

        } catch (e) {
            res.status(500).json({
                message: 'Ошибка при отправке СМС-кода!'
            })
        }
    }
}

export default new AuthController()