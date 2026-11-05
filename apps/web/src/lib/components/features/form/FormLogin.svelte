<script lang="ts">
  import { resolve } from "$app/paths";
  import { Button, Form, FieldLogin, FieldPassword, ErrorText, InputCheckbox } from "$components";
  import { PATH_NAME, APP_NAME, FORM_LABEL, BUTTON_TEXT, HTTP_METHOD, APP_API } from "$lib/constants";

  let login = $state('');
  let password = $state('');
  let remember = $state(false);
  let errorText = $state('');
</script>

<Form className="form_login" method={HTTP_METHOD.POST}>
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
    <Button
      type="button"
      text={BUTTON_TEXT.login}
    />
    <Button
      type="submit"
      text={BUTTON_TEXT.guestAccess}
      variant="outline"
      formAction={APP_API.authDemo}
    />
  {/snippet}

  {#snippet extra()}
    <p>Нет аккаунта?
      <a href={resolve(PATH_NAME.signup)}>Зарегистрироваться</a>
    </p>
  {/snippet}
</Form>

<style lang="postcss">
  :global(.form_login) {
    width: 18rem;
  }
</style>