FROM iron/ruby

# throw errors if Gemfile has been modified since Gemfile.lock
RUN bundle config --global frozen 1

WORKDIR /usr/src/app/


RUN bundle install
COPY Gemfile Gemfile.lock ./

ADD . /usr/src/app/

EXPOSE 3333

CMD ["ruby", "/usr/src/app/payment.rb"]
