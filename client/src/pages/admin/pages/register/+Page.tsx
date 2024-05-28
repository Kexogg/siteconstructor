import {SubmitHandler, useForm} from "react-hook-form";
import {reload} from "vike/client/router";
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import {Link} from "../../../../components/Link";

const Page = () => {
    interface Inputs {
        login: string,
        companyName: string,
        password: string
    }

    const {register, handleSubmit} = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const response = await fetch('/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                login: data.login,
                orgName: data.companyName,
                password: data.password,
            }),
        });

        if (response.ok) {
            const result = await response.json();
            await reload();
            console.log(result);
        } else {
            console.error('Registration failed');
        }
    };

    return (
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-2xl font-bold text-center">ExpoBuilder</h1>
            <h2 className="text-xl text-center">Регистрация</h2>
            <Input {...register('login')} placeholder="E-mail" required type="email"/>
            <Input {...register('companyName')} placeholder="Название компании" required type="text"/>
            <Input {...register('password')} placeholder="Пароль" required type="password"/>
            <Button>Зарегестрироватся</Button>
            <p className='text-center'>Есть аккаунт? <Link href={"/admin/login"}><span
                className="text-blue-500 underline">Войти</span></Link>
            </p>
        </form>
    );
};

export default Page;
