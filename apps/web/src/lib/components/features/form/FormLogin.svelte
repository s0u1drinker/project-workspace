<script lang="ts">
  import { resolve } from "$app/paths";
  import { Form, FieldLogin, FieldPassword, ErrorText, InputCheckbox } from "$components";
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
    <button class="button button_primary">А можно просто посмотреть?</button>
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