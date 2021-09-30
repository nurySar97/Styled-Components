import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  Container,
  Title,
  Wrapper,
  Button,
  ButtonMain,
  ButtonExtended,
  ReversedButton,
  ButtonThemed,
  Link,
  StyledLink,
  Input,
  Thing,
  GlobalStyle,
  PasswordInput,
  Preloader,
  PlaystarzButton
} from './components';

const theme = {
  bc: '#fff',
  fc: '#007bff'
}

const invertTheme = ({ fc, bc }) => ({
  bc: fc,
  fc: bc
})

const App = () => {
  return (
    <div>
      <Container>
        <section>
          <Wrapper>
            <Title>
              Hello World!
            </Title>
          </Wrapper>
        </section>

        <section>
          <h2>Buttons</h2>

          <Button>
            Button
          </Button>

          <Button primary>
            Button Primary
          </Button>

          <ButtonMain onClick={alert.bind(null, 'Button Main')}>
            Button Main
          </ButtonMain>

          <ButtonExtended onClick={alert.bind(null, 'Button Extended')}>
            Button Extended
          </ButtonExtended>

          <Button as='a' href='#'>
            Button Link
          </Button>

          <ReversedButton>
            Button Reversed
          </ReversedButton>

          <ThemeProvider theme={theme}>
            <ButtonThemed>
              Button Themed
            </ButtonThemed>

            <ThemeProvider theme={invertTheme}>
              <ButtonThemed >
                Button Inverted Theme
              </ButtonThemed>
            </ThemeProvider>

          </ThemeProvider>

          <PlaystarzButton>
            Buy Cripto
          </PlaystarzButton>

          <PlaystarzButton  type='secondary'>
            Buy Cripto
          </PlaystarzButton>

          <PlaystarzButton  type='danger'>
            Buy Cripto
          </PlaystarzButton>

          <PlaystarzButton type='dark'>
            Buy Cripto
          </PlaystarzButton>

          <PlaystarzButton type='green' >
            Buy Cripto
          </PlaystarzButton>

        </section>

        <section>
          <h2>Links</h2>
          <Link>
            Unstyled, boring Link
          </Link>
          <br />
          <StyledLink>
            Styled, exciting Link
          </StyledLink>
        </section>

        <section>
          <h2>Inputs</h2>
          <Input defaultValue="@probablyup" type="text" />
          <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />
          <Input placeholder="A small text input" />
          <Input placeholder="A bigger text input" size="4rem" />
          <PasswordInput placeholder="A bigger password input" size="2em" />
        </section>

        <section>
          <h2>Thing</h2>
          <Thing>Hello world!</Thing>
          <Thing>How ya doing?</Thing>
          <Thing className="something">The sun is shining...</Thing>
          <div>Pretty nice day today.</div>
          <Thing>Don't you think?</Thing>
          <div className="something-else">
            <Thing>Splendid.</Thing>
          </div>

          <Thing>
            <label htmlFor="foo-button" className="something-primary">Mystery button</label>
            <button id="foo-button">What do I do?</button>
          </Thing>

          <GlobalStyle />
          <Thing>
            I'm blue, da ba dee da ba daa
          </Thing>

        </section>

        <section>
          <h2>Preloader</h2>
          <Preloader size='150px' />
        </section>

      </Container>
    </div>
  )
}

export default App;