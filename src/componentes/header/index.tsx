import * as S from './styles';
import { useState } from 'react';

export const Header = () => {
    const[openSideBar , setOpenSideBar] = useState(false);
    return(
        <header>
            <S.HeaderContainer>
                <S.Container>
                    <div className='Olá!'>
                        <h1>
                            Olá!
                        </h1>
                    </div>
                <div className='Message'>
                    <h2>
                        Seja Bem-Vindo a sua Carteira!
                    </h2>
                </div>
                </S.Container>
            </S.HeaderContainer>
    </header>
    )
    
}
//Testando// 