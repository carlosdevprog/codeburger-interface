import React, { useEffect, useState } from "react";
import { Container, Label, Input, ButtonStyles, LabelUpload, ContainerInput } from "./styles";
import api from "../../../services/api"
import ReactSelect from "react-select"
import { useForm, Controller } from "react-hook-form";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorMessage } from "../../../components";
import { toast } from 'react-toastify';
import { useNavigate, useLocation } from 'react-router-dom';
import paths from './../../../constants/paths';


function EditProduct() {
    const [fileName, setFileName] = useState(null)
    const [categories, setCategories] = useState([])
    const navigate = useNavigate()
    const { location: { state: { product } } } = useLocation()

    const schema = Yup.object().shape({
        name: Yup.string().required('Digite o nome do produto'),
        price: Yup.string().required('Digite o preço do produto'),
        category: Yup.object().required('Escolha uma categoria'),
        offer: Yup.bool(),
        // file: Yup.mixed().test('required', 'Carregue uma imagem', value => {
        //     return value?.length > 0
        // }).test('fileSize', 'Carregue imagens de até 2mb', value => {
        //     return value[0]?.size < 200000
        // }).test('type', 'Carregue apenas arquivos JPEG ou PNG', value => {
        //     return (
        //         value[0]?.type === 'image/jpeg' ||
        //         value[0]?.type === 'image/png'
        //     )
        // })
    })

    const { register,
        handleSubmit,
        control,
        formState: { errors } } = useForm({ resolver: yupResolver(schema) })

    const onSubmit = async data => {
        const productDataFormData = new FormData()

        productDataFormData.append('name', data.name)
        productDataFormData.append('price', data.price)
        productDataFormData.append('category_id', data.category.id)
        productDataFormData.append('file', data.file[0])
        productDataFormData.append('offer', data.offer)

        await toast.promise(api.put(`products/${product.id}`, productDataFormData), {
            pending: 'Editando novo produto...',
            success: 'Produto editado com sucesso!',
            error: 'Falha ao editar o produto!'
        })

        setTimeout(() => {
            navigate(paths.listProducts)
        }, 2000)
    }

    useEffect(() => {

        async function loadCategories() {
            const { data } = await api.get("categories")

            setCategories(data)
        }
        loadCategories()
    }, [])




    return (
        <Container>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Label>Nome</Label>
                    <Input type='text' {...register('name')} defaultValue={product.name} />
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>
                </div>

                <div>
                    <Label>Preço</Label>
                    <Input type='number' {...register('price')} defaultValue={product.price} />
                    <ErrorMessage>{errors.price?.message}</ErrorMessage>
                </div>

                <div>
                    <LabelUpload>
                        <FileUploadIcon />
                        {fileName ? fileName : 'Carregar imagem do produto'}
                        <input type='file'
                            accept='image/png, image/jpeg'
                            {...register('file')}
                            onChange={value => {
                                setFileName(value.target.files[0]?.name)
                            }} />
                    </LabelUpload>
                    <ErrorMessage>{errors.file?.message}</ErrorMessage>
                </div>

                <div>
                    <Controller
                        name='category'
                        control={control}
                        defaultValue={product.category}
                        render={({ field }) => {

                            return (
                                <ReactSelect
                                    {...field}
                                    options={categories}
                                    getOptionLabel={cat => cat.name}
                                    getOptionValue={cat => cat.id}
                                    placeholder='Categorias'
                                    defaultValue={product.category}
                                />
                            )

                        }}>
                    </Controller>
                    <ErrorMessage>{errors.category?.message}</ErrorMessage>
                </div>

                <ContainerInput>
                    <input type='checkbox' defaultChecked={product.offer} {...register('offer')} />
                    <Label>Produto em oferta?</Label>
                </ContainerInput>

                <ButtonStyles>Editar produto</ButtonStyles>
            </form>
        </Container>
    )
}

export default EditProduct



