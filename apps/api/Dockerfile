FROM node:16-alpine AS builder
# Installing libvips-dev for sharp Compatibility
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev libc6-compat
RUN apk update
# Set working directory
WORKDIR /app
RUN yarn global add turbo
COPY . .
RUN turbo prune --scope=api --docker

# Add lockfile and package.json's of isolated subworkspace
FROM node:16-alpine AS installer
RUN apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev libc6-compat
RUN apk update
WORKDIR /app

# First install dependencies (as they change less often)
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/yarn.lock ./yarn.lock
RUN yarn install

# Build the project and its dependencies
COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json
RUN yarn turbo run build --filter=api...

FROM node:16-alpine AS runner
RUN apk add --no-cache vips-dev
WORKDIR /app

COPY --from=installer /app .

EXPOSE 1337

CMD yarn workspace api start
