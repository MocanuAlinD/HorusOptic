import { useRouter } from 'next/router'
import { getProduse } from '../../../../actions';

const Prods = (props) => {
    const router = useRouter()
    const { id } = router.query
    const { prod } = props
    // console.log('Prod: ', prod)

    return (
        <div>
            {prod.name}
        </div>
    );
}

Prods.getInitialProps = async ({ query }) => {
    const prod = await getProduse(query.id)
    return { prod }
}



export default Prods;



