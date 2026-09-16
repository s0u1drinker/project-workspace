<script lang="ts">
  import { resolve } from "$app/paths";
  import { FieldLogin, FieldPassword } from "../field";
  import { Form } from "../common/Form";
  import { InputCheckbox } from "../ui/Input";
  import { ErrorText } from "../ui/ErrorText/";
  import { APP_NAME, FORM_LABEL } from "$lib/constants";

  let login = $state('');
  let password = $state('');
  let remember = $state(false);
  let errorText = $state('');
</script>

<Form className="form_login">
  {#snippet header()}
    <h1>{APP_NAME}</h1>
  {/snippet}

  {#snippet body()}
    <FieldLogin bind:value={login} />
    <FieldPassword bind:value={password} />
    <InputCheckbox bind:checked={remember} label={FORM_LABEL.remember} />
  {/snippet}

  {#snippet message()}
    <ErrorText text={errorText} />
  {/snippet}

  {#snippet buttons()}
    <button class="button button_primary">Войти</button>
  {/snippet}

  {#snippet extra()}
    <p>Ещё нет аккаунта?
      <a href={resolve('/signup')}>Зарегистрироваться</a>
    </p>
    <a href={resolve('/')}>А можно просто посмотреть?</a>
  {/snippet}
</Form>

<style lang="postcss">
  :global(.form_login) {
    width: 18rem;
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