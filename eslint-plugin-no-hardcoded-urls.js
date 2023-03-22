module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "disallow hard coded URLs",
      category: "Best Practices",
      recommended: true,
    },
  },
  create(context) {
    return {
      Literal(node) {
        const { value } = node;
        if (typeof value === "string" && (value.startsWith("http") || value.startsWith("https"))) {
          if (!value.includes("${")) {
            context.report({
              node,
              message: "Hard coded URLs are not allowed",
            });
          }
        }
      },
    };
  },
};