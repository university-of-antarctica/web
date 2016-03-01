FROM ubuntu:15.10
MAINTAINER gpwclark
RUN apt-get update && apt-get install -y \
  ruby-full \
  nodejs \
  npm \
  git-core \ 
  curl \
  zlib1g-dev \
  build-essential \
  libssl-dev \
  libreadline-dev \
  libyaml-dev \
  libsqlite3-dev \
  sqlite3 \
  libxml2-dev \
  libxslt1-dev \
  libcurl4-openssl-dev \
  python-software-properties \
  libffi-dev

#RUN gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
#RUN \curl -L https://get.rvm.io | bash -s stable --ruby

RUN useradd -ms /bin/bash user
RUN mkdir -p /home/user/uofantarctica
ADD ./uofantarctica /home/user/uofantarctica
#EXPOSE 4000
RUN git clone https://github.com/rubygems/rubygems
RUN cd rubygems && ruby setup.rb
RUN gem install bundler rake
RUN chown -R user:user /home/user
USER user
WORKDIR /home/user/uofantarctica/
RUN bundle install --deployment
RUN rake build
VOLUME /home/user/uofantarctica/build/
