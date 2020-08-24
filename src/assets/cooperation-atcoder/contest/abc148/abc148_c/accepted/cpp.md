# AtCoder Beginner Contest 148
## C - Snack
```cpp
#include <iostream>

using namespace std;

template <class T>
T gcm(T a, T b) {
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

template <class T>
T lcm(T a, T b) {
    return a / gcm(a, b) * b;
}

int main() {
    long long a, b;
    cin >> a >> b;
    cout << lcm(a, b) << endl;
}
```
