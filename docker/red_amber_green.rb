
lambda { |stdout,stderr,status|
  output = stdout + stderr
  js_hint_pattern = /^(\d+) error(s?)/
  return :amber if js_hint_pattern.match(output)
  return :red   if /^AssertionError/.match(output)
  return :green if /^All tests passed/.match(output)
  return :amber
}
