let spinArr = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
for (let i = 0; i < spinArr.length; i += 1) {
  setTimeout(()=>{
    process.stdout.write(spinArr[i]);
  }, i * 200);
}