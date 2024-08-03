FROM cypress/browsers
WORKDIR /opt/app
COPY . /opt/app
RUN npm install
RUN npx cypress install
CMD ["npx", "cypress", "run","--reporter","junit","--reporter-options","mochaFile=junit/test-results.xml"]