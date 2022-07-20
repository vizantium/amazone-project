import React, {useEffect, useRef} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {StateType, useAppDispatch} from "../../redux/redux-store";
import {getRegData, setEmail, setIsLogin} from "../../redux/Login-Slice";
import {useSelector} from "react-redux";

type formType = {
   email: string
}

export const Login: React.FC = () => {
    const navigate = useNavigate()
    const {register,watch , formState: {errors}, handleSubmit} = useForm<formType>({
        mode: 'onBlur'
    })
    const dispatch = useAppDispatch()
    const {isLogin} = useSelector((state: StateType) => state.LoginSlice)

    useEffect(() => {
        console.log('rerender')
        console.log(isLogin)
        if (isLogin) {
            navigate('/login/password')
            dispatch(setIsLogin(false))
        }
    }, [isLogin])

    const onSubmit = async () => {
        dispatch(setEmail(watch('email')))
        await dispatch(getRegData())
    }


    return (
        <div className={'login__container'}>
            <Link to={'/'} className={'login__image'}/>
            <div className={'login__block'}>
                <span className={'login__header__text'}>Sign-In</span>
                <span className={'login__email'}>Email or mobile phone number</span>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={'login__input__div'}>
                        <input {...register('email', {
                            required: 'Enter your Email',
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Email incorrect'
                            }
                        })} type={'email'} className={'login__input'}/>
                        {errors?.email && <><i className={'login__icon__error'}/><span className={'login__input__error'}>{errors?.email?.message}</span></>}
                    </div>
                    <input type="submit" value={'Continue'} className={'login__button'}/>
                </form>
                <span className={'login__policy'}>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</span>
                <span className={'login__help'}>Need help?</span>
            </div>
            <div className={'login__registration'}>
                <span className={'login__new'}>New to Amazon?</span>
                <div className={'login__line'}/>

            </div>
            <Link to={"/registration"} className={'login__button__reg'}>
                Create new Amazon account
            </Link>
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