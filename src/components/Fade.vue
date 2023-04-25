<script>
export default {
  functional: true,
  render(createElement, context) {
    const data = {
      props: {
        name: "fade-block",
        mode: "out-in",
      },
    };

    return createElement("transition", data, context.children);
  },
};
</script>
