// https://nodejs.org/dist/latest-v14.x/docs/api/timers.html

/**
```php
echo "step 1";
echo "step 2";

sleep(1)

echo "step 3";
```
 */

console.log("step 1")
console.log("step 2")

setTimeout(() => {
  console.log("step 3")
}, 1000)

console.log("step 4")