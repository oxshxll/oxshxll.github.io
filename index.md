---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
jsarr:
- jquery-3.3.1.min.js
- oxshxll.js
---

{% for js in page.jsarr %}
  <script type="text/javascript">
  {% include {{ js }} %}
  </script>
{% endfor %}
