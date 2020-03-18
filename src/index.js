const Joi = require("@hapi/joi");

const schema = Joi.object()
  .keys({
    username: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),
    /*     .messages({
        "string.base": `"username" should be a type of 'text'`,
        "string.empty": `"username" cannot be an empty field`,
        "string.min": `"username" should have a minimum length of {#limit}`,
        "any.required": `"username" is a required field`
      }),
*/
    password: Joi.string().pattern(
      new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})")
    ),
    repeat_password: Joi.ref("password"),

    access_token: [Joi.string(), Joi.number()],

    birth_year: Joi.number()
      .integer()
      .min(1900)
      .max(2013),

    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] }
    })
  })
  .with("username", "birth_year")
  .with("password", "repeat_password");

let username = "Trupti";
let password = "trupTI@1234";
let access_token = "trupTI1234";
let birth_year = "2011";
let repeat_password = "trupTI@1234";
let email = "truptisharma336@gmail.com";

const { error, value } = schema.validate({
  username: username,
  password: password,
  repeat_password: repeat_password,
  access_token: access_token,
  birth_year: birth_year,
  email: email
});

if (error) {
  console.log(error.details);
} else {
  console.log(value);
}
