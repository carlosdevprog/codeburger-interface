import React from "react";
import {
    Container,
    RegisterImage,
    ContainerItens,
    Label,
    Input,
    SignInLink,
} from "./styles";
import {Button, ErrorMessage} from "../../components"
import { Link } from "react-router-dom";
import BurgerRegister from "../../assets/burger-register.svg";
import Logo from "../../assets/logo.svg";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from 'react-toastify';



export function Register() {
    const schema = Yup.object().shape({
        name: Yup.string().required("O seu nome é obrigatório."),
        email: Yup.string().email("Digite um email válido.").required("O email é obrigatório."),
        password: Yup.string().required("A senha é obrigatória.").min(6, "A senha deve ter pelo menos 6 dígitos."),
        confirmPassword: Yup.string().required("A senha é obrigatória.").oneOf([Yup.ref("password")], "As senhas devem ser iguais.")
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });


    const onSubmit = async clientData => {
        try {
            const { status } = await api.post("users", {
                name: clientData.name,
                email: clientData.email,
                password: clientData.password,
            },
                { validateStatus: () => true }
            )

            if (status === 201 || status === 200) {
                toast.success("Cadastro criado com sucesso!!! 😉")
            }
            else if (status === 409){
                toast.error("Email já cadastrado. 😅")
            }else{
                throw new Error()
            }
        } catch (err) {
            toast.error("Falha no sistema. Tente novamente! 😫")
        }
    }


    return (
        <Container>

            <RegisterImage src={BurgerRegister} alt="Burger-Register-img" />

            <ContainerItens>
                <img src={Logo} alt="Logo-burger" />

                <h1>Cadastre-se</h1>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>

                    <Label error={errors.name?.message}>Nome</Label>
                    <Input type="text" {...register("name")} error={errors.name?.message} />
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>

                    <Label error={errors.email?.message}>Email</Label>
                    <Input type="email" {...register("email")} error={errors.email?.message} />
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>

                    <Label error={errors.password?.message}>Senha</Label>
                    <Input type="password" {...register("password")} error={errors.password?.message} />
                    <ErrorMessage>{errors.password?.message}</ErrorMessage>

                    <Label error={errors.confirmPassword?.message}>Confirmar Senha</Label>
                    <Input type="password" {...register("confirmPassword")} error={errors.confirmPassword?.message} />
                    <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

                    <Button style={{ margin: "25px 0 25px 0", background: "#B8C124" }} type="submit">Criar Conta</Button>

                </form>
                <SignInLink>Já possui conta? <Link to="/login" >Faça o login</Link></SignInLink>
            </ContainerItens>

        </Container>
    )
}

