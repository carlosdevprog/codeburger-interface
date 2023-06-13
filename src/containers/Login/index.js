import React from "react";
import {
    Container,
    LoginImage,
    ContainerItens,
    Label,
    Input,
    SignUpLink,
    ErrorMessage
} from "./styles";
import {Button} from "../../components"
import { Link, useNavigate } from "react-router-dom";
import BurgerLogin from "../../assets/burger-login.svg";
import Logo from "../../assets/logo.svg";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from 'react-toastify';
import { useUser } from "../../hooks/UserContext"



export function Login() {
    const navigate = useNavigate()
    const { putUserData } = useUser()
    const schema = Yup.object().shape({
        email: Yup.string().email("Digite um email válido.").required("O email é obrigatório."),
        password: Yup.string().required("A senha é obrigatória.").min(6, "A senha deve ter pelo menos 6 dígitos.")
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });


    const onSubmit = async clientData => {
        const { data } = await toast.promise(
            api.post("sessions", {
                email: clientData.email,
                password: clientData.password,
            }),
            {
                pending: 'Verificando seus dados... 🫣',
                success: 'Olá, seja bem-vindo(a)!!! 😁',
                error: 'Algo deu errado. Verifique seu email e/ou senha. 🤨'
            }
        )

        putUserData(data)

        setTimeout(() => {
            navigate("/")
        }, 1000)

        
    }

    return (
        <Container>

            <LoginImage src={BurgerLogin} alt="Burger-Login-img" />

            <ContainerItens>
                <img src={Logo} alt="Logo-burger" />

                <h1>Login</h1>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <Label>Email</Label>
                    <Input type="email" {...register("email")} error={errors.email?.message} />
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>

                    <Label>Senha</Label>
                    <Input type="password" {...register("password")} error={errors.password?.message} />
                    <ErrorMessage>{errors.password?.message}</ErrorMessage>

                    <Button style={{ margin: "75px 0 25px 0" }} type="submit">Entrar</Button>
                </form>
                <SignUpLink>Não possui conta? <Link to="/cadastro">Cadastre-se</Link></SignUpLink>
            </ContainerItens>

        </Container>
    )
}

