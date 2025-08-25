import {
  Title,
  Container,
  TopBackground,
  Form,
  ContainerInputs,
  InputLabel,
  Input,
  Button,
} from "./styles";

import UsersImage from "../../assets/users.png";

function Home() {
  return (
    <Container>
      <TopBackground>
        <img src={UsersImage} alt="imagem-usuarios" />
      </TopBackground>

      <Form>
        <Title>Cadastro de Usuários</Title>

        <ContainerInputs>

          <div>
            <InputLabel>
              Nome<span> * </span>
            </InputLabel>
            <Input type="text" placeholder="Nome do usuário" />
          </div>

          <div>
            <InputLabel>
              Idade<span> * </span>
            </InputLabel>
            <Input type="number" placeholder="Idade do usuário" />
          </div>
          
        </ContainerInputs>

        <div style={{ width: '100%'}}>
          <InputLabel>
            E-mail<span> * </span>
          </InputLabel>
          <Input type="email" placeholder="E-mail do usuário" />
        </div>

        <Button type="submit">Cadastrar Usuário</Button>
      </Form>
    </Container>
  );
}

export default Home;

/* 
O exportar default é usado para que o componente App possa ser importado para outros arquivos. Mas so pode haver  1  export default por arquivo.
Se quiser exportar mais de um componente, deve usar o export nomeado, como por exemplo:

export function MeuComponente() { ... }
export function OutroComponente() { ... } 

*/
