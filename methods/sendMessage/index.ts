export default async function sendMessage(
  {
    chat_id,
    text,
  }: {
    chat_id: number;
    text: string;
  },
): Promise<{
  ok: boolean;
  result: {
    message_id: number;
    from: {
      id: number;
      is_bot: boolean;
      first_name: string;
      username: string;
    };
    chat: {
      id: number;
      first_name: string;
      last_name: string;
      username: string;
      type: string;
    };
    date: number;
    text: string;
  };
}> {
  return await fetch(
    BASE + "sendMessage",
    {
      "method": "POST",
      "headers": {
        "Content-Type": "application/json",
      },
      "body": JSON.stringify({
        chat_id,
        text,
      }),
    },
  ).then((value) => {
    return value.text();
  }).then((value) => {
    return JSON.parse(value);
  }).catch((_error) => {
    return {
      ok: false,
    };
  }).finally(() => {
    // console.info("method: getUpdates");
  });
}
