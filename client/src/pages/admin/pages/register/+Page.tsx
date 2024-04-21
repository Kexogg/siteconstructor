import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import {Link} from "../../../../components/Link";

const Page = () => {
        return (
            <form className="flex flex-col gap-3">
                <h1 className="text-2xl font-bold text-center">ExpoBuilder</h1>
                <h2 className="text-xl text-center">Регистрация</h2>
                <Input placeholder="E-mail" required type="email"/>
                <Input placeholder="Название компании" required type="text"/>
                <Input placeholder="Пароль" required type="password"/>
                <Input placeholder="Повторите пароль" required type="password"/>
                <Button>Зарегестрироватся</Button>
                <p className='text-center'>Есть аккаунт? <Link href={"/admin/login"}><span
                    className="text-blue-500 underline">Войти</span></Link>
                </p>
            </form>
        );
};

export default Page;
