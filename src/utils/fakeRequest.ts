// ----------------------------------------------------------------------

export default function fakeRequest(time: number, values: any) {
  console.log(values);
  return new Promise((res) => setTimeout(res, time));
}
