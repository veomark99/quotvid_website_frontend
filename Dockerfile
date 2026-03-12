FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci --legacy-peer-deps
COPY . .
RUN npm run build

FROM node:20-alpine AS production
WORKDIR /app
RUN npm install -g serve
COPY --from=build /app/dist ./dist

EXPOSE 3000
# Railway injects PORT. Never use 5432 (Postgres port). Shell required for $PORT expansion.
CMD ["sh", "-c", "port=${PORT:-3000}; [ \"$port\" = \"5432\" ] && port=3000; exec serve -s dist -l tcp://0.0.0.0:$port --no-request-logging"]
