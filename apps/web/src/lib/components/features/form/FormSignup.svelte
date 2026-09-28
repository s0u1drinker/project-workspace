<script lang="ts">
  import { resolve } from "$app/paths";
  import { Button, Form, FieldLogin, FieldPassword, ErrorText } from "$components";
  import { APP_NAME, FORM_SIGNUP_HEADER_TEXT, FORM_SIGNUP_BUTTON_TEXT, FORM_LOGIN_BUTTON_GUEST_TEXT } from "$lib/constants";

  let username = $state('');
  let password = $state('');
  let repeatPassword = $state('');
  let errorText = $state('');
</script>

<div class="form_signup">
  <Form>
    {#snippet header()}
      <h1 class="form_signup__header">{FORM_SIGNUP_HEADER_TEXT}<br/>{APP_NAME}</h1>
    {/snippet}

    {#snippet body()}
      <FieldLogin bind:value={username} />
      <FieldPassword bind:value={password} />
      <FieldPassword bind:value={repeatPassword} />
    {/snippet}

    {#snippet message()}
      <ErrorText text={errorText} />
    {/snippet}

    {#snippet buttons()}
      <Button type="submit" text={FORM_SIGNUP_BUTTON_TEXT} />
      <Button variant="outline" text={FORM_LOGIN_BUTTON_GUEST_TEXT} />
    {/snippet}

    {#snippet extra()}
      <p>Уже есть аккаунт?
        <a href={resolve('/login')}>Войти</a>
      </p>
    {/snippet}
  </Form>
</div>

<style lang="postcss">
  .form_signup {
    width: 18rem;

    @media (--viewport-sm) {
      width: auto;
    }

    &__header {
      text-align: center;
      font-size: 1.5rem;

      @media (--viewport-sm) {
        font-size: 2rem;
      }
    }
  }
</style>