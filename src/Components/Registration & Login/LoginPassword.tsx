import React, {useEffect, useRef} from "react";
import {Link, useNavigate} from "react-router-dom";
import {StateType, useAppDispatch} from "../../redux/redux-store";
import {useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {setIsAuth} from "../../redux/Login-Slice";


type formType = {
    password: string
}

export const LoginPassword: React.FC = () => {
    const {email} = useSelector((state: StateType) => state.LoginSlice)
    const {register,watch , formState: {errors}, handleSubmit} = useForm<formType>({
        mode: "onSubmit"
    })
    const {password} = useSelector((state: StateType) => state.LoginSlice.regData[0])
    const navigate = useNavigate()
    const isCorrect = useRef(true)
    const dispatch = useAppDispatch()
    useEffect(() => {
        console.log('1')
    }, [isCorrect])

    const onSubmit = () => {
        if (password === watch('password')) {
            dispatch(setIsAuth(true))
            localStorage.setItem('password', JSON.stringify(password))
            localStorage.setItem('email', JSON.stringify(email))
            navigate('/')
            isCorrect.current = true

        } else {
            isCorrect.current = false
            console.log('false')
        }
    }

    return (
        <div className={'login__container'}>
            <Link to={'/'} className={'login__image'}/>
            <div className={'login__block'}>
                <span className={'login__header__text'}>Sign-In</span>
                <div className={'login__header__email'}>{email}<Link className={'login__header__change'}
                                                                     to={'/login'}>Change</Link></div>
                <span className={'login__email'}>Password</span>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={'login__input__div'}>
                        <input {...register('password', {
                            required: 'Enter your password',
                            minLength: {
                                value: 6,
                                message: 'At least 6 characters'
                            },
                            validate: value => value === password || 'Incorrect password'

                        })}  className={'login__input'}/>
                        {errors?.password && <><i className={'login__icon__error'}/><span className={'login__input__error'}>{errors?.password?.message}</span></>}
                    </div>
                    <input type={"submit"} value={'Continue'} className={'login__button'}/>
                </form>
            </div>
            <div className={'login__header'}>
                <div className={'login__header__line'}/>
                <div className={'login__header__block'}>
                    <div className={'login__header__info'}>
                        <span>Conditions of Use</span>
                        <span>Privacy Notice</span>
                        <span>Help</span>
                    </div>
                    <div className={'login__header__years'}>© 1996-2022, Amazon.com, Inc. or its affiliates</div>
                </div>
            </div>

        </div>
    )
}