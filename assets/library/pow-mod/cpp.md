# Library - a^b % mod
```cpp
long long pow_mod(long long a, long long b, long long mod) {
    long long r = 1;
    for (long long i = 1, j = a; i <= b; i <<= 1, j = (j * j) % mod) {
        if ((i & b) > 0) {
            r = (r * j) % mod;
        }
    }
    return r;
}
```
