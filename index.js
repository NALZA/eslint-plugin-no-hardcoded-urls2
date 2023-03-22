module.exports = {
     rules: {
       'no-hardcoded-urls': {
         create: function (context) {
           const urlPattern = /https?:\/\/[^\s]+/;

           return {
             Literal(node) {
               if (typeof node.value === 'string' && urlPattern.test(node.value)) {
                 context.report({
                   node,
                   message: 'Hardcoded URL detected: {{ url }}',
                   data: { url: node.value },
                 });
               }
             },
           };
         },
       },
     },
   };