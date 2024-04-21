import Button from "../../../../components/Button/Button";
import {Link} from "../../../../components/Link";
import Input from "../../../../components/Input/Input";

const Page = () => {
    return (
        <form className="flex flex-col gap-3">
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
