# encoding: utf-8

lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)

require 'bootstrap-navbar/version'

Gem::Specification.new do |gem|
  gem.name          = 'bootstrap-navbar'
  gem.version       = BootstrapNavbar::VERSION
  gem.platform      = Gem::Platform::RUBY
  gem.author        = 'Manuel Meurer'
  gem.email         = 'manuel@krautcomputing.com'
  gem.summary       = 'Helpers to generate a Twitter Bootstrap style navbar'
  gem.description   = 'Helpers to generate a Twitter Bootstrap style navbar'
  gem.homepage      = 'http://krautcomputing.github.io/bootstrap-navbar'
  gem.license       = 'MIT'

  gem.files         = `git ls-files`.split($/)
  gem.executables   = gem.files.grep(%r(^bin/)).map { |f| File.basename(f) }
  gem.test_files    = gem.files.grep(%r(^(test|spec|features)/))
  gem.require_paths = ['lib']

  gem.add_development_dependency 'rake', '>= 0.9'
  gem.add_development_dependency 'rspec', '~> 3.0'
  gem.add_development_dependency 'rspec-html-matchers', '~> 0.6'
  gem.add_development_dependency 'guard-rspec', '~> 4.2'
  gem.add_development_dependency 'padrino-helpers', '~> 0.12'
  # Listen >= 2.0.0 only works with Ruby >= 1.9.3
  gem.add_development_dependency 'listen', '< 2.0.0' if RUBY_VERSION < '1.9.3'
  gem.add_development_dependency 'bootstrap-sass', '3.0.2.0'
  gem.add_runtime_dependency 'gem_config', '~> 0.3'
end
