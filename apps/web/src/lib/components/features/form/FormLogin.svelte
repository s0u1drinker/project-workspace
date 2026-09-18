<script lang="ts">
  import { resolve } from "$app/paths";
  import { Button, Form, FieldLogin, FieldPassword, ErrorText, InputCheckbox } from "$components";
  import { APP_NAME, FORM_LABEL } from "$lib/constants";

  const BUTTON_LOGIN_TEXT = 'Войти';
  const BUTTON_GUEST_TEXT = 'А можно просто посмотреть?';

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
    <Button type="submit" text={BUTTON_LOGIN_TEXT} />
    <Button variant="outline" text={BUTTON_GUEST_TEXT} />
  {/snippet}

  {#snippet extra()}
    <p>Ещё нет аккаунта?
      <a href={resolve('/signup')}>Зарегистрироваться</a>
    </p>
  {/snippet}
</Form>

<style lang="postcss">
  :global(.form_login) {
    width: 18rem;
  }
</style>