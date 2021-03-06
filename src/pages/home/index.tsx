import * as c from './styles';
import { Header } from '../../components/header';
import { Ingredients } from '../../components/Ingredients.section';
import { Delivery } from '../../components/delivery.section';

export const Home = () => {
    return(
        <c.Home>
          <c.homeArea>
            <c.Header>
              <Header/>
            </c.Header>
            <c.HomeInfo>
              <h1>Experimente nosso novo hambúrguer de picanha</h1>
              <h4>Na compra de um, você ganha uma Coca-Cola de 750ml e uma porção de fritas</h4>
              <button>Saiba mais</button> 
            </c.HomeInfo>
          </c.homeArea>
          <Ingredients/>
          <Delivery/>
        </c.Home>
    );
};