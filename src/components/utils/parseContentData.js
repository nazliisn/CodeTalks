export default function (data) {
  return Object.keys(data).map(key => {
    return {
      roomName: key,
    };
  });
}
