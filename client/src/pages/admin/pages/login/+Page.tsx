import Button from "../../../../components/Button/Button";
import {Link} from "../../../../components/Link";
import Input from "../../../../components/Input/Input";
import {navigate} from "vike/client/router";

const Page = () => {
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await fetch('/_auth/login')
        await navigate('/admin')
    }
    return (
        <form className="flex flex-col gap-3" onSubmit={onSubmit}>
            <h1 className="text-2xl font-bold text-center">ExpoBuilder</h1>
            <h2 className="text-xl text-center">Авторизация</h2>
            <Input placeholder="E-mail" required type="email"/>
            <Input placeholder="Пароль" required type="password"/>
            <Button>Войти</Button>
            <p className='text-center'>Нет аккаунта? <Link href={"/admin/register"}><span
                className="text-blue-500 underline">Регистрация</span></Link>
            </p>
        </form>
    );
};

export default Page;
