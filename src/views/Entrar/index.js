import React from 'react';
import { Text, Image, StyleSheet} from 'react-native';
//container que envolve todas as telas, componentes criados com o styled/compoents
import { Container, 
         InputArea,
         CustomButton,
         CustomButtonText,
         SignMessageButton,
         SignMessageButtonText,
         SignMessageButtonLink } from './styles';

import Inicio from '../../imagens/inicio.png';
//import EmailIcon from '../../imagens/email.svg';
//import LockIcon from '../../imagens/lock.svg';

import SignInput from '../../components/SignInput';

export default () => {
    return (
        <Container>
          <Image source={Inicio} style= {styles.imagem} />

          <InputArea>
            <SignInput  />
            
            <SignInput  />           

            <CustomButton>
                <CustomButtonText> ENTRAR </CustomButtonText>
            </CustomButton>
          </InputArea>

          <SignMessageButton>
              <SignMessageButtonText>
                  Ainda não tem uma conta?
              </SignMessageButtonText>
              <SignMessageButtonLink>Cadastre-se</SignMessageButtonLink>
          </SignMessageButton>  
        </Container>
    );
}

const styles = StyleSheet.create({

    imagem: {
        width: 270,
        height: 270,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 200,
        backgroundColor: "#fff",
      }
});