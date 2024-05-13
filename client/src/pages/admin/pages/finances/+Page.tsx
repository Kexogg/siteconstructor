import AdminPageContainer from "../../../../components/Admin/AdminPageContainer/AdminPageContainer";
import {useData} from "vike-react/useData";
import {Data} from "./+data";
import Button from "../../../../components/Button/Button";

const Page = () => {
    const data = useData<Data>()
    const getDayWord = (days: number) => {
        if (days % 10 === 1) {
            return 'день'
        } else if (days % 10 > 1 && days % 10 < 5) {
            return 'дня'
        } else {
            return 'дней'
        }
    }
    const remainingDays = Math.floor(data.balance / data.expectedExpenses)
    return (
        <AdminPageContainer title={'Финансы'}>
            <p>Баланс: {data.balance} рублей</p>
            <p>Прогнозируемые расходы расходы: {data.expectedExpenses} рублей в день</p>
            <p>Денег хватит на {remainingDays} {getDayWord(remainingDays)}</p>
            <Button>Пополнить</Button>
        </AdminPageContainer>
    );
};

export default Page;
