# AtCoder Beginner Contest 131
## C - Anti-Division
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
    long long a, b, c, d;
    cin >> a >> b >> c >> d;

    long long cnt_c = ((b - b % c) - (a % c == 0 ? a : (a - a % c + c))) / c + 1;
    long long cnt_d = ((b - b % d) - (a % d == 0 ? a : (a - a % d + d))) / d + 1;

    long long cd = lcm(c, d);
    long long cnt_cd = ((b - b % cd) - (a % cd == 0 ? a : (a - a % cd + cd))) / cd + 1;

    cout << (b - a + 1) - (cnt_c + cnt_d - cnt_cd) << endl;
}
```
