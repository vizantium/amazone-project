import React from "react";
import {Link, useNavigate} from "react-router-dom";


import axios from "axios";
import {useForm} from "react-hook-form";

type formType = {
    name: string,
    email: string,
    password: string,
    rePassword: string
}

export const Registration = () => {
    const navigate = useNavigate()
    const {register,watch , formState: {errors}, handleSubmit} = useForm<formType>({
        mode: 'onBlur'
    })

    const onSubmit = () => {
        const name = watch('name')
        const email = watch('email')
        const password = watch('password')
        axiosRegData(name, email, password)
        navigate('/')
    }

    async function axiosRegData(name: string, email: string, password: string) {
        try {
            await axios.post('https://62c84bd50f32635590d618e2.mockapi.io/regData', {
                email: `${email}`,
                password: `${password}`,
                name: `${name}`
            })
        } catch (error) {
            alert('error')
            navigate('/')
        }

    }


    return (
        <div className={'login__container'}>
            <Link to={'/'} className={'login__image'}/>
            <div className={'login__block'}>
                <span className={'login__header__text'}>Create account</span>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <span className={'login__email'}>Your name</span>
                    <div className={'login__input__div'}>
                        <input {...register('name', {
                            required: 'Enter your name',
                            minLength: {
                                value: 5,
                                message: 'At least 5 characters'
                            }
                        })} className={'login__input'}  placeholder={'First and last name'}/>
                        {errors?.name && <><i className={'login__icon__error'}/><span className={'login__input__error'}>{errors?.name?.message}</span></>}
                    </div>
                    <span className={'login__email'}>Mobile number or email</span>
                    <div className={'login__input__div'}>
                        <input {...register ('email', {
                            required: 'Enter your email',
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Email incorrect'
                            }
                        })} type={'email'}  className={'login__input'}/>
                        {errors?.email && <><i className={'login__icon__error'}/><span className={'login__input__error'}>{errors?.email?.message}</span></>}

                    </div>
                    <span className={'login__email'}>Password</span>
                    <div className={'login__input__div'}>
                        <input {...register('password', {
                            required: 'Enter your password',
                            minLength: {
                                value: 6,
                                message: 'At least 6 characters'
                            },

                        })} type={"password"}  className={'login__input'}
                               placeholder={'At least 6 characters'}/>
                        {errors?.password && <><i className={'login__icon__error'}/><span className={'login__input__error'}>{errors?.password?.message}</span></>}
                    </div>
                    <span className={'login__email'}>Re-enter password</span>
                    <div className={'login__input__div'}>
                        <input {...register('rePassword', {
                            validate: value =>
                                value === watch('password') || "The passwords do not match"
                        })} type={'password'} className={'login__input'}/>
                        {errors?.rePassword && <><i className={'login__icon__error'}/><span className={'login__input__error'}>{errors?.rePassword?.message}</span></>}
                    </div>
                    <input type='submit' value={'Continue'} className={'login__button'}/>
                </form>
                <span className={'login__policy'}>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</span>
                <span className={'login__help'}>Need help?</span>
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