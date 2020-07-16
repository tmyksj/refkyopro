# Library - GCD
```cpp
template <class T>
T gcd(T a, T b) {
    if (a < b) {
        T w = a;
        a = b;
        b = w;
    }

    while (b != 0) {
        T w = a % b;
        a = b;
        b = w;
    }

    return a;
}
```
