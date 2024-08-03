FROM cypress/browsers
WORKDIR /opt/app
COPY . /opt/app
RUN npx cypress install
CMD ["npx", "cypress", "run","--reporter","junit","--reporter-options","mochaFile=junit/test-results.xml"]