export default async function getMe(): Promise<{
  ok: boolean;
  error_code?: number;
  description?: string;
  result?: {
    id: number;
    is_bot: boolean;
    first_name: string;
    username: string;
    can_join_groups: boolean;
    can_read_all_group_messages: boolean;
    supports_inline_queries: boolean;
  };
}> {
  return await fetch(BASE + "getMe")
    .then((value) => {
      return value.text();
    })
    .then((value) => {
      return JSON.parse(value);
    })
    .catch((_error) => {
      return {
        ok: false,
      };
    }).finally(() => {
      console.info("method: getMe");
    });
}
