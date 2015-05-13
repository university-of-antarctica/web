# -*- encoding: utf-8 -*-
# stub: bootstrap-navbar 2.2.4 ruby lib

Gem::Specification.new do |s|
  s.name = "bootstrap-navbar"
  s.version = "2.2.4"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib"]
  s.authors = ["Manuel Meurer"]
  s.date = "2015-05-07"
  s.description = "Helpers to generate a Twitter Bootstrap style navbar"
  s.email = "manuel@krautcomputing.com"
  s.homepage = "http://krautcomputing.github.io/bootstrap-navbar"
  s.licenses = ["MIT"]
  s.rubygems_version = "2.4.6"
  s.summary = "Helpers to generate a Twitter Bootstrap style navbar"

  s.installed_by_version = "2.4.6" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_development_dependency(%q<rake>, [">= 0.9"])
      s.add_development_dependency(%q<rspec>, ["~> 3.0"])
      s.add_development_dependency(%q<rspec-html-matchers>, ["~> 0.6"])
      s.add_development_dependency(%q<guard-rspec>, ["~> 4.2"])
      s.add_development_dependency(%q<padrino-helpers>, ["~> 0.12"])
      s.add_development_dependency(%q<bootstrap-sass>, ["= 3.0.2.0"])
      s.add_runtime_dependency(%q<gem_config>, ["~> 0.3"])
    else
      s.add_dependency(%q<rake>, [">= 0.9"])
      s.add_dependency(%q<rspec>, ["~> 3.0"])
      s.add_dependency(%q<rspec-html-matchers>, ["~> 0.6"])
      s.add_dependency(%q<guard-rspec>, ["~> 4.2"])
      s.add_dependency(%q<padrino-helpers>, ["~> 0.12"])
      s.add_dependency(%q<bootstrap-sass>, ["= 3.0.2.0"])
      s.add_dependency(%q<gem_config>, ["~> 0.3"])
    end
  else
    s.add_dependency(%q<rake>, [">= 0.9"])
    s.add_dependency(%q<rspec>, ["~> 3.0"])
    s.add_dependency(%q<rspec-html-matchers>, ["~> 0.6"])
    s.add_dependency(%q<guard-rspec>, ["~> 4.2"])
    s.add_dependency(%q<padrino-helpers>, ["~> 0.12"])
    s.add_dependency(%q<bootstrap-sass>, ["= 3.0.2.0"])
    s.add_dependency(%q<gem_config>, ["~> 0.3"])
  end
end
