import axios from "axios"

export async function hello(event) {
  var { data } = await axios.get('https://www.gov.uk/bank-holidays.json')
  console.log(JSON.stringify(data))

  return {
    message: 'Go Serverless v3! Your function executed successfully!',
    input: event,
  };
}
