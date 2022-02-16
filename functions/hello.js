// https://hungry-rosalind-88185f.netlify.app/.netlify/functions/hello
exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: "JK",
      age: 32,
      email: "chlwnsrms5@gmail.com",
    }),
  };
};
