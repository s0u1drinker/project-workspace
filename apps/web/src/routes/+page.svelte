<script lang="ts">
  import { APP_NAME } from "$lib/constants";
  import Icon from "$lib/components/ui/Icon";
  import { InputText, InputPassword } from "$lib/components/ui/Input";

  let inputValue = $state('Hallo!');
  let passValue = $state('');
</script>

<h1>Welcome to { APP_NAME }</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> <Icon icon="akar-icons:link-out" aria-label="Ссылка" color="purple" /> to read the documentation</p>
<div>
  <InputText
    bind:value={inputValue}
    placeholder="Param-pam-pam"
    aria-label="Markdown"
    data-morbid="anamnesis"
    icon="local:login"
    id="test"
    name="test"
  />
</div>
<div>
  <InputPassword
    bind:value={passValue}
    placeholder="Pum-pum"
    icon="local:lock"
  />
</div>
{inputValue}

<style lang="postcss">
  p {
    color: green;

    @media (--viewport-lg) {
      color: red;
    }
  }
  
  div {
    margin-top: var(--indent);
    width: 400px;
  }
</style>