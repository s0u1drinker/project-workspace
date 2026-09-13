<script lang="ts">
  import { resolve } from "$app/paths";
</script>

<form class="login-form">
  <h1 class="login-form__header">ProjectWorkspace</h1>

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
    <span>Запомнить меня</span>
  </label>

  <button class="button button_primary">Войти</button>

  <div class="login-form__links">
    <p>Ещё нет аккаунта?
      <a href={resolve('/signup')}>Зарегистрироваться</a>
    </p>
    <a href={resolve('/')}>А можно просто посмотреть?</a>
  </div>
</form>

<style lang="postcss">
  .login-form {
    display: flex;
    flex-direction: column;
    gap: var(--indent);
    position: relative;

    &__header {
      text-align: center;
      margin: 0;
      color: var(--color-text);
      font-size: 2rem;
    }

    &__links {
      display: flex;
      align-items: center;
      flex-direction: column;

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
    width: fit-content;
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
  }
</style>