# AtCoder Beginner Contest 121
## D - XOR World
```cpp
#include <iostream>

using namespace std;

int main() {
    long long a, b;
    cin >> a >> b;

    long long res = 0LL;
    for (long long i = (a & 3); i <= ((a & 3) <= (b & 3) ? (b & 3) : (4 + (b & 3))); i++) {
        res ^= (i & 1LL);
    }

    for (int i = 1; (1LL << i) <= 1000000000000LL; i++) {
        long long s_i = (1LL << i);
        long long s_i_m1 = s_i - 1;

        long long ai = ((a & s_i) == 0 ? 0 : s_i - (a & s_i_m1));
        long long bi = ((b & s_i) == 0 ? 0 : (b & s_i_m1) + 1);

        res |= ((ai + bi) % 2 == 0 ? 0 : s_i);
    }

    cout << res << endl;
}
```
