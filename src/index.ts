import { showHUD, Clipboard, LaunchProps } from "@raycast/api";

export default async function urlencode(
  props: LaunchProps<{
    arguments: Arguments.Index;
  }>
) {
  const encoded = encodeURIComponent(props.arguments.text);
  await Clipboard.copy(encoded);
  await showHUD(`Copied to clipboard: ${encoded}`);
}
