import dotenv from "dotenv";
import Redis from "ioredis";

dotenv.config();

export const redis = new Redis(process.env.REDIS_URL,{tls:{}} );

redis.set("foo", "bar");

//Aa8wAAIncDE0NmVmNDMyMzMxYmU0YWE2YWRkOWE2MjYwY2Y1YTEzZnAxNDQ4NDg