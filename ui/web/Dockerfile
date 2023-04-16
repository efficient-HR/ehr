FROM node:latest AS node
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
# EXPOSE 4200
# CMD ["npm", "start"]
COPY --from=node /app/dist/web  /usr/share/nginx/html

