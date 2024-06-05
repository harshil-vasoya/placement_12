## Solutions 


# 1 # 
#### Given two string needle and haystack , return the index of the frist occurrence of the needle in haystack, or 1 if the needle is nor the part of haystack ####
#### JavaScript

```js
var temp = function (haystack, needle) {
    const slen = haystack.length;
    const plen = needle.length;
    if (slen == plen) {
        return haystack == needle ? 0 : -1;
    }
    for (let i = 0; i <= slen - plen; i++) {
        let j;
        for (j = 0; j < plen; j++) {
            if (haystack[i + j] != needle[j]) {
                break;
            }
        }
        if (j == plen) return i;
    }
    return -1;
};
```

```js
var temp=function(haystack, needle){
  return haystack.indexOf(needle);
}
```

