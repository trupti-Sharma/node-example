const Joi = require("@hapi/joi").extend(require("@hapi/joi-date"));
const schema = Joi.object().keys({
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),

  password: Joi.string().pattern(
    new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})")
  ),
  repeat_password: Joi.ref("password"),
  date: Joi.date()
    .format("DD-MMM-YYYY")
    .utc(),
  access_token: [Joi.string(), Joi.number()],

  birth_year: Joi.number()
    .integer()
    .min(1900)
    .max(2013),

  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] }
  })
});

let username = "Trupti";
let password = "trupTI@1234";
let access_token = "trupTI@1234";
let birth_year = "2011";
let repeat_password = "trupTI@1234";
let email = "truptisharma336@gmail.com";
let date = "02-NOV-1999";
const { error, value } = schema.validate({
  username: username,
  password: password,
  repeat_password: repeat_password,
  access_token: access_token,
  birth_year: birth_year,
  email: email,
  date: date
});

if (error) {
  console.log(error.details);
} else {
  console.log(value);
}
