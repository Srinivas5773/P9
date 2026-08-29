# Multi-stage Dockerfile for Chronicles of Aethelgard
FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
COPY . .
RUN node build.js

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

COPY --from=builder /app ./

EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/health', (r) => { if (r.statusCode !== 200) process.exit(1); })"

CMD ["node", "server.js"]
