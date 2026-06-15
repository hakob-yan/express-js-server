import { createClient} from 'redis';
import {RedisStore} from "connect-redis";
import { env } from './env.js';

const redisClient = createClient({
    url: `redis://${env.REDIS_HOST}:${env.REDIS_PORT}`,
});

await redisClient.connect();
const redisStore = new RedisStore({
    client: redisClient,
    ttl: 86400, // 1 day
});
export { redisClient, redisStore };