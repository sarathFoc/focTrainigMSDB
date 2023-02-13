    FROM node:18-alpine
    WORKDIR "/usr/src/app "
    COPY package*.json ./
    RUN npm install
    EXPOSE 8080

    COPY . .
    RUN npm run build
    CMD ["npm", "run", "start"]


# ---- Base Node ----

# FROM node:alpine AS base

# RUN apk add --no-cache tini

# WORKDIR /usr/src/app
# COPY . /usr/src/app

# #
# # ---- Dependencies ----
# FROM base AS dependencies
# # install node packages
# # RUN npm install -g @nestjs/cli
# RUN npm install 
# RUN npm install --only=dev
# # If you are building your code for production
# # RUN npm ci --only=production

# # ---- Build ----
# FROM dependencies AS build
# COPY . .


# #
# # ---- Release ----
# FROM build AS release
# EXPOSE 8080
# CMD ["npm", "run", "start"]
