function domainName(url) {
  url = url.replace("https://", "").replace("http://", "").replace("www.", "");
  return url.split(".")[0];
}

// https://www.codewars.com/kata/514a024011ea4fb54200004b
