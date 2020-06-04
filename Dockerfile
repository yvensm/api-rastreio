FROM mhart/alpine-node:11

# Create app directory
WORKDIR /usr/src/app

# Install pm2 to run the app
RUN yarn global add pm2

COPY package.json ./
COPY yarn.lock ./

# Install only production dependencies
RUN yarn install --production

# Bundle app source
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
