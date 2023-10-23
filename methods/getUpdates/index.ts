export default async function getUpdates({
  offset = 0,
  limit = 100,
  timeout = 0,
  allowed_updates = [],
}): Promise<{
  ok: boolean;
  error_code?: number;
  description?: string;
  result?: [{
    update_id: number;
    message: {
      message_id: number;
      from: {
        id: number;
        is_bot: boolean;
        first_name: string;
        last_name: string;
        username: string;
        language_code: string;
      };
      chat: {
        id: number;
        first_name: string;
        last_name: string;
        username: string;
        type: string;
      };
      date: number;
      text?: string;
    };
  }];
}> {
  return await fetch(
    BASE + "getUpdates",
    {
      "method": "POST",
      "headers": {
        "Content-Type": "application/json",
      },
      "body": JSON.stringify({
        offset,
        limit,
        timeout,
        allowed_updates,
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
