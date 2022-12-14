/**
* Gist tag
*
* Syntax:
*   {% gist gist_id [filename] %}
*/
export function gistTag(args: Array<string>) {
  const id = args.shift();
  const file = args.length ? `?file=${args[0]}` : '';

  return `<script src="//gist.github.com/${id}.js${file}"></script>`;
}
