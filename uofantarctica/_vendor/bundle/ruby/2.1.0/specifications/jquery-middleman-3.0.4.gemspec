# -*- encoding: utf-8 -*-
# stub: jquery-middleman 3.0.4 ruby lib

Gem::Specification.new do |s|
  s.name = "jquery-middleman"
  s.version = "3.0.4"

  s.required_rubygems_version = Gem::Requirement.new(">= 1.3.6") if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib"]
  s.authors = ["Jasl"]
  s.date = "2013-11-11"
  s.description = "This gem provides jQuery for your Middleman application."
  s.email = ["jasl9187@hotmail.com"]
  s.homepage = "http://rubygems.org/gems/jquery-middleman"
  s.licenses = ["MIT"]
  s.rubygems_version = "2.4.6"
  s.summary = "Use jQuery with Middleman"

  s.installed_by_version = "2.4.6" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<thor>, ["< 2.0", ">= 0.14"])
    else
      s.add_dependency(%q<thor>, ["< 2.0", ">= 0.14"])
    end
  else
    s.add_dependency(%q<thor>, ["< 2.0", ">= 0.14"])
  end
end
