module.exports = function (plop) {
  // controller generator
  plop.setGenerator("skill", {
    description: "Add another skill",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Skill name",
      },
      {
        type: "input",
        name: "percentage",
        message: "Percentage",
      },
      {
        type: "input",
        name: "mainColor",
        message: "Main color",
      },
      {
        type: "input",
        name: "textColor",
        message: "Text color",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/resume/Skill{{pascalCase name}}.js",
        templateFile: "plop-templates/Skill.template.js.hbs",
      },
    ],
  });
};
