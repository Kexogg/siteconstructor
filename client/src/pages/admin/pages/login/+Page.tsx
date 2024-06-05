import Button from "../../../../components/Button/Button";
import { Link } from "../../../../components/Link";
import Input from "../../../../components/Input/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { userLogin } from "../../../../api/user";

const Page = () => {
  const [error, setError] = useState<string | null>(null);
  interface Inputs {
    login: string;
    password: string;
  }

  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const response = await userLogin(data.login, data.password);

    if (response.id) {
      window.location.reload();
    } else {
      setError("Ошибка авторизации");
    }
  };
  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-2xl font-bold text-center">ExpoBuilder</h1>
      <h2 className="text-xl text-center">Авторизация</h2>
      <Input
        {...register("login")}
        placeholder="E-mail"
        required
        type="email"
      />
      <Input
        {...register("password")}
        placeholder="Пароль"
        required
        type="password"
      />
      <Button>Войти</Button>
      <p className="text-center">
        Нет аккаунта?{" "}
        <Link href={"/admin/register"}>
          <span className="text-blue-500 underline">Регистрация</span>
        </Link>
      </p>
      {error && <p className="text-red-500 text-center">{error}</p>}
    </form>
  );
};

export default Page;
