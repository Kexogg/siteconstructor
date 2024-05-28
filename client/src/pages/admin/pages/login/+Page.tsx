import Button from "../../../../components/Button/Button";
import {Link} from "../../../../components/Link";
import Input from "../../../../components/Input/Input";
import {SubmitHandler, useForm} from "react-hook-form";
import {reload} from "vike/client/router";

const Page = () => {
    interface Inputs {
        login: string,
        password: string
    }

    const { register, handleSubmit } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                login: data.login,
                password: data.password,
            }),
        });

        if (response.ok) {
            const result = await response.json();
            await reload();
            console.log(result);
        } else {
            console.error('Authentication failed');
        }
    };
    return (
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-2xl font-bold text-center">ExpoBuilder</h1>
            <h2 className="text-xl text-center">Авторизация</h2>
            <Input {...register('login')} placeholder="E-mail" required type="email"/>
            <Input {...register('password')} placeholder="Пароль" required type="password"/>
            <Button>Войти</Button>
            <p className='text-center'>Нет аккаунта? <Link href={"/admin/register"}><span
                className="text-blue-500 underline">Регистрация</span></Link>
            </p>
        </form>
    );
};

export default Page;
