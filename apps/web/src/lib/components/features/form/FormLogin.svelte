<script lang="ts">
  import { resolve } from "$app/paths";
  import { Button, Form, FieldLogin, FieldPassword, ErrorText, InputCheckbox } from "$components";
  import { APP_NAME, FORM_LABEL, FORM_LOGIN_BUTTON_TEXT, FORM_LOGIN_BUTTON_GUEST_TEXT } from "$lib/constants";
/**
 * TODO:
 * 1. Проверить форму на разных экранах.
 */
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
    <Button type="submit" text={FORM_LOGIN_BUTTON_TEXT} />
    <Button variant="outline" text={FORM_LOGIN_BUTTON_GUEST_TEXT} />
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