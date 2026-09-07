<script lang="ts">
  import { INPUT_PASSWORD_PLACEHOLDER, INPUT_ICON_MAP, INPUT_TYPES } from "$lib/constants";
  import Button from "../Button";
  import InputWrapper from "./InputWrapper.svelte";
  import type { TIconName } from "$lib/types";
  import type { IInputPassword } from "./Input.types";

  let {
    value = $bindable(),
    placeholder = INPUT_PASSWORD_PLACEHOLDER,
    icon,
    ...props
  }: IInputPassword = $props();
  let showPassword: boolean = $state(false);

  const iconName: TIconName = $derived(showPassword ? INPUT_ICON_MAP.eyeSlashed : INPUT_ICON_MAP.eyeOpen);
  const inputType = $derived(showPassword ? INPUT_TYPES.text : INPUT_TYPES.password);
  const ariaLabel = $derived(showPassword ? 'Скрыть пароль' : 'Показать пароль');

  const changeVision = () => showPassword = !showPassword
</script>

<InputWrapper className="input_password" {icon}>
  <input
    type={inputType}
    {placeholder}
    bind:value={value}
    {...props}
  />
  <Button
    variant="plain"
    size="small"
    color="gray"
    iconLeft={iconName}
    onClick={changeVision}
    aria-label={ariaLabel}
    circle
  />
</InputWrapper>

<style lang="postcss">
  @import './Input.postcss';
</style>
