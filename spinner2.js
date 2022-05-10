const spinner = "| / - \ |"
let delay = 0 

for(const char of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `)
  }, delay)
delay += 200
}

/*
setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
 
  process.stdout.write('\r\\   '); 
}, 700);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 900);*/