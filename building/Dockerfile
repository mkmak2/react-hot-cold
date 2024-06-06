FROM node as building

ARG TOKEN

RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get install -y git

RUN git clone https://$TOKEN:x-oatuh-basic@github.com/anamika8/react-hot-cold.git
WORKDIR /react-hot-cold

RUN npm install
RUN npm run build
