export default {
  async scheduled(event: ScheduledEvent, env: any, ctx: ExecutionContext) {
    const msg = `[${new Date().toISOString()}] CRON: fetchDeals -> scoreDeals -> pickDealOfDay -> postSocial (STUB)`;
    console.log(msg);
    // TODO: Replace with real adapters and Postgres writes.
  },
  async fetch() {
    return new Response('OK');
  }
} satisfies ExportedHandler<Env>;
