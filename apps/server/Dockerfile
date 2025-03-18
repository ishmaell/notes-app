FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN cd apps/server && npm install && npm run build

EXPOSE 4000

CMD ["npm", "run", "dev"]