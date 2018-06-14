FROM node:carbon

# Create a new directory
RUN mkdir /speed_typing_tutor_cl

# Set the working directory to /speed_typing_tutor_cl
WORKDIR /speed_typing_tutor_cl

COPY package*.json ./

# Copy the current directory content into /speed_typing_tutor_cl
ADD . /speed_typing_tutor_cl

RUN npm install
RUN npm run build

# Make port 8080 available to the world outside this container
EXPOSE 8080

CMD ["npm", "run", "dev"]
