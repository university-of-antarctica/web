# -*- encoding: utf-8 -*-
# stub: middleman-bootstrap-navbar 2.0.0 ruby lib

Gem::Specification.new do |s|
  s.name = "middleman-bootstrap-navbar"
  s.version = "2.0.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib"]
  s.authors = ["Manuel Meurer"]
  s.date = "2014-02-14"
  s.description = "Middleman extension to easily generate a Twitter Bootstrap style navbar"
  s.email = "manuel@krautcomputing.com"
  s.homepage = "https://github.com/bootstrap-ruby/middleman-bootstrap-navbar"
  s.licenses = ["MIT"]
  s.rubygems_version = "2.4.6"
  s.summary = "Middleman extension to easily generate a Twitter Bootstrap style navbar"

  s.installed_by_version = "2.4.6" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_development_dependency(%q<rake>, [">= 10.0.0"])
      s.add_development_dependency(%q<rspec>, ["~> 2.13"])
      s.add_development_dependency(%q<guard-rspec>, ["~> 3.0"])
      s.add_runtime_dependency(%q<bootstrap-navbar>, ["~> 2.0"])
      s.add_runtime_dependency(%q<middleman-core>, [">= 3.0"])
    else
      s.add_dependency(%q<rake>, [">= 10.0.0"])
      s.add_dependency(%q<rspec>, ["~> 2.13"])
      s.add_dependency(%q<guard-rspec>, ["~> 3.0"])
      s.add_dependency(%q<bootstrap-navbar>, ["~> 2.0"])
      s.add_dependency(%q<middleman-core>, [">= 3.0"])
    end
  else
    s.add_dependency(%q<rake>, [">= 10.0.0"])
    s.add_dependency(%q<rspec>, ["~> 2.13"])
    s.add_dependency(%q<guard-rspec>, ["~> 3.0"])
    s.add_dependency(%q<bootstrap-navbar>, ["~> 2.0"])
    s.add_dependency(%q<middleman-core>, [">= 3.0"])
  end
end
