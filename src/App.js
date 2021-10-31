import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
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
  PlaystarzButton,
} from "./components";
import PlaystarzFormItem from "./components/PlaystarzFormItem";
const theme_second = {
  bc: "#fff",
  fc: "#007bff",
};

const invertTheme = ({ fc, bc }) => ({
  bc: fc,
  fc: bc,
});

const themeHandler = (theme) => {
  const _theme = {
    dark: {
      fc: "#fff",
      bc: "#000",
    },
    light: {
      fc: "#000",
      bc: "#fff",
    },
  };
  return _theme[theme];
};

const App = () => {
  const [theme, setTheme] = useState("light");

  const onToggleSetTheme = () => {
    if (theme === "dark") return setTheme("light");
    setTheme("dark");
  };

  const currentTheme = themeHandler(theme)

  return (
    <div>
      <Container>
        <section>
          <Wrapper>
            <Title>Hello World!</Title>
          </Wrapper>
        </section>

        <section>
          <h2>Buttons</h2>

          <Button>Button</Button>

          <Button primary>Button Primary</Button>

          <ButtonMain onClick={alert.bind(null, "Button Main")}>
            Button Main
          </ButtonMain>

          <ButtonExtended onClick={alert.bind(null, "Button Extended")}>
            Button Extended
          </ButtonExtended>

          <Button as="a" href="#">
            Button Link
          </Button>

          <ReversedButton>Button Reversed</ReversedButton>

          <ThemeProvider theme={theme_second}>
            <ButtonThemed>Button Themed</ButtonThemed>

            <ThemeProvider theme={invertTheme}>
              <ButtonThemed>Button Inverted Theme</ButtonThemed>
            </ThemeProvider>
          </ThemeProvider>

          <PlaystarzButton>Buy Cripto</PlaystarzButton>

          <PlaystarzButton type="secondary">Buy Cripto</PlaystarzButton>

          <PlaystarzButton type="danger">Buy Cripto</PlaystarzButton>

          <PlaystarzButton type="dark">Buy Cripto</PlaystarzButton>

          <PlaystarzButton type="green">Buy Cripto</PlaystarzButton>
        </section>

        <section>
          <h2>Links</h2>
          <Link>Unstyled, boring Link</Link>
          <br />
          <StyledLink>Styled, exciting Link</StyledLink>
        </section>

        <section>
          <h2>Inputs</h2>
          <Input defaultValue="@probablyup" type="text" />
          <Input
            defaultValue="@geelen"
            type="text"
            inputColor="rebeccapurple"
          />
          <Input placeholder="A small text input" />
          <Input placeholder="A bigger text input" size="4rem" />
          <PasswordInput placeholder="A bigger password input" size="2em" />

          <form autoComplete="off">
            <PlaystarzFormItem />
          </form>
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
            <label htmlFor="foo-button" className="something-primary">
              Mystery button
            </label>
            <button id="foo-button">What do I do?</button>
          </Thing>

          <GlobalStyle />
          <Thing>I'm blue, da ba dee da ba daa</Thing>
        </section>

        <section>
          <h2>Preloader</h2>
          <Preloader size="150px" />
        </section>

        <ThemeProvider theme={currentTheme}>
          <ButtonThemed>Button Inverted Theme</ButtonThemed>
          <ButtonThemed onClick={onToggleSetTheme}>Change Theme</ButtonThemed>
        </ThemeProvider>
      </Container>
    </div>
  );
};

export default App;
