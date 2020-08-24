# AtCoder Beginner Contest 172
## D - Sum of Divisors
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<long long> f(n + 1, 0);
    for (int i = 1; i <= n; i++) {
        for (int j = i; j <= n; j += i) {
            f[j]++;
        }
    }

    long long res = 0;
    for (int i = 1; i <= n; i++) {
        res += i * f[i];
    }

    cout << res << endl;
}
```
