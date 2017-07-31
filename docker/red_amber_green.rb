
lambda { |stdout,stderr,status|
  output = stdout + stderr
  return :red   if /^(\d+) error/.match(output)
  return :red   if /AssertionError/.match(output)
  return :green if /^All tests passed/.match(output)
  return :amber
}
