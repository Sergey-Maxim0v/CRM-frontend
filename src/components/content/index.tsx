import PageTitle from "../page-title";
import Table from "../table";
import ButtonAdd from "../button-add";
import stiles from './styles.module.scss'

const Content = () => {

    return (
        <section className={stiles.row}>
            <PageTitle/>
            <Table filter/>
            <ButtonAdd/>
        </section>
    )
}

export default Content