<script lang="ts">
  import { goto } from '$app/navigation';
  import { resolve } from '$app/paths';
  import { Button } from '$components';
  import { APP_API, PATH_NAME } from '$constants';

  const logout = async () => {
    const response = await fetch(APP_API.authLogout, {
      method: 'POST',
    });

    if (response.ok) {
      await goto(resolve(PATH_NAME.login));
    }
  };
</script>

<Button
  className="button_logout"
  iconLeft="local:logout"
  text="Выход"
  color="danger"
  variant="plain"
  size="small"
  onClick={logout}
/>

<style lang="postcss">
:global(.button_logout.button) {
  padding-inline: var(--indent-half);
  justify-content: flex-start;
  border-radius: 4px;
  border: 0 none;
  width: 100%;
}
</style>