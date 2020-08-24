# AtCoder Beginner Contest 070
## C - Multiple Clocks
```cpp
#include <iostream>

using namespace std;

long long gcm(long long a, long long b) {
    if (a < b) {
        long long w = a;
        a = b;
        b = w;
    }

    while (b != 0) {
        long w = a % b;
        a = b;
        b = w;
    }

    return a;
}

long long lcm(long long a, long long b) {
    return a / gcm(a, b) * b;
}

int main() {
    int n;
    cin >> n;

    long long res;
    cin >> res;

    for (int i = 1; i < n; i++) {
        long long t;
        cin >> t;
        res = lcm(res, t);
    }

    cout << res << endl;
}
```
