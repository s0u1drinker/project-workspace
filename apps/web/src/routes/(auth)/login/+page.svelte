<script>
    import { resolve } from "$app/paths";

</script>
<svelte:head>
  <title>Вход | ProjectWorkspace</title>
</svelte:head>

<!--
<main class="login-container cover">
  <h1>Login</h1>
</main>

<style lang="postcss">
  .login-container {
    background: linear-gradient(135deg, var(--color-gradient-1), var(--color-gradient-2));
  }
</style>
-->
<main class="login-container">
  <section class="login-card">
    <header class="login-card__header">
      <h1>ProjectWorkspace</h1>
      <p>
        Ещё нет аккаунта?
        <a href={resolve('/signup')}>
          Зарегистрироваться
        </a>
      </p>
    </header>

    <form class="login-form">
      <label class="field">
        <span>Логин</span>
        <input
          type="text"
          placeholder="Введите логин"
        />
      </label>

      <label class="field">
        <span>Пароль</span>
        <input
          type="password"
          placeholder="Введите пароль"
        />
      </label>

      <label class="remember">
        <input type="checkbox" />
        <span>
          Запомнить меня
        </span>
      </label>

      <button class="button button_primary">
        Войти
      </button>
      <button
        class="button button_secondary"
        type="button"
      >
        А можно просто посмотреть?
      </button>
    </form>
  </section>
</main>

<style lang="postcss">
  .login-container {
    position: relative;
    isolation: isolate;
    display: grid;
    place-items: center;
    min-height: 100%;
    padding: var(--indent);
    overflow: hidden;
    background: linear-gradient(
      135deg,
      var(--color-gradient-1),
      var(--color-gradient-2)
    );
  }

  .login-card {
    width: min(100%, 420px);
    padding: var(--indent-double);
    background: rgba(255, 255, 255, .45);
    border: var(--border) rgba(255, 255, 255, .35);
    border-radius: calc(var(--radius) * 2);
    box-shadow: var(--shadow-md);
    backdrop-filter: blur(12px);
    display: flex;
    flex-direction: column;
    gap: var(--indent-double);
  }

  .login-card__header {
    text-align: center;

    h1 {
      margin: 0;
      color: var(--color-text);
      font-size: 2rem;
    }

    p {
      margin-top: var(--indent-half);
      color: var(--color-text-secondary);
    }

    a {
      color: var(--color-primary);
      text-decoration: none;
      transition: color var(--transition-base);

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .login-form {
    display: flex;
    flex-direction: column;
    gap: var(--indent);
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: var(--indent-quarter);

    span {
      color: var(--color-text-secondary);
      font-size: .875rem;
    }

    input {
      height: 2.75rem;
      padding: 0 var(--indent);
      border: var(--border) rgba(255,255,255,.5);
      border-radius: var(--radius);
      background: rgba(255,255,255,.35);
      color: var(--color-text);
      transition:
        border-color var(--transition-base),
        background-color var(--transition-base);

      &:focus {
        outline: none;
        border-color: var(--color-primary);
        background: rgba(255,255,255,.65);
      }

      &::placeholder {
        color: var(--color-text-secondary);
      }
    }
  }

  .remember {
    display: flex;
    align-items: center;
    gap: var(--indent-half);
    color: var(--color-text-secondary);
    font-size: .875rem;
    cursor: pointer;
    user-select: none;
  }

  .button {
    height: 2.75rem;
    border-radius: var(--radius);
    cursor: pointer;
    transition:
      transform var(--transition-base),
      background-color var(--transition-base);

    &:active {
      transform: scale(.97);
    }

    &_primary {
      border: none;
      background: var(--color-primary);
      color: var(--color-white);

      &:hover {
        background: hsl(from var(--color-primary) h s calc(l - 10));
      }
    }

    &_secondary {
      border: var(--border) rgba(255,255,255,.5);
      background: transparent;
      color: var(--color-text);

      &:hover {
        background: rgba(255,255,255,.25);
      }
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .login-card {
      animation: none;
    }
  }
</style>